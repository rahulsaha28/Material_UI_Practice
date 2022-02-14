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

const HomeComponent = () => {
  const [value, setValue] = useState(true);
  return (
    <div>
      <Typography gutterBottom noWrap={true} variant="subtitle1" color="indigo">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempore
        laborum ea odit optio blanditiis totam! Fuga quod, hic cupiditate
        mollitia dignissimos delectus perspiciatis quibusdam ullam facilis est
        vel odit.
      </Typography>
      <Button variant="contained" color="success">
        Next
      </Button>
      <LoadingButton
        loadingIndicator={<CircularProgress color="primary" size={30} />}
        loading={value ? true : false}
        onClick={() => console.log("hi")}
      >
        Loading
      </LoadingButton>
      <Container maxWidth="xs">
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => console.log("left")}>
            <KeyboardArrowLeft fontSize="large" color="secondary" />
          </Button>
          
          <Button onClick={() => console.log("right")}>
            <KeyboardArrowRight/>
          </Button>
          
        </ButtonGroup>
        
        <label>
          <Input onChange={e=>{
            const file = new FormData();
            file.set('file', e.target.files[0]);
            console.log(e.target.files[0])
          }} style={{ display:"none" }} type="file" />
          <IconButton component="span">
            <PhotoCamera/>
          </IconButton>
        </label>
      </Container>
    </div>
  );
};

export default HomeComponent;
