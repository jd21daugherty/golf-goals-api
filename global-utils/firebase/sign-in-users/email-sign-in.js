const firebase = require('firebase');

exports.emailPasswordSignIn = (email, password) => {
    // TODO - create sign in method for users
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode === 'auth/wrong-password') {
            returnMessage = 'Wrong password';
        } else {
            returnMessage = errorMessage;
        }
        console.log(error);
    });
};

