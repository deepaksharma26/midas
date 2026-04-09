import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const team = [
  {
    name: 'Amelia Margaret',
    role: 'Director',
    image: 'https://themepanthers.com/html/creote-html/assets/images/team/team-1.jpg',
  },
  {
    name: 'Andrew Cameron',
    role: 'Team Leader',
    image: 'https://themepanthers.com/html/creote-html/assets/images/team/team-2.jpg',
  },
  {
    name: 'Sofia Charlotte',
    role: 'Manager',
    image: 'https://themepanthers.com/html/creote-html/assets/images/team/team-3.png',
  },
];

const AboutSection = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>Our Team</Typography>
    <Grid container spacing={4}>
      {team.map((member, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card>
            <CardContent>
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <Typography variant="h6" gutterBottom>{member.name}</Typography>
              <Typography variant="body2" color="textSecondary" paragraph>{member.role}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default AboutSection;
