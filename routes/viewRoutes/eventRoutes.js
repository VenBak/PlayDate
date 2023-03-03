const router = require('express').Router();
const eventController = require('../controllers/eventController');

router.get('/', (req, res) => {
  eventController.getAllforUser(req, res)
  .then(events => {
    plainEvents = events.map(event => event.get({ plain: true }));
    res.status(200).render('events', {events: plainEvents, logged_in: req.session.logged_in});
  })
  .catch(err => {
      res.redirect('../');
      console.log(err);
  })
});

router.get('/:id', (req, res) => {
  eventController.getOne(req, res)
  .then(event => {
    plainEvent = event.get({ plain: true });
    res.status(200).render('eventprofile', {...event, logged_in: req.session.logged_in});
  })
  .catch(err => {
      res.redirect('../');
      console.log(err);
  })
});

module.exports = router