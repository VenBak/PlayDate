// Create the /api route
const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
