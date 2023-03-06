const router = require('express').Router();
const eventController = require('../controllers/eventController');

// There are view routes prepended by [rootURL].com/events

router.get('/', (req, res) => {
  eventController.getAllforUser(req, res)
  .then(events => {
    plainEvents = events.map(event => event.get({ plain: true }));
    res.status(200).render('events', {
      events: plainEvents,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
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
    let ownsEvent = plainEvent.host_id == req.session.user_id;
    res.status(200).render('eventprofile', {...plainEvent,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      ownsEvent
    });
  })
  .catch(err => {
    res.redirect('../');
    console.log(err);
  })
});

module.exports = router