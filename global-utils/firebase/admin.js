var admin = require('firebase-admin');

var serviceAccount = require('./auth-test-api-f2873-firebase-adminsdk-pk2oh-41ab7b59dc.json');

exports.initFB = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://auth-test-api-f2873.firebaseio.com'
    });

    console.log('firebase initialized.');
}