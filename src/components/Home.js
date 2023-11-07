import 'animate.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Heading from './HomePage/Heading';
export default function Home(){
    return(
        <div id='home' >
         <ChakraProvider>
            <Heading/>
         </ChakraProvider>
         </div>
    )
}

