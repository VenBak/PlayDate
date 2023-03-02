const router = require('express').Router();

const routerSetupHelper = (routeConfig, controller) => {
  routeConfig.forEach(route => {
    router[route.http](route.path, (req, res) => {
      routeHelper(req, res, route.method, controller)
    })
  })
  return router;
}

function routeHelper(req, res, method, controller) {
  return controller[method](req, res)
  .then(item => res.status(200).json(item))
  .catch(err => res.status(400).json(err))
}

module.exports = routerSetupHelper;