import React, { useState } from 'react';
import Styles from './Styles.js';
// import DashboardController from './controllers/Dashboard.js';
import AppBar from '../AppBar.js';
import AppBottomBar from '../AppBottomBar.js';
import Copyright from '../Copyright.js';

// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Course Images
import SoftwareCourseImg from './assets/software.png';
import MusicCourseImg from './assets/music.jpg';
import PhotoCourseImg from './assets/photos.jpg';
import ArtCourseImg from './assets/art.jpg';
import CookingCourseImg from './assets/cooking.jpg';
import UnderconstructionImg from '../../assets/images/ASF/Underconstruction.jpg';

function Dashboard(){
  const classes = Styles();
  const [animationClass] = useState('background-grad');
  const courses = [{
    key: 1,
    image: SoftwareCourseImg,
    link: '/SoftwareCreation',
    description: 'Here we will dive into code and start with Web Apps and then Android & IOS Next :)'
  },{
    key: 2,
    image: MusicCourseImg,
    link: '/MusicCreation',
    description: 'Here we will dive into my 25 year madness and passion for sound, creating a full song from the ground up'
  },{
    key: 3,
    image: PhotoCourseImg,
    link: '/VideoCreation',
    description: 'Here we will dive into how to create cool photos, everthing from neat editing tricks to everything I have learned with a camera'
  },{
    key: 4,
    image: ArtCourseImg,
    link: '/MakerCreation',
    description: 'Here we will dive into ways I like to relax by creating art, all kinds to! :)'
  },{
    key: 5,
    image: CookingCourseImg,
    link: '/MakerCreation',
    description: 'Here we dive into how to create fun, creative and most of all, delicious meals :)'
  },{
    key: 6,
    image: UnderconstructionImg,
    link: '/PreciousPlastic',
    description: 'Still need to create a image here, but this will be how to recycle :)'
  }];

  return(
    <div className={animationClass}>
      <CssBaseline />
      <AppBar title="Dashboard"/>
      <main className={animationClass}>
        {/* Hero unit */}
        <div className={classes().heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here is a portal to all the different knowledge bases I have been working on, treat it like your public library :)
            </Typography>
            <div className={classes().heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes().cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} className={animationClass}>
            {courses.map((course) => (
              <Grid item key={course.key} xs={12} sm={6} md={4}>
                <Card className={classes().card}>
                  <CardMedia
                    className={classes().cardMedia}
                    image={course.image}
                    title="Image title"
                  />
                  <CardContent className={classes().cardContent}>
                    <Typography>
                      {course.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={course.link}>
                      Chect it out
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <AppBottomBar title=<Copyright /> />
    </div>
  );
}

export default Dashboard;
