const router = require('express').Router();
const { Owner, Dog, Event } = require('../models');
const withAuth = require('../utils/auth');

//Gets ALL posts and displays it on homepage
router.get('/', withAuth, async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Find the logged in user based on the session ID
        const userData = await Owner.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Dog }],
        });
        // res.status(200).json(userData); //For testing only
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);



module.exports = router;