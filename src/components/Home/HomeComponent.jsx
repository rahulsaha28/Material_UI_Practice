import { LoadingButton } from "@mui/lab";
import {
  Button, Select, Paper, Card, CardContent,
   Typography, CardHeader, Avatar, IconButton, CardMedia
} from "@mui/material";
import React, { useState } from "react";
import  { KeyboardArrowLeft } from '@mui/icons-material';

import { makeStyles } from '@mui/styles'

import { useForm } from 'react-hook-form';


const HomeComponent = () => {

 const { register, handleSubmit, watch, formState:{ errors } }  = useForm()

  const handelForm = (e)=>{
    console.log(e);
  }
  
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="">
              
            </Avatar>
          }
          action={
            <IconButton aria-label="">
              
            </IconButton>
          }
          title="This is the title"
          subheader="lorem is here"
          
        />
        <CardMedia style={{ width:"100%", height:"200px", objectFit:'fill'  }} component="img" title="" image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F6%2F3%2F0%2F41374.jpg&f=1&nofb=1" />
        <CardContent>
          <Typography sx={{fontSize:40}} color="text.secondary" gutterBottom>
            Lorem ipsum dolor sit amet.
          </Typography>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default HomeComponent;

