import * as React from 'react';
import { Box, ChakraProvider, Heading, Text, Button } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export default function BackgroundExp() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '80%', marginLeft: '10px' }}>
      <ChakraProvider>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Heading fontSize={30} color={'#F6F1EE'} mb={4} fontFamily="'Courier New', Courier, monospace">
            About Me
          </Heading>
          <Text fontSize='md' color={'#F6F1EE'}>
            I am proficient in various programming languages including <u>HTML, CSS, Javascript</u> and <u>React</u>.
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("With my website development skills, I can help enhance your online presence and create a seamless, user-friendly experience for your customers. I am dedicated to staying updated with the latest industry trends and technologies, ensuring that your website is modern, responsive, and optimized for search engines.")
                  .start();
              }}
            />
          </Text>
          <Button
  sx={{
    marginTop: '2px',
    background: '#ED7D31',
    color: '#F6F1EE',
    '&:hover': {
      background: '#4F4A45',
      color: '#F6F1EE',
    },
  }}
>
  <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
    Contact Me
    </a>
</Button>

        </Box>
      </ChakraProvider>
    </div>
  );
}
