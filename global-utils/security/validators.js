exports.validateEmailAddress = (emailAddress) => {
    var reg = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z0-9.\-_]+/;

    if (reg.test(emailAddress)) {
        return true;
    } else {
        return false;
    }
};