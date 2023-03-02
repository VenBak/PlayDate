const router = require('express').Router();
const eventController = require('../controllers/eventController');

router.get('/', (req, res) => {
  eventController.getAll(req, res)
  .then(events => {
    plainEvents = events.map(event => event.get({ plain: true }))
    console.log(plainEvents)
    console.log(req.session)
    res.status(200).render('events', {events: plainEvents, logged_in: req.session.logged_in});
  })
  .catch(err => {
      res.redirect('../');
      console.log(err);
  })
});

module.exports = router