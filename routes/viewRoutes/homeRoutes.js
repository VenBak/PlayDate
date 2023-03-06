const router = require('express').Router();
const eventController = require('../controllers/eventController');
const e = require('express');
const { Owner, Dog, Event, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// There are view routes prepended by [rootURL].com/

router.get('/', async (req, res) => {
    eventController.getAll(req, res)
        .then(events => {
            plainEvents = events.map(event => event.get({ plain: true }));
            res.status(200).render('homepage', {
                events: plainEvents,
                logged_in: req.session.logged_in,
                user_id: req.session.user_id
            });
        })
        .catch(err => {
            console.log(err);
            res.render('homepage', {
                events: [],
                logged_in: req.session.logged_in,
                user_id: req.session.user_id
            });
        })
});

router.get('/login', (req, res) => {
    //Renders login handlebars template on the login page
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    //Renders signup handlebars template on the signup page
    res.render('signup', {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
    });
});

router.get('/signup-2', withAuth, (req, res) => {
    //Renders signup handlebars template on the signup page
    res.render('signup-2', {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
    });
});

router.get('/signup-3', withAuth, async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Find the user's dog based on the request parameter called dog_id
        const userData = await Owner.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: { model: Dog }
        });
        // res.status(200).json(userData); //For testing only
        const user = userData.get({ plain: true });
        req.session.dog_id = user.dogs[0].id
        //Renders signup handlebars template on the signup page
        res.render('signup-3', {
            ...user,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;