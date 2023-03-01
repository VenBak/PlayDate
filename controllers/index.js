// Create the /api route
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');
// const eventRoutes = require('./eventRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
// router.use('/events', eventRoutes);

module.exports = router;
