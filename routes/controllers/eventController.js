const { Event, Owner, Dog } = require('../../models');

exports.getAll = function (req, res) {
  // find all events, include their dogs
  Event.findAll({
    include: {
      model: Owner,
      as: 'host',
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
};

exports.getOne = function (req, res) {
  // find one event by their `id` value (primary key)
  // include their dogs
  Event.findOne({
    where: {id: req.params.id},
    include:
      {
        model: Owner,
        as: 'attendees'
      }
  })
  .then((event) => {
    res.status(200).json(event);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.create = function (req, res) {
  // create a new event
  Event.create(req.body)
  .then((event) => {
    res.status(200).json(event);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.update = function (req, res) {
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
};

exports.delete = function (req, res) {
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
};