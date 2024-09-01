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
                image="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj"
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
