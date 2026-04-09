import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const pricing = [
  {
    title: 'Bronze Package',
    price: '149$',
    features: ['4-5 Weeks to finish', 'Data sprint', 'Results revision', '20 Days of support', 'Organisational Strategy'],
    popular: false,
  },
  {
    title: 'Silver Package',
    price: '249$',
    features: ['4-5 Weeks to finish', 'Data sprint', 'Results revision', '20 Days of support', 'Organisational Strategy'],
    popular: true,
  },
  {
    title: 'Gold Package',
    price: '349$',
    features: ['4-5 Weeks to finish', 'Data sprint', 'Results revision', '20 Days of support', 'Organisational Strategy'],
    popular: false,
  },
];

const PricingSection = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>Pricing Plans</Typography>
    <Grid container spacing={4}>
      {pricing.map((plan, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card style={plan.popular ? { border: '2px solid #1976d2' } : {}}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{plan.title}</Typography>
              <Typography variant="h4" color="primary" gutterBottom>{plan.price}</Typography>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button variant="contained" color="primary">Get Now</Button>
              {plan.popular && <Typography variant="caption" color="secondary">POPULAR</Typography>}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default PricingSection;
