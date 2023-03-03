// Create the different routes under the /api route
const router = require('express').Router();
const ownerRoutes = require('./owner-routes');
const dogRoutes = require('./dog-routes');
const eventRoutes = require('./event-routes');
const commentRotues = require('./comment-routes');

router.use('/', ownerRoutes);
router.use('/dogs', dogRoutes);
router.use('/', eventRoutes);
router.use('/comments', commentRotues);

module.exports = router;