import React, { useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DevicesIcon from "@mui/icons-material/Devices";
import Fab from "@mui/material/Fab";
import '../css/Services.css'
function Card1() {

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
        <Fab
          style={{
            backgroundColor: "#ED7D31",
            color: "#F6F1EE",
            marginBottom: "20px",
          }}
        >
          <DevicesIcon />
        </Fab>
        <Typography variant="h6" style={{ color: "#4F4A45", marginBottom: "10px", fontFamily:"'Courier New', Courier, monospace"}}>
          Virtual Assistant
        </Typography>
        <Typography variant="body1" style={{ color: "#4F4A45",fontFamily:"'Courier New', Courier, monospace" }}>
          As a Virtual Assistant, I conducted meetings with cross-functional teams to achieve goals regardless of geographical boundaries.
        </Typography>

        {isShowMore && (
          <Typography variant="body1" style={{ color: "#4F4A45" ,fontFamily: "'Courier New', Courier, monospace",}}>
            Locked agreements for Company Creation in countries like France or Germany. Conducted research and analysis to provide valuable insights in decision making.
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

export default Card1;
