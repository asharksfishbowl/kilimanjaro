import React from 'react';
import Styles from './Styles.js';
import BlogPost from './BlogPost';

// Material UI
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';

const LatestNews = () => {
  const classes = Styles();

  return (
    <section id="news" className={classes.latestNews}>
      <Container maxWidth="lg">
        <Typography variant="h6">Latest from the Loop</Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} >
            <BlogPost />
          </Grid>
          <Grid item xs={12} >
            <BlogPost />
          </Grid>
          <Grid item xs={12} >
            <BlogPost />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LatestNews;
