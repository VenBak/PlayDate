const router = require('express').Router();

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


router.get('/profile', (req, res) => {
    //Renders signup handlebars template on the signup page
    res.render('profile', {
        logged_in: req.session.logged_in
    });
});


module.exports = router;