const router = require('express').Router();
const { Parent } = require('../../models');

router.get('/', async (req, res) => {

  // find all parents
  // The Category will include its associated products
  try {
    const parentData = await Parent.findAll();
    // respond wit the data
    res.status(200).json(parentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;