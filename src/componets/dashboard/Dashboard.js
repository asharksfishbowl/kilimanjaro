import React, { useState } from 'react';
import Styles from './Styles.js';
import DashboardController from './controllers/Dashboard.js';
import AppBar from '../AppBar.js';
import AppBottomBar from '../AppBottomBar.js';
import Copyright from '../Copyright.js';
import Paypal from '../donations/PayPal.js';

// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function Dashboard(){
  const classes = Styles();
  const [animationClass] = useState('background-grad');
  const courses = DashboardController.getCourses();

  return(
    <div className={animationClass}>
      <CssBaseline />
      <AppBar title="Dashboard"/>
      <main>
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
                  <Paypal variant="contained" color="primary"/>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Feedback
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes().cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid item key={course.key} xs={12} sm={6} md={4}>
                <Card className={classes().card}>
                  <CardActionArea href={course.link}>
                    <CardMedia
                      className={classes().cardMedia}
                      image={course.image}
                      title="Image title"
                    />
                  </CardActionArea>
                  <CardContent className={classes().cardContent}>
                    <Typography>
                      {course.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon onClick={() => { DashboardController.like() }}/>
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon onClick={() => { DashboardController.share() }}/>
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
      </main>
      <AppBottomBar title=<Copyright color='secondary'/> />
    </div>
  );
}

export default Dashboard;
