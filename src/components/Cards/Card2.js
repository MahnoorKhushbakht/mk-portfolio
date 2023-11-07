import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css/Services.css'
function Card2() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const textStyle = {
    fontFamily: "'Courier New', Courier, monospace",
    color: '#F6F1EE',
  };

  return (
    <Card
      variant="outlined"
      className="animate__animated animate__flipInX card"
      sx={{
        flexGrow: 1,
        display: { xs: '400', md: '800' },
        backgroundColor: '#4F4A45',
        borderRadius: '16px',
        width: '90%',
      }}
    >
      <CardContent>
        <Fab style={{ backgroundColor: '#ED7D31', color: '#F6F1EE', marginBottom: '20px' }}>
        <ScreenSearchDesktopIcon />
        </Fab>
        <Typography variant='h6' style={{ ...textStyle, marginBottom: '10px' }}>
        Graphic Design
        </Typography>
        <Typography variant='body1' style={textStyle}>
        Researched, Assisted and designed innovative ideas for brand development. Coordinated with clients to craft creative advertising content suitable for the target market.
        </Typography>
        {isShowMore && (
          <Typography variant='body1' style={textStyle}>
           Created and Edited social media graphics, multiple logos, brochures, and labels in industry-standard software Adobe illustrator and Adobe Photoshop. Conceptualized character animations and videos using Adobe After Effects.
          </Typography>
        )}
        <Button
          onClick={toggleReadMoreLess}
          sx={{
            marginTop: '5px',
            fontFamily: "'Courier New', Courier, monospace",
            background: '#ED7D31',
            color: '#F6F1EE',
            '&:hover': {
              background: '#F6F1EE',
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

export default Card2;



