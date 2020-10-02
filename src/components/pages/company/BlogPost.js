import React from 'react';
import Styles from './Styles.js';
import Img from 'react-image';
import Oopseis from '../../../assets/images/Oopseis.jpg';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

import {
  CalendarToday,
  Chat as ChatIcon,
} from '@material-ui/icons';

const BlogPost = () => {
  const classes = Styles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs={8} sm={4} md={3}>
          <Img height="100%" width="100%" src={Oopseis} alt="Blog Img"/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            This is a standard post
          </Typography>
          <Typography variant="overline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.blogpostFooter}>
            <Typography variant="subtitle1">
              <CalendarToday /> Feb 26, 2019
            </Typography>
            <Typography variant="subtitle1">
              <a href="/"><ChatIcon />6</a>
            </Typography>
            <Typography variant="subtitle1">
              <a href="/">Read more</a>
            </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPost;
