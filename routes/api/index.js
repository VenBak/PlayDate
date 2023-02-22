// Create the different routes under the /api route
const router = require('express').Router();
const parent = require('./parent-routes');

router.use('/parent', parent);

module.exports = router;