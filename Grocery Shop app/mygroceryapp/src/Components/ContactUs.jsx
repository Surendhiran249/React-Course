import React, { useState } from 'react';
import { Typography, Container, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import axios from 'axios';
import './ContactUs.css';
import Navbar from './Navbar';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const feedbackData = { name, email, subject, message };
      const response = await axios.post('http://localhost:5000/feedback', feedbackData);
      if (response.status === 201) {
        setFeedbackStatus('Feedback submitted successfully!');
        // Clear the form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      setFeedbackStatus('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <Container className="contact-container">
          <Typography variant="h3" className="contact-title">
            Contact Us
          </Typography>
          <Typography variant="body1" className="contact-description">
            We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, we're here to help.
          </Typography>

          <Grid container spacing={4} className="contact-details">
            <Grid item xs={12} sm={6}>
              <Card className="contact-card">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Address
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    123 FreshCart Avenue
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Grocery Town, GT 45678
                  </Typography>
                </CardContent>
              </Card>
              <Card className="contact-card">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Phone
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    +1 (234) 567-8901
                  </Typography>
                </CardContent>
              </Card>
              <Card className="contact-card">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Email
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    support@freshcart.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="div" className="contact-form-title">
                Send Us a Message
              </Typography>
              <form className="contact-form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  className="contact-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  margin="normal"
                  className="contact-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  margin="normal"
                  className="contact-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  className="contact-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="contact-submit-button"
                >
                  Send Message
                </Button>
              </form>
              {feedbackStatus && (
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                  {feedbackStatus}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
