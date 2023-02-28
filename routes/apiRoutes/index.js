// Create the different routes under the /api route
const router = require('express').Router();
const ownerRoutes = require('./owner-routes');
const dogRoutes = require('./dog-routes');
const eventRoutes = require('./event-routes');

router.use('/owners', ownerRoutes);
router.use('/dogs', dogRoutes);
router.use('/events', eventRoutes);

module.exports = router;