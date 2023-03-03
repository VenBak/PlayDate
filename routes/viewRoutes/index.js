// Create the different routes under the [root domain]/ route
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/events', eventRoutes);

module.exports = router;