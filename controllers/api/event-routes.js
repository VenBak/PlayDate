const router = require('express').Router();
const { Event, Owner, Dog } = require('../../models');

router.get('/', (req, res) => {
  // find all events, include their dogs
  Event.findAll({
    include: {
      model: Owner,
      include: Dog
    }
  })
  .then((events) => {
    res.status(200).json(events);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one event by their `id` value (primary key)
  // include their dogs
  Event.findOne({
    where: {id: req.params.id},
    include: {
      model: Owner,
      include: Dog
    }
  })
  .then((event) => {
    res.status(200).json(event);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new event
  Event.create(req.body)
  .then((event) => {
    res.status(200).json(event);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a event by its `id` value
  Event.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((event) => {
    res.status(200).json(event);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a event by its `id` value
  Event.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((event) => {
    res.status(200).json(event);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

module.exports = router;