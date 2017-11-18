exports.validateNewAccountInfo = (req, res) => {
    // TODO - add validation for the minimum data we want
    //        for account creation.
};

exports.createNewAccount = (req, res) => {
    // TODO - communicate with firebase to add a new user to the app.
    var fbCreateUser = require('../../../global-utils/firebase/users/create-user');

    var email = req.body.email;
    var pass = req.body.pass;

    fbCreateUser.newUserAction(email, pass);

    res.send('success creating new user.');
}; 