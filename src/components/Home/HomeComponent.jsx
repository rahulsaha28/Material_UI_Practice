import { LoadingButton } from "@mui/lab";
import {
  Button,
   TextField,
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
        <div>
        <TextField {...register('email', {required:true})} multiline  label="Email Address" error={errors?.email?true:false} />
        
        </div>
        <div>
        <TextField rows={4}  {...register('name', {required:true })} multiline label="Name" error={errors?.name?true:false} />
        </div>
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default HomeComponent;
