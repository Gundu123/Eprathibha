const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'dharavathbhavsingh5@gmail.com', 
    pass: 'hsaxvsdjxahqttuj', 
  },
});

app.post('/api/storeFormData', async (req, res) => {
  const formData = req.body;
  console.log('Received POST request:', req.body);

  // Replace with the actual recipient's email address
  const recipientEmail = 'chinthammshiva99@gmail.com';

  // Send an email with form data
  try {
    await transporter.sendMail({
      from: 'dharavathbhavsingh5@gmail.com',
      to: recipientEmail, // Recipient's email
      subject: 'Form Submission',
      text: JSON.stringify(formData, null, 2), 
    });

    console.log('Form data sent:', formData);

    res.status(200).json({ message: 'Form data stored and email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
