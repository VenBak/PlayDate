// Create the different routes under the /api route
const router = require('express').Router();
const ownerRoutes = require('./owner-routes');

router.use('/owner', ownerRoutes);

module.exports = router;