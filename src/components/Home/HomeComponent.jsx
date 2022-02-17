import { LoadingButton } from "@mui/lab";
import {
  Button, Select, Paper, Card, CardContent, Drawer, Typography
} from "@mui/material";
import React, { useState } from "react";
import  { KeyboardArrowLeft } from '@mui/icons-material';

import { makeStyles } from '@mui/styles'

import { useForm } from 'react-hook-form';


const HomeComponent = () => {

  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <Button variant="outlined" onClick={()=>setToggle(!toggle)} >Right</Button>
      <Drawer
      
      anchor="right"
      open={toggle}
      onClose={()=>setToggle(!toggle)}
      style={{ width:'500px' }}>
        <div style={{ width:"400px", padding:"100px" }}>
          <Typography varient="h5">
            Home
          </Typography>
        </div>
      </Drawer>
      
    </div>
  );
};

export default HomeComponent;

