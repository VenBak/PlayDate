const router = require('express').Router();
const { Owner, Dog, Event } = require('../models');
const eventController = require('../routes/controllers/eventController');

router.get('/', async (req, res) => {
    res.render('homepage', {
        logged_in: req.session.logged_in
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
        logged_in: req.session.logged_in
    });
});

router.get('/events', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        let events = await findEventsByHost(req.session.user_id);

        res.render('events', {
            events,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

const findEventsByHost = async (hostId) => {
    let events = await Event.findAll({
        where: {host_id: hostId},
        raw: true
    });
    console.log("----- HELLLLOOOOOOOO ------")
    console.log(events);
    return events;
}

module.exports = router;