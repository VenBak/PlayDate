const router = require('express').Router();
const { Owner, Dog, Event, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// There are view routes prepended by [rootURL].com/profile

//Gets ALL posts and displays it on homepage
router.get('/', withAuth, async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Find the logged in user based on the session ID
        const user = await Owner.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: {model: Dog}
        });
        const events = await Event.findAll({
            where: {host_id: req.session.user_id},
            raw: true
        });
        let userObj = user.get({ plain: true });
        let objForRender = {
            ...userObj,
            events,
            logged_in: req.session.logged_in
        };
        res.render('profile', objForRender);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.get('/event/:id', withAuth, async (req, res) => {
    try {
        // Find the user's dog based on the request parameter called dog_id
        const event = await Event.findOne({
            where: {id: req.params.id},
            include: [{
                model: Owner,
                as: 'host',
                attributes: ['first_name', 'last_name', 'pic_hyperlink'],
                include: { model: Dog }
              }, 
              {
                model: Owner,
                as: 'attendees',
                attributes: ['first_name','last_name', 'pic_hyperlink']
              }, {
                model: Comment,
                attributes: ['text'],
                include: { model: Owner, attributes: ['first_name'] }
              }]
          });
        let eventObj = event.get({ plain: true });
        if (req.session.user_id !== event.host_id) {
            res.redirect('/profile');
        };
        res.render('eventprofile', {
            ...eventObj,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.redirect('/profile');
    }
})

//Gets ALL posts and displays it on homepage
router.get("/dog/:id", async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Find the user's dog based on the request parameter called dog_id
        const dogData = await Dog.findByPk(req.params.id, {
        });
        //  res.status(200).json(dogData); //For testing only
        const dog = dogData.get({ plain: true });

        res.render('dogprofile', {
            ...dog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);

//Gets ALL posts and displays it on homepage
router.get("/owner/:id", withAuth, async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Find the logged in user based on the session ID
        const userData = await Owner.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Dog }],
        });
        // res.status(200).json(userData); //For testing only
        const user = userData.get({ plain: true });

        res.render('profileowner', {
            ...user,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;