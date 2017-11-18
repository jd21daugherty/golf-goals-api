const routes = require('express').Router();
const createAccount = require('../controllers/create-account-controller');
const login = require('../controllers/login-controller');

// create account routes

// validate-account-info
routes.post('/validate-account-info', createAccount.validateNewAccountInfo);

// create-account - this is a redirect from validate-account-info on success.
routes.post('/create-account', createAccount.createNewAccount);

// on success will redirect to a home page of sorts
// or an enter more info page


// login routes

// login
routes.post('/login', login.login);

// login-google
routes.post('/login-google', login.loginGoogle);

// login-facebook
routes.post('/login-facebook', login.loginFacebook);

// login-twitter
routes.post('/login-twitter', login.loginTwitter);


// on success of any of these will perform a redirect to a home page.

module.exports = routes;