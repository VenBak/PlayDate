const router = require('express').Router();
const { Owner } = require('../../models');

router.get('/', async (req, res) => {

  // find all owners
  // The Category will include its associated products
  try {
    const ownerData = await Owner.findAll();
    // respond wit the data
    res.status(200).json(ownerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;