module.exports = {
    makeid,
}

function makeid(length) {
    var result = '';
    var characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}