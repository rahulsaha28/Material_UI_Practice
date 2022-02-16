import { LoadingButton } from "@mui/lab";
import {
  Button, Select, Paper,
   TextField, FormControl, FormLabel, RadioGroup, FormHelperText, FormControlLabel, Radio, MenuItem, Grid,
} from "@mui/material";
import React, { useState } from "react";
import  { KeyboardArrowLeft } from '@mui/icons-material'

import { makeStyles } from '@mui/styles'

import { useForm } from 'react-hook-form';


const HomeComponent = () => {

 const { register, handleSubmit, watch, formState:{ errors } }  = useForm()

  const handelForm = (e)=>{
    console.log(e);
  }
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} >
            <Paper>PAPER 1</Paper>
        </Grid>
        <Grid item xs={12} md={2} >
        <Paper>PAPER 2</Paper>
        </Grid>
        <Grid item md={2} xs={12} >
        <Paper>PAPER 2</Paper>
        </Grid>
      </Grid>

      
    </div>
  );
};

export default HomeComponent;

