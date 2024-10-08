const nodemailer = require('nodemailer');

// Netlify function handler
exports.handler = async function (event, context) {
    try {
        // Check if the event body is correctly formatted as JSON
        if (!event.body) {
            throw new Error('No data found');
        }
        const data = JSON.parse(event.body);

        // Extract data
        const { firstName, lastName, zipcode, contact, contactMethod, bestTime } = data;

        // Setup Nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'polarwaterllc@gmail.com', // Replace with your Gmail email
                pass: 'ctjo gmxk msca mwap',  // Replace with your Gmail password or App-specific password
            },
        });

        // Email options
        let mailOptions = {
            from: 'stopGivingMyGFLabGrownShroom@uAsshole.com', // Replace with your "from" email address
            to: 'polarwaterllc+sales@gmail.com', // Replace with the email where you want to send form data
            subject: 'New Form Submission',
            text: 
                `Name: ${firstName} ${lastName}
                Zipcode: ${zipcode}
                Contact: ${contact}
                Preferred Method of Contact: ${contactMethod}
                Best Time to Contact: ${bestTime}`
        };

        // Send the email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email.', error: error.message }),
        };
    }
};
