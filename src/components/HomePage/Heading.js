import 'animate.css';
import React from 'react';
import {Box,Show} from '@chakra-ui/react';
import HeadingTextMD from './HeadingTextMD';
import HeadingTextSM from './HeadingTextSM';
export default function Heading() {
    return (
        <div>
            <Box height="100vh">
            <Box 
            display="flex"
            textAlign="center"
            alignItems="center"     
            justifyContent="flex-start" >
      <Show breakpoint='(min-width: 600px)'>
      <HeadingTextMD/>
  
      </Show>
      </Box>
      <Show breakpoint='(max-width: 600px)'>
      <HeadingTextSM/>  
     </Show>
      </Box>
        </div>
    )
}