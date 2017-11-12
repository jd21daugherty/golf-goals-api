const routes = require('express').Router();
const admin = require('./bundles/admin-bundle/config/router');
const round = require('./bundles/round-bundle/config/router');

routes.get('/', (req, res) => {
    res.status(200).send('This is the API root.');
});

routes.use('/admin', admin);
routes.use('/round', round);

module.exports = routes;