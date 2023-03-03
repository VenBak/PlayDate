const controller = require('../controllers/eventController');
const routerSetupHelper = require('../../utils/routerHelper');

const config = [
  {http: 'get', path: '/', method: 'getAll'},
  {http: 'post', path: '/', method: 'create'},
  {http: 'get', path: '/:id', method: 'getOne'},
  {http: 'put', path: '/:id', method: 'update'},
  {http: 'delete', path: '/:id', method: 'delete'}
]

const router = routerSetupHelper(config, controller);

router.get('/test/:id', controller.testFind)

module.exports = router;
