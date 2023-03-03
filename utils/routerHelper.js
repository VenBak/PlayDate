const router = require('express').Router();

const routerSetupHelper = (routeConfig, controller) => {
  routeConfig.routes.forEach(route => {
    router[route.http](routeConfig.localPath + route.path, (req, res) => {
      routeHelper(req, res, route.method, controller)
    })
  })
  return router;
}

// Note: method passed from controller MUST return a promise
// Use promise.resolve or .reject to send static data
function routeHelper(req, res, method, controller) {
  return controller[method](req, res)
  .then(item => res.status(200).json(item))
  .catch(err => res.status(400).json(err))
}

module.exports = routerSetupHelper;