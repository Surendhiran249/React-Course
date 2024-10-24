import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import './About.css';
import Navbar from './Navbar';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <Container className="about-container">
        <Typography variant="h3" className="about-title">
        𝗔𝗯𝗼𝘂𝘁 𝗨𝘀
        </Typography>
        <Typography variant="body1" className="about-description">
          Welcome to FreshCart, your one-stop solution for fresh groceries delivered right to your doorstep! We believe in providing our customers with the highest quality products at the best prices. Our mission is to make shopping convenient, fast, and reliable.
        </Typography>
        <Typography variant="body1" className="about-description"> 
          At FreshCart, we source our products directly from local farmers and trusted suppliers. Our team is dedicated to ensuring that every item is fresh and meets the highest standards of quality. We are committed to sustainability and supporting local communities.
        </Typography>
        <Grid container spacing={4} className="about-team">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="team-card">
              <CardMedia
                component="img"
                height="250"
                image="https://img.freepik.com/premium-vector/me-monogram-logo-design-letter-text-name-symbol-monochrome-logotype-alphabet-character-simple-logo_955145-2634.jpg?w=360"
                alt="User"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Sure
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Developer and Founder
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Passionate about creating user-friendly applications and continuously improving skills.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="team-card">
              <CardMedia
                component="img"
                height="250"
                image="https://www.unimedia.tech/wp-content/uploads/2023/12/openAI-chat-gpt-1-4.jpg"
                alt="ChatGPT"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  ChatGPT
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  AI Assistant
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Provides assistance and information to help users with their queries and tasks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="team-card">
              <CardMedia
                component="img"
                height="250"
                image="data:image/png;base64,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"
                alt="Google"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Google
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Search Engine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  The powerful search engine that helps users find information on the internet quickly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUs;
