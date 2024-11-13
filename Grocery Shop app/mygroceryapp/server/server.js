const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Route for signup (to store user)
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync('./data/users.json'));

  // Check if user exists
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists!' });
  }

  // Add user
  users.push({ id: users.length + 1, username, password });
  fs.writeFileSync('./data/users.json', JSON.stringify(users));
  res.status(201).json({ message: 'User registered successfully!' });
});

// Route for login (to authenticate user)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync('./data/users.json'));
  
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials!' });
    }
  
    res.status(200).json({ message: 'Login successful!' });
  });
  
  // Route for submitting feedback
app.post('/feedback', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Read existing feedback data
  const feedback = JSON.parse(fs.readFileSync('./data/feedback.json'));
  
  // Add new feedback
  const newFeedback = {
    id: feedback.length + 1,
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  };
  
  feedback.push(newFeedback);
  
  // Write updated feedback data back to the file
  fs.writeFileSync('./data/feedback.json', JSON.stringify(feedback));
  
  res.status(201).json({ message: 'Feedback submitted successfully!' });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
