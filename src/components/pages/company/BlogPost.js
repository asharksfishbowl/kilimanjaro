import React from 'react';
import Styles from './Styles.js';
import ReactPlayer from 'react-player';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

const BlogPost = (props) => {
  const classes = Styles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8} sm={4} md={3}>
          <ReactPlayer height="100%" width="100%" url={props.url} className={classes.video}/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            {props.subTitle}
          </Typography>
          <Typography variant="subtitle1">
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPost;
