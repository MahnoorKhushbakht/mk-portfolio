import { 
    Box,
    Highlight,
    Heading,
    Text
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import SocialIcon from '../SocialIcon';

import ResumeBtn from '../ResumeBtn';

export default function HeadingText_MD(){

return(
<>
<Box maxW="50rem" marginStart='50px'marginTop="120px" >
<Box maxW="50rem">
    <Heading
        style={{ fontSize: '42px', textAlign: 'left' ,fontFamily:"'Courier New', Courier, monospace"}}
        lineHeight="tall"
        className="animate__animated animate__fadeInUp"
        color='#F6F1EE' 
    >
           <Text
        style={{ fontSize: '50px', textAlign: 'left' }}
        className="animate__animated animate__fadeInUp"
        color='#F6F1EE' 

    >
       Hi there,
    </Text>
<Highlight
            query={['Mahnoor Khushbakht']}
            styles={{  color:'#F6F1EE' , px: '4', py: '3', rounded: 'full', bg: '#ED7D31' }}
            className="animate__animated animate__bounce"
        >
        I'm Mahnoor Khushbakht
        </Highlight>
  
    </Heading>
    <Text
        style={{ fontSize: '50px', textAlign: 'left' }}
        className="animate__animated animate__fadeInUp"
        color='#F6F1EE' 
    >


<Typewriter 
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
<ResumeBtn/>
<SocialIcon/>

</Box>
</Box>
</>
)
    }