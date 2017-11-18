exports.validateNewAccountInfo = (req, res) => {

    var validate = require('../../../global-utils/security/validators');

    var email = req.body.email;
    var password = req.body.pass;
    var passwordVerify = req.body.verifyPass;

    var jsonResponse = require('../models/new-account-model');

    if (validate.validateEmailAddress(email)) {
        jsonResponse.email = "success!";
    } else {
        jsonResponse.email = "failure.";
    }
    
    if (validate.validatePassword(password)) {
        jsonResponse.password = "success!";

        if (password === passwordVerify) {
            jsonResponse.passwordVerify = "success!";
        } else {
            jsonResponse.passwordVerify = "failure.";
        }

    } else {
        jsonResponse.password = "failure.";
    }

    res.json(jsonResponse);
};

exports.createNewAccount = (req, res) => {
    // TODO - add functionality for users creating accounts with
    //        Google, Facebook, and Twitter.
    var fbCreateUser = require('../../../global-utils/firebase/users/create-user');

    var email = req.body.email;
    var pass = req.body.pass;

    fbCreateUser.newUserAction(email, pass);

    res.send('success creating new user.');
}; 