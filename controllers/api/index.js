// Create the different routes under the /api route
const router = require('express').Router();
const owner = require('./owner-routes');

router.use('/owner', owner);

module.exports = router;