
require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'agweraenock76@gmail.com', 
        pass: process.env.PASSWORD || 'agwenchez'
    }
});


let mailOptions = {
    from: 'agweraenock76@gmail.com', 
    to: ' agweraenock76@gmail.com',
    subject: 'Agwenchez kwenye programming',
    text: 'this thing has to work, hatutaki mchezo!!'
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});
