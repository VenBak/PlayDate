const { Owner, Dog } = require('../../models');

exports.getAll = function (req, res) {
  // find all dogs, include their owners
  Dog.findAll({
    include: Owner
  })
  .then((dogs) => {
    res.status(200).json(dogs);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.getOne = function (req, res) {
  // find one dog by its `id` value, include their owners
  Dog.findOne({
    where: { id: req.params.id },
    include: Owner
  })
    .then((dog) => {
      req.session.dog_id = dog.id;
      res.status(200).json(dog);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

exports.create = function (req, res) {
  // create a new dog
  let data = req.body;
  data.owner_id = req.body.owner_id || req.session.user_id; 
  if (!data.owner_id) {
    res.status(400).json({message: 'No user_id included in req.body or req.session'});
    return;
  }
  Dog.create(data)
  .then((dog) => {
    res.status(200).json(dog);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.update = function (req, res) {
  // update a dog by its `id` value
  Dog.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((dog) => {
      res.status(200).json(dog);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

exports.delete = function (req, res) {
  // delete a dog by its `id` value
  Dog.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((dog) => {
      res.status(200).json(dog);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
