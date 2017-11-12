const routes = require('express').Router();
const index = require('../controllers/index-controller');
const startRound = require('../controllers/start-round-controller');

routes.get('/', index.index_action);
routes.get('/start-round', startRound.index_action);

module.exports = routes;