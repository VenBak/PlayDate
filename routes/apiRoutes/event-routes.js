const router = require('express').Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAll);
router.post('/', eventController.create);
router.get('/:id', eventController.getOne);
router.put('/:id', eventController.update);
router.delete('/:id', eventController.delete);

module.exports = router;
