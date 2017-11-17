const routes = require('express').Router();
const createAccount = require('../controllers/create-account-controller');
const login = require('../controllers/login-controller');

// create account routes

// validate-account-info
routes.post('/validate-account-info', createAccount.validate_new_account_info);

// create-account - this is a redirect from validate-account-info on success.
routes.post('/create-account', createAccount.validate_new_account_info);

// on success will redirect to a home page of sorts
// or an enter more info page


// login routes

// login
routes.post('/login', login.login);

// login-google
routes.post('/login-google', login.login_google);

// login-facebook
routes.post('/login-facebook', login.login_facebook);

// login-twitter
routes.post('/login-twitter', login.login_twitter);


// on success of any of these will perform a redirect to a home page.

module.exports = routes;