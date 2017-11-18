const routes = require('express').Router();
const auth = require('./bundles/auth-bundle/config/router');

// API root for time being
routes.get('/', (req, res) => {
    res.status(200).send('API root.');
});

// route to auth-bundle
routes.use('/auth', auth);

module.exports = routes;