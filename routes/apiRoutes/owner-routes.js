const router = require('express').Router();
const ownerController = require('../controllers/ownerController');

router.get('/', ownerController.getAll);
router.post('/', ownerController.create);
router.get('/:id', ownerController.getOne);
router.put('/:id', ownerController.update);
router.delete('/:id', ownerController.delete);
router.post('/login', ownerController.login);
router.post('/logout', ownerController.logout);

module.exports = router;
