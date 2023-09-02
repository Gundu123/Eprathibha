const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use other email services too
  auth: {
    user: 'dharavathbhavsingh5@gmail.com', // Replace with your Gmail email
    pass: 'hsaxvsdjxahqttuj', // Use app-specific password if using 2-step verification
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
      from: 'dharavathbhavsingh5@gmail.com', // Sender's email (should be the same as auth user)
      to: recipientEmail, // Recipient's email
      subject: 'Form Submission',
      text: JSON.stringify(formData, null, 2), // Convert data to formatted JSON string
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
