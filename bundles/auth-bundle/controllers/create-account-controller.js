// initialize firebase through admin.js
var fbAdmin = require('../../../global-utils/firebase/admin');

exports.validateNewAccountInfo = (req, res) => {
    // TODO - add validation for the minimum data we want
    //        for account creation.
};

exports.createNewAccount = (req, res) => {
    // TODO - communicate with firebase to add a new user to the app.
    var fbCreateUser = require('../../../global-utils/firebase/users/create-user');
    
    fbAdmin.initFB();

    fbCreateUser.newUserAction();
}; 