import React, { useState, useEffect } from 'react';
import DashboardController from './controllers/Dashboard.js';
import Styles from './Styles.js';
import TopBar from '../bars/TopBar.js';
import BottomBar from '../bars/BottomBar.js';
import Copyright from '../Copyright.js';
import Paypal from '../donations/PayPal.js';
import Feedback from '../feedback/Feedback.js';
import firebase from '../../firebase.js';

// Material UI
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  IconButton,
} from '@material-ui/core';

import {
  Favorite,
  Share,
} from '@material-ui/icons';


function Dashboard(props){
  const classes = Styles();
  const [animationClass] = useState('background-grad');
  const [open, setOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState();
  const courses = DashboardController.getCourses();

  useEffect(() => {
    const fetchData = async () => {
      // TODO: Dang got to figure out how to get this in the controller,
      // might be easier just in the componet for loading but I would like it cleaner
      firebase.database.ref('feedbacks')
        .on('value', function(snapshot){
          let result = [];
          snapshot.forEach(data => {
            let record = data.val();
            result.push(record.feedback);
          });
          if (result && result.length > 0) {
            setFeedbacks(result);
          }
          else {
            setFeedbacks([
              'Control is not convinced',
              'But the computer has the evidence',
              'No need to abort'
            ]);
          }
          return result;
      });

    }
    fetchData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div className={animationClass}>
      <CssBaseline />
      <TopBar title="Learning Center" {...props}/>
      <Feedback open={open} onClose={handleClose} onCancel={handleClose} />
      <main className={classes.content}>
        {/* Hero unit */}
        <div className={classes.appBarSpacer}>
          <div className={classes.heroContent}>
            <Container maxWidth="lg" className={classes.container}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Welcome Sharks
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Here is a digital library for us all to learn
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
                Please leave any feedback and we do our best to add it
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Paypal variant="contained" color="primary"/>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => { handleOpen()}}>
                    Feedback
                    </Button>
                  </Grid>
                </Grid>
              </div>
            <Typography variant="caption" align="center" color="textSecondary" paragraph>
            Here are some of your suggestions
            </Typography>
            {feedbacks && feedbacks.map((feedback, key) => (
              <Typography key={key} variant="subtitle2" align="center" color="textSecondary">
              {feedback}
              </Typography>
            ))}
            </Container>
          </div>
        <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item key={course.key} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea href={course.link}>
                <CardMedia
                  className={classes.cardMedia}
                  image={course.image}
                  title="Image title"
                />
              </CardActionArea>
              <CardContent className={classes.cardContent}>
                <Typography>
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites" onClick={() => { DashboardController.like()}}>
                  <Favorite />
                </IconButton>
                <IconButton aria-label="share" onClick={() => { DashboardController.share()}}>
                  <Share />
                </IconButton>
                <Button size="medium" color="primary" href={course.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
        </Container>
        </div>
      </main>
      <BottomBar title=<Copyright color='secondary'/> />
    </div>
  );
}

export default Dashboard;
