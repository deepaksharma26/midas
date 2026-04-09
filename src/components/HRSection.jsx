import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const hrSolutions = [
  { title: 'Employee Compensation', description: 'Holds in these matters principles selection right rejects.' },
  { title: 'Health Care Benefits', description: 'The great explorer of the truth the master builders human happiness.' },
  { title: 'Talent Management', description: 'Laborious physo except obtains some advantage from it right.' },
  { title: 'Risk Management', description: 'Right to find fault with a mans who chooses enjoy has no annoying.' },
];

const HRSection = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>HR Solutions</Typography>
    <Grid container spacing={4}>
      {hrSolutions.map((hr, idx) => (
        <Grid item xs={12} md={3} key={idx}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>{hr.title}</Typography>
              <Typography variant="body2" color="textSecondary" paragraph>{hr.description}</Typography>
              <Button variant="outlined" color="primary">Read More</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default HRSection;
