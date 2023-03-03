const router = require('express').Router();
const eventController = require('../controllers/eventController');

router.get('/', async (req, res) => {
    eventController.getAllforZip(req, res)
    .then(events => {
        console.log("----- INSIDE EVENT CONTROLLER -----")
        plainEvents = events.map(event => event.get({ plain: true }));
        console.log(plainEvents);
        res.status(200).render('homepage', {
            events: plainEvents,
            logged_in: req.session.logged_in
        });
      })
      .catch(err => {
        console.log(err);
        res.render('homepage', {
            events: [],
            logged_in: req.session.logged_in
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
        logged_in: req.session.logged_in
    });
});

module.exports = router;