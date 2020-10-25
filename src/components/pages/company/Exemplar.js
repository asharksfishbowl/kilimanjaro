import React from 'react';
import { useHistory } from "react-router-dom";
import Styles from './Styles.js';
import Img from 'react-image';
import SignInImg from '../../../assets/images/ASF/SignIn.png';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

const Exemplar = () => {
  const classes = Styles();
  const title = "Custom Software Solutions";
  const sellingPoint = "We use a modern technology stack to build fast, responsive, single page web applications & native App solutions.";
  let history = useHistory();

  return (
    <section id="exemplar" className={classes.exemplar} data-testid="exemplar">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="overline">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">
              {sellingPoint}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Img
              src={SignInImg}
              height="100%"
              width="100%"
              alt="sign in Img"
              onClick={() => history.push("/SignInSide")}/>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Exemplar;
