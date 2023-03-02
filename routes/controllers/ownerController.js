const { Owner, Dog } = require('../../models');

exports.getAll = function (req, res) {
  // find all owners, include their dogs
  return Owner.findAll({
    include: Dog
  })
};

exports.getOne = function (req, res) {
  // find one owner by their `id` value (primary key)
  // include their dogs
  return Owner.findOne({
    where: { id: req.params.id },
    include: Dog
  })
};

exports.create = function (req, res) {
  // create a new owner and log them in

  return new Promise((resolve, reject) => {
    Owner.create(
      {
        ...req.body
      },
      {
        include: [Dog]
      }
    )
    .then((owner) => {
      req.session.save(() => {
        req.session.user_id = owner.id;
        req.session.logged_in = true;
        console.log('!!! ----- inside owner create then')
        resolve(owner);
      });
    })
    .catch(err => {
      console.log('!!! ----- inside owner create CATCH')
      reject(err);
    })
  })
};

exports.login = function (req, res) {
  return new Promise((resolve, reject) => {
    Owner.findOne({
      where: { username: req.body.username }
    })
    .then((owner) => {
      let passMatch = owner.checkPassword(req.body.password);

      if (passMatch) {
        req.session.save(() => {
          req.session.user_id = owner.id;
          req.session.logged_in = true;

          resolve(owner);
        });
      } else {
        reject('Invalid password or email');
      }
    })
  })
};

exports.logout = function (req, res) {
  return new Promise((resolve, reject) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        resolve('Succesfully logged out')
      });
    } else {
      resolve('No user logged in')
    }
  })
};

exports.update = function (req, res) {
  // update a owner by its `id` value
  return Owner.update(req.body, {
    where: {
      id: req.params.id
    }
  })
};

exports.delete = function (req, res) {
  // delete a owner by its `id` value
  return new Promise((resolve, reject) => {
    Owner.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      req.session.destroy(() => resolve('Succesfully deleted'));
    })
    .catch(err => reject(err))
  })
};
