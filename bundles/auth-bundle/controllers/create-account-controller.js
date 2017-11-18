exports.validateNewAccountInfo = (req, res) => {
    // TODO - add validation for the minimum data we want
    //        for account creation.
    var responseBody = "";
    var validate = require('../../../global-utils/security/validators');
    var email = req.body.email;
    if (validate.validateEmailAddress(email)) {
        responseBody = 'valid email';
    } else {
        responseBody = 'invalid email';
    }

    var password = req.body.pass;
    if (validate.validatePassword(password)) {
        responseBody = responseBody + ' valid password';
    } else {
        responseBody = responseBody + ' invalid password';
    }

    res.send(responseBody);
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