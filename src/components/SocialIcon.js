import { Stack} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin,FaEnvelope, FaGithub } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';

export default function SocialIcon() {
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
<Stack spacing={4} direction='row'>
      <IconButton
        isRound={true}
        variant='solid'
        aria-label='Facebook'
        colorScheme='facebook'
        fontSize='20px'
        size='md'
        icon={<FaFacebook />}
        onClick={handleFacebookClick}
      />

      <IconButton
        isRound={true}
        variant='solid'
        colorScheme='pink'
        aria-label='Instagram'
        fontSize='20px'
        size='md'
        icon={<FaInstagram />}
        onClick={handleInstagramClick}
      />

      <IconButton
        isRound={true}
        variant='solid'
        colorScheme='linkedin'
        aria-label='LinkedIn'
        fontSize='20px'
        size='md'
        icon={<FaLinkedin />}
        onClick={handleLinkedinClick}
      />
      <IconButton
        isRound={true}
        variant='solid'
        color='black'
        backgroundColor='white'
        aria-label='Github'
        fontSize='25px'
        size='md'
        icon={<FaGithub/>}
        onClick={handleGithubClick}
      />
    <IconButton
        isRound={true}
        variant='solid'
        colorScheme='red'
        aria-label='Mail'
        fontSize='20px'
        size='md'
        icon={<FaEnvelope/>}
        onClick={handleMailClick}
      />
 </Stack>
  );
}
