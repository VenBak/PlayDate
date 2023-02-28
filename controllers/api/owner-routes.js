const router = require('express').Router();
const { Owner, Dog } = require('../../models');

router.get('/', (req, res) => {
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
});

router.get('/:id', (req, res) => {
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
});

router.post('/', async (req, res) => {
  // create a new owner
  try {
  const newOwner = await Owner.create({
    username: req.body.username,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    location_zip: req.body.location_zip,
    description: req.body.description
  })

  req.session.save(() => {
    req.session.OwnerId = newOwner.id;
    req.session.username = newOwner.username;
    req.session.loggedIn = true;

  res.json(newOwner)
  })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
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
});

router.delete('/:id', (req, res) => {
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
});

module.exports = router;