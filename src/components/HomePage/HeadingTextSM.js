import { 
    Box,
    Highlight,
    Heading,
    Text,
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import SocialIcon from '../SocialIcon';
import ResumeBtn from '../ResumeBtn';
export default function HeadingText_SM(){
    return(
    <>
     <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="100vh"
  >
    <Box maxW="25rem">
      <Box maxW="20rem">
        <Heading
          lineHeight="tall"
          fontFamily="'Courier New', Courier, monospace"
          className="animate__animated animate__fadeInUp"
          color='#F6F1EE' 
        >
      <Text
        style={{ fontSize: '35px'}}
        className="animate__animated animate__fadeInUp"
        color='#F6F1EE' 
        fontFamily="'Courier New', Courier, monospace"
    >
       Hi there,
    </Text>
          <Highlight
            style={{ fontSize: '35px' }}
            query={['Khushbakht']}
            styles={{  color:'#F6F1EE' , px: '3', py: '2', rounded: 'full', bg: '#ED7D31'}}
            className="animate__animated animate__bounce"
            fontFamily="'Courier New', Courier, monospace"
          >
          I'm Mahnoor Khushbakht
          </Highlight>
        </Heading>
        <Text
          style={{ fontSize: '30px' }}
          fontSize="xl"
          className="animate__animated animate__fadeInUp"
          color='#F6F1EE' 
          fontFamily="'Courier New', Courier, monospace"
        >
<Typewriter marginTop='5px'
 onInit={(typewriter) => {
     typewriter
         .typeString("Web Designer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Let's Grow Together!!")
         .start();
 }}

/>
        </Text>
        <Box
    display='flex'
    justifyContent='center'
    flexDirection='column'
    alignItems='center'>
<ResumeBtn/>
<div>
<SocialIcon/>
</div>
</Box>

      </Box>
    </Box>
  </Box>
    </>
    )
}