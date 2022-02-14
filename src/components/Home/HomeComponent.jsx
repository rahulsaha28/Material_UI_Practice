import { LoadingButton } from "@mui/lab";
import {
  Typography,
  Button,
  CircularProgress,
  ButtonGroup,
  Container,
  Icon,
  Input, IconButton,
} from "@mui/material";
import React, { useState } from "react";
import  { KeyboardArrowLeft, KeyboardArrowRight, UploadFile, PhotoCamera } from '@mui/icons-material'

import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
  myClass:{
    background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    fontSize:'90px !important',
    '& :hover':{
      backgroundColor:'blue'
    }
  }
})

const HomeComponent = () => {
  const classes  = useStyles();

  console.log(classes)

  const [value, setValue] = useState(true);



  return (
    <div>
     
      <Button className={classes.myClass} variant="contained">
        Next
      </Button>
      
          
        
        
        
    </div>
  );
};

export default HomeComponent;
