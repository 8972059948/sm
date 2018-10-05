var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kuntalkantidas.besu@gmail.com',		//email ID
        pass: '9735084573`'	    			//Password 
    }
});
   
/* GET users listing. */
router.get('/', function(req, res, next) {	
    // console.log("Email: ",process.env.EMAIL);
	var email = 'kuntalkantidas.besu@gmail.com';
	var otp = "123456";
	sendMail(email,otp);
    res.send('respond with a resource...');
});

module.exports = router;

const sendMail = (email , otp) => {
    
    var details = {
	from: 'kuntalkantidas.besu@gmail.com', 		// sender address same as above
	to: email, 					// Receiver's email id
	subject: 'Your demo OTP is ', 			// Subject of the mail.
	html: otp					// Sending OTP 
    };


	transporter.sendMail(details, function (error, data) {
		if(error) {
			console.log("Response Message:",error.message)
		}
		else {
			console.log(data);
		}
	});
}
