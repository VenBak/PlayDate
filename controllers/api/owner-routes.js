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

router.post('/', (req, res) => {
  // create a new owner and log them in
  Owner.create(req.body)
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
});

router.post('/login', (req, res) => {
  Owner.findOne({
    where: {username: req.body.username}
  })
  .then((owner) => {
    owner.checkPassword(req.body.password)
    .then((ownerObj) => {
      req.session.save(() => {
        req.session.user_id = ownerObj.id;
        req.session.logged_in = true;
  
        res.status(200).json({user: ownerObj, message: 'Succesfully logged in'});
      });
    })
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

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