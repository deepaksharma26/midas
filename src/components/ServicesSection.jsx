import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const services = [
  {
    title: 'Recruit the best employees',
    subtitle: "Our search results mitigate your company's exposure",
    description: 'Duty obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.',
  },
  {
    title: 'Skilled Industry Professionals',
    subtitle: 'Shared Time Human Resources Management',
    description: 'Duty obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.',
  },
];

const ServicesSection = () => (
  <Container sx={{ py: 4 }}>
    <Grid container spacing={4}>
      {services.map((service, idx) => (
        <Grid item xs={12} md={6} key={idx}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>{service.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>{service.subtitle}</Typography>
              <Typography variant="body2" paragraph>{service.description}</Typography>
              <Button variant="outlined" color="primary">Read More</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServicesSection;
