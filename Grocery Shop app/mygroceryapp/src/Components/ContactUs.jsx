import React from 'react';
import { Typography, Container, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import './ContactUs.css';
import Navbar from './Navbar';
function ContactUs() {
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
          <form className="contact-form">
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              className="contact-input"
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              margin="normal"
              className="contact-input"
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              margin="normal"
              className="contact-input"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              className="contact-input"
            />
            <Button variant="contained" color="primary" className="contact-submit-button">
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
    </div>
    </div>
  );
}

export default ContactUs;
