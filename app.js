var whatsapi = require('whatsapi');
var logger = require('./logger');
var jf = require('jsonfile');
var api = require('./api');

<<<<<<< HEAD
const credentialsFilePath = './wa_credentials.json';
const CREDENTIALS = jf.readFileSync(credentialsFilePath);
=======
const CREDENTIALS = jf.readFileSync('./wa_credentials.json');
>>>>>>> da5c5161d600d81c0f8c1a851adb9391e9950c55

/** CREATE WHATSAPP OBJECT */

var wa = whatsapi.createAdapter({
    msisdn: CREDENTIALS.phone, // phone number with country code
    username: 'cinnabot', // your name on WhatsApp
    password: CREDENTIALS.password, // WhatsApp password
    ccode: CREDENTIALS.cc // country code
});

/** START CONNECTION */

wa.connect(function connected(err) {
    if (err) { console.log(err); return; }
    console.log('Connected');
    // Now login
    wa.login(logged);
});

/** EVENT HANDLERS */

wa.on('receivedMessage', function(messageObj) {
    var responseObj = api.request(messageObj);
    var responsePhone = responseObj.phone;
    var responseMessage = responseObj.message;
    wa.sendMessage(responsePhone, responseMessage, function (err, id) {
	    if (err) {
            console.log(err.message);
            return;
        } else {
		    logger.logMessage(message, responseObj);
            logger.storeLogs();
            // console.log('Server received message %s', id);
        }
	});
});

/** CALL BACKS */

function logged(err) {
    if (err) { console.log(err); return; }
    console.log('Logged in to WA server');
    wa.sendIsOnline();
}
