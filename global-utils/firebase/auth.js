const fbAdmin = require('firebase-admin');

var uid = "3GJrugBaZpORzjcoGStsqqI09eG3";

exports.returnToken = (callback) => {
    fbAdmin.auth().createCustomToken(uid)
    .then(function(customToken) {
        console.log(customToken);
        callback(customToken);
    })
    .catch(function(error) {
        console.log("Error creating custom token: ", error);
    });
};
