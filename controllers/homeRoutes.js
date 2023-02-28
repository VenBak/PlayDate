const router = require('express').Router();

router.get('/', async (req, res) => { res.render('homepage') });

router.get('/login', (req, res) => {
    //Renders login handlebars template on the login page
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login');
});

router.get('/signup', (req, res) => {
    //Renders signup handlebars template on the signup page
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('signup');
});

module.exports = router;