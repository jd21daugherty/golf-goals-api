exports.validateEmailAddress = (emailAddress) => {
    var reg = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z0-9.\-_]+/;

    if (reg.test(emailAddress)) {
        return true;
    } else {
        return false;
    }
};

exports.validatePassword = (password) => {
    var reg = /^^(?=.*[$-/:-?{-~!"^_`\[\]\\@#])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9$-/:-?{-~!"^_`\[\]\\@#]{12,}/;

    if (reg.test(password)) {
        return true;
    } else {
        return false;
    }
};