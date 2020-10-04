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
        <Typography variant="h4" align="center">Latest from the Loop</Typography>
        <Grid container spacing={2} align="left">
          <Grid item xs={12} >
            <BlogPost
              subTitle="How to create funky images with PicsArt"
              description="In this video I show some of my creative process creating images in Picsart"
              url="https://youtu.be/wmRzbn1Ieng"
            />
          </Grid>
          <Grid item xs={12} >
            <BlogPost
              subTitle="The Zoid"
              description="You didn't think I'd stop dancing did you"
              url="https://youtu.be/yBxBZqhQdX0"
            />
          </Grid>
          <Grid item xs={12} >
            <BlogPost
              subTitle="Relax, Listen, Sleep"
              description="Wrote this learning to breathe better :)"
              url="https://youtu.be/2VrS72NIOUE"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LatestNews;
