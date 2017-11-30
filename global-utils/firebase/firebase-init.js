// Probably do not need this anymore.
// Keeping this script until admin SDK
// is performing functions properly

const firebase = require('firebase');

//var svcAccount = require('../../golf-goals-bae8a-firebase-adminsdk-imjlg-c2a325ee17.json');

exports.initFB = () => {
    firebase.initializeApp({
        apiKey: 'AIzaSyDnDhWsSMEFVOl5DZuoX6JZr_Ej5IRLr0c',
        databaseURL: 'https://golf-goals-bae8a.firebaseio.com'
    })
};