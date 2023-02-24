// Create the different routes under the /api route
const router = require('express').Router();
const owner = require('./owner-routes');
const dogRoutes = require('./dog-routes');

router.use('/owner', owner);
router.use('/dogs', dogRoutes);

module.exports = router;