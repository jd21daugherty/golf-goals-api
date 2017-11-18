var fbAdmin = require('firebase-admin');

exports.newUserAction = (newUserData) => {
    fbAdmin.auth().createUser({
        uid: "uC1",
        email: "controller@success.com"
    })
    .then(function(userRecord) {
        console.log('Success creating new user: ', userRecord.uid);
    })
    .catch(function(error) {
        console.log('Error creating new user: ', userRecord.uid);
    });
}
