const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getAll);
router.post('/', commentController.create);
router.get('/:id', commentController.getOne);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.delete);

module.exports = router;