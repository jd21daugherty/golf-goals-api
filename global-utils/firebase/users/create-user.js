var fbAdmin = require('firebase-admin');

exports.newUserAction = (email, password) => {

    fbAdmin.auth().createUser({
        email: email,
        password: password
    })
    .then(function(userRecord) {
        console.log('Success creating new user: ', userRecord.uid);
    })
    .catch(function(error) {
        console.log('Error creating new user: ', userRecord.uid);
    });
}
