import { LoadingButton } from "@mui/lab";
import {
  Button, Select,
   TextField, FormControl, FormLabel, RadioGroup, FormHelperText, FormControlLabel, Radio, MenuItem,
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
      <form  onSubmit={ handleSubmit(handelForm) }>
        
        <FormControl component="fieldset">
          <FormLabel component="legend">Option</FormLabel>
         <Select defaultValue='' label="age" {...register('age')}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={9}>Nine</MenuItem>
         </Select>
          
        </FormControl>

        <Button type="submit" variant="outlined" color="primary">
          Submit 
        </Button>
      </form>
    </div>
  );
};

export default HomeComponent;
