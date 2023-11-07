import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function SocialNav() {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/mahnoor.khushbakht?mibextid=ZbWKwL', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/noor_khushbakht?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
  };
  const handleLinkedinClick = () => {
    window.open('http://www.linkedin.com/in/mahnoorkhushbakht', '_blank');
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:mahnoorkhushbakht@gmail.com';
  };
 
  const handleGithubClick = () => {
    window.open('https://github.com/MahnoorKhushbakht', '_blank');
  };


  return (
    <Box sx={{ '& > :not(style)': { m: 2 } }}>
      <Fab size='small' aria-label="Facebook" onClick={handleFacebookClick}>
        <FacebookIcon />
      </Fab>
      <Fab size='small' aria-label="Instagram" onClick={handleInstagramClick}>
        <InstagramIcon />
      </Fab>
      <Fab size='small' aria-label="Linkedin" onClick={handleLinkedinClick}>
        <LinkedInIcon />
      </Fab>
      <Fab size='small' aria-label="Mail" onClick={handleMailClick}>
        <MailOutlineIcon />
      </Fab>
      <Fab size='small' aria-label="Github" onClick={handleGithubClick}>
        <GitHubIcon />
      </Fab>
    </Box>
  );
}

