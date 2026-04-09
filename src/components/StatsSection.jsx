import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const stats = [
  { label: 'Year of 2020', value: '84%', description: 'Income Statement' },
  { label: 'Since 1998', value: 'Operating in Birmingham', description: 'Clients' },
];

const StatsSection = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>Statistics</Typography>
    <Grid container spacing={4}>
      {stats.map((stat, idx) => (
        <Grid item xs={12} md={6} key={idx}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>{stat.label}</Typography>
              <Typography variant="h4" color="primary" gutterBottom>{stat.value}</Typography>
              <Typography variant="body2" color="textSecondary" paragraph>{stat.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default StatsSection;
