var admin = require('firebase-admin');

var svcAccount = require('./auth-test-api-f2873-firebase-adminsdk-pk2oh-41ab7b59dc.json');

exports.initFB = () => {
    admin.initializeApp({
        credential: admin.credential.cert(svcAccount),
        databaseURL: 'https://auth-test-api-f2873.firebaseio.com'
    });

    console.log('firebase initialized.');
}