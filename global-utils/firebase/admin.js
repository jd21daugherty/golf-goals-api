var admin = require('firebase-admin');

var svcAccount = require('../../golf-goals-bae8a-firebase-adminsdk-imjlg-c2a325ee17.json');

exports.initFB = () => {
    admin.initializeApp({
        credential: admin.credential.cert(svcAccount),
        databaseURL: 'https://golf-goals-bae8a.firebaseio.com'
    });

    console.log('firebase initialized.');
}