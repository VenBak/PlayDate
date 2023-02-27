// Create the different routes under the /api route
const router = require('express').Router();
const ownerRoutes = require('./owner-routes');
const dogRoutes = require('./dog-routes');

router.use('/owners', ownerRoutes);
router.use('/dogs', dogRoutes);

module.exports = router;