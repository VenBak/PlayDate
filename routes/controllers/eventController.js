const { Event, Owner, Dog, Comment } = require('../../models');

exports.getAll = function (req, res) {
  // find all events, include their dogs
  return Event.findAll({
    include: {
      model: Owner,
      as: 'host',
      include: Dog
    }
  })
};

exports.renderAll = function (req, res) {
  Event.findAll({
    include: {
      model: Owner,
      as: 'host',
      include: Dog
    },
    raw: true
  })
  .then((events) => {
    res.status(200).render('events', {events, logged_in: req.session.logged_in});
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.getOne = function (req, res) {
  // find one event by their `id` value (primary key)
  // include their dogs
  return Event.findOne({
    where: {id: req.params.id},
    include: [{
      model: Owner,
      as: 'host',
      include: Dog
    }, 
    {
      model: Owner,
      as: 'attendees'
    }, {
      model: Comment
    }]
  })
};

exports.create = function (req, res) {
  // create a new event
  let data = req.body;
  data.host_id = req.body.owner_id || req.session.user_id; 
  if (!data.host_id) {
    res.status(400).json({message: 'No user_id included in req.body or req.session'});
    return;
  }
  return Event.create(data)
};

exports.update = function (req, res) {
  // update a event by its `id` value
  return Event.update(req.body, {
    where: {
      id: req.params.id
    }
  })
};

exports.delete = function (req, res) {
  // delete a event by its `id` value
  return Event.destroy({
    where: {
      id: req.params.id
    }
  })
};

exports.testFind = function (req, res) {
  Event.findByPk(req.params.id, {
  include: [{
    model: Owner,
    as: 'host',
    attributes: ['first_name', 'last_name', 'pic_hyperlink'],
    include: { model: Dog }
  }, 
  {
    model: Owner,
    as: 'attendees',
    attributes: ['first_name','last_name', 'pic_hyperlink']
  }, {
    model: Comment,
    attributes: ['text'],
    include: { model: Owner, attributes: ['first_name'] }
  }]
})
.then((event) => {
  res.status(200).json(event);
})
.catch((err) => {
  console.log(err);
  res.status(400).json(err);
});
}