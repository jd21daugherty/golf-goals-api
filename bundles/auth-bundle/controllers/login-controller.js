const emailSignIn = require('../../../global-utils/firebase/sign-in-users/email-sign-in');

exports.login = (req, res) => {
    // TODO - login processing directly into app
    emailSignIn.emailPasswordSignIn(req.body.email, req.body.pass);
};

exports.loginGoogle = (req, res) => {
    // TODO - login processing with google
};

exports.loginFacebook = (req, res) => {
    // TODO - login processing with facebook
};

exports.loginTwitter = (req, res) => {
    // TODO - login processing with twitter
};