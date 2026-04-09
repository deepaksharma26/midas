import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const services = [
  {
    title: 'Chat With a Live',
    description: 'LIVE CHAT',
    image: 'https://themepanthers.com/html/creote-html/assets/images/about/about-12.jpg',
  },
  {
    title: 'Ask Professionals',
    description: 'OUR TEAM',
    image: 'https://themepanthers.com/html/creote-html/assets/images/blog/blog-image-10.jpg',
  },
  {
    title: 'Support to Grow',
    description: 'USER GUIDES',
    image: 'https://themepanthers.com/html/creote-html/assets/images/about/about-8.jpg',
  },
];

const CustomerServiceSection = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>Customer Service</Typography>
    <Grid container spacing={4}>
      {services.map((service, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card>
            <CardContent>
              <img src={service.image} alt={service.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <Typography variant="h6" gutterBottom>{service.title}</Typography>
              <Typography variant="body2" color="textSecondary" paragraph>{service.description}</Typography>
              <Button variant="outlined" color="primary">Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CustomerServiceSection;
