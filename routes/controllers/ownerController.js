const { Owner, Dog } = require('../../models');

exports.getAll = function (req, res) {
  // find all owners, include their dogs
  Owner.findAll({
    include: Dog
  })
  .then((owners) => {
    res.status(200).json(owners);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.getOne = function (req, res) {
  // find one owner by their `id` value (primary key)
  // include their dogs
  Owner.findOne({
    where: {id: req.params.id},
    include: Dog
  })
  .then((owner) => {
    res.status(200).json(owner);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.create = function (req, res) {
  // create a new owner and log them in
  Owner.create(
    {
      ...req.body
    },
    {
      include: [ Dog ]
    }
  )
  .then((owner) => {
    req.session.save(() => {
      req.session.user_id = owner.id;
      req.session.logged_in = true;

      res.status(200).json(owner);
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.login = function (req, res)  {
  Owner.findOne({
    where: {username: req.body.username}
  })
  .then((owner) => {
    let passMatch = owner.checkPassword(req.body.password);

    if (passMatch) {
      req.session.save(() => {
        req.session.user_id = owner.id;
        req.session.logged_in = true;
  
        res.status(200).json({user: owner, message: 'Succesfully logged in'});
      });
    } else {
      res.status(400).json({message: 'Invalid password or email'});
    }
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.logout = function (req, res) {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
};

exports.update = function (req, res) {
  // update a owner by its `id` value
  Owner.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((owner) => {
    res.status(200).json(owner);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};

exports.delete = function (req, res) {
  // delete a owner by its `id` value
  Owner.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((owner) => {
    res.status(200).json(owner);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
};