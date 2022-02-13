import { LoadingButton } from "@mui/lab";
import {
  Typography,
  Button,
  CircularProgress,
  ButtonGroup,
  Container,
} from "@mui/material";
import React, { useState } from "react";

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
          <Button color="secondary" onClick={() => console.log("left")}>
            Pre
          </Button>
          <Button onClick={() => console.log("right")}>Next</Button>
          <Button onClick={() => console.log("right")}>Next</Button>
          <Button onClick={() => console.log("right")}>Next</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default HomeComponent;
