const routes = require('express').Router();
const index = require('../controllers/index-controller');
const dashboard = require('../controllers/dashboard-controller');

routes.get('/', index.index_action);
routes.get('/dashboard', dashboard.index_action);

module.exports = routes;