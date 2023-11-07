import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BackgroundExp from './BackgroundExp';
import ProfileImage from '../images/ProfileImage.jpeg';
import SocialNav from './SocialNav';

const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Image = styled('img')({
  borderRadius: '30%',
  width: '250px', 
  height: '250px',
  margin: '0 5px',
});


export default function AboutMe() {
  return (
    <div id='about'>
    <CenteredContainer>
      <Container>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            width:'60%',
            height:'80%',
            alignItems: 'center',
          }}
        >
          <Image src={ProfileImage} alt="Profile Image" />
          <BackgroundExp/>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            height:'100%',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <BackgroundExp />
        </Box>
      </Container>
    </CenteredContainer>
    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'#d6d6d6'}}>
    <SocialNav/>
        © 2023 Copyright: MahnoorKhushbakht
    </div>
    </div>
  );
}
