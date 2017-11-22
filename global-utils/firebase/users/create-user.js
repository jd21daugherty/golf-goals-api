var firebase = require('firebase');

exports.addNewUserAction = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            console.log('weak password');
        } else {
            console.log('somethin else.');
        }
        console.log(error);
    });
};
