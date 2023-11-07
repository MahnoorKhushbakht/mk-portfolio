import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import DrawIcon from '@mui/icons-material/Draw';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css/Services.css'
function Card3() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (

      <Card
        variant="outlined"
        className="animate__animated animate__flipInX card"
        sx={{
          flexGrow: 1,
          display: { xs: '400', md: '800' },
          backgroundColor: '#F6F1EE',
          borderRadius: '16px',
          width: '90%',
        }}
      >
      <CardContent>
                  <Fab style={{ backgroundColor: '#ED7D31', color:'#F6F1EE', marginBottom: '20px' }}>
                  <DrawIcon />
                  </Fab>
                  <Typography variant='h6' style={{ color: '#4F4A45' , marginBottom: '10px' ,fontFamily:"'Courier New', Courier, monospace"}}>
                  Amazon Virtual Assistant
                  </Typography>

<Typography variant='body1' style={{  color: '#4F4A45',fontFamily:"'Courier New', Courier, monospace"  }}>
Researched 20+ promising products as per KPIs set by the client. Calculated profit margin of the product after getting Quotation for the Supplier.
      </Typography>
      
      {isShowMore && (
      <Typography variant='body1' style={{  color: '#4F4A45' ,fontFamily:"'Courier New', Courier, monospace" }}>
          Created SEO-based Optimized Listings on Helium10 tool Scribble after competitor analysis. Generated Excel sheets of High to Low Search Volume keywords using Helium10(Magnet) and Jungle Scout. Crafted Feasibility Report of Research Keywords.
           </Typography>
      )}

<Button
                onClick={toggleReadMoreLess}
                sx={{
                  marginTop:'5px',
                  fontFamily: "'Courier New', Courier, monospace",
                  background: '#4F4A45',
                  color: '#F6F1EE',
                  '&:hover': {
                    background: '#ED7D31',
                    color: '#4F4A45',
                  },
                }}
                variant="filled"
              >
                {isShowMore ? "Read Less" : "Read More"}
              </Button>
              </CardContent>
    </Card>

  );
}

export default Card3;