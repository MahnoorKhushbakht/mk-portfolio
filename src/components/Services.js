import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function Variants() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
  };

  return (
    <Container id="services" sx={containerStyles}>
      <Typography variant="h4" style={{ marginBottom: '20px', color: '#F6F1EE' ,fontFamily: "'Courier New', Courier, monospace"}}>
        Career Snapshot
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ margin: '0 2%' }}
      >
        <Card1 />
        <Card2 />
        <Card3 />
      </Stack>

    </Container>
  );
}
