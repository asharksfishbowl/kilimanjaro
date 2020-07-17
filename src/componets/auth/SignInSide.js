import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import AuthController from './controllers/Auth.js';
import Copyright from '../Copyright.js';
import Styles from './Styles.js';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Img from 'react-image';
import ASF from '../../assets/images/ASF/ASF2.jpg';

export default function SignInSide(props) {
  const classes = Styles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }

  async function login() {
    try {
      await AuthController.login(email, password);
      history.push('/dashboard');
    } catch (error) {
      alert(error.message);
      history.push('/SignInSide');
    }
  }

  return (
    <Grid container component="main" className={classes().root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes().image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes().paper}>
            <Avatar className={classes().avatar}>
              <Img src={ASF} className="App-logo" alt="logo" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Keep Swimming
            </Typography>
            <form className={classes().form} onSubmit={e => e.preventDefault() && false} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={onEmailChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onPasswordChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes().submit}
                onClick={login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
      </Grid>
    </Grid>
  );
}
