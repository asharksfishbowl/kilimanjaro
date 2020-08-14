import React, { useState, useEffect } from 'react';
import CourseController from './controllers/Course.js';
import Styles from './Styles.js';

import SoftwareImg from './assets/software.png';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

function Course(props) {
  const classes = Styles();
  const [backdrop, setShowBackdrop] = useState(false);
  const [name, setName] = useState('');
  const [visible, setVisible] = useState('');
  const [order, setOrder] = useState('');
  const [lessons, setLessons] = useState('');

  useEffect(() => {
    const fetchData = async () => CourseController.getLessons(setLessons);
    fetchData();
  }, []);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onVisibleChange = (event) => {
    setVisible(event.target.checked);
  };

  const onOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const hideBackdrop = () => {
    setShowBackdrop(false);
  };

  const showBackdrop = () => {
    setShowBackdrop(!backdrop);
  };

  async function save() {
    showBackdrop();
    await CourseController.create({name, visible, order});
    hideBackdrop();
  };

  async function deleteLesson(lesson) {
    showBackdrop();
    await CourseController.delete(lesson);
    hideBackdrop();
  };

  return(

    <div className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {lessons.length ? lessons.map((lesson, key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea href="/Courses">
                  <CardMedia
                    className={classes.cardMedia}
                    image={SoftwareImg}
                    title={lesson.name}
                  />
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography>
                    {lesson.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" color="primary" href="/Courses">
                    Learn More
                  </Button>
                  <IconButton aria-label="delete" onClick={() => { deleteLesson(lesson.name)}}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )) : <Grid item xs={12} sm={6} md={4} /> }
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <form noValidate autoComplete="off">
                  <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={onNameChange}
                    required
                    fullWidth
                  />
                  <TextField
                    id="order"
                    label="Order"
                    type="number"
                    value={order}
                    onChange={onOrderChange}
                    fullWidth
                  />
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={visible.checked}
                          onChange={onVisibleChange}
                          name="visible"
                          color="primary"
                        />
                      }
                      label="Visible"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </form>
              </CardContent>
              <CardActions>
                <Button color="primary" onClick={save} fullWidth>
                  Save
                </Button>
              </CardActions>

            </Card>
          </Grid>
        </Grid>
      </Container>


    </div>
  )
}
export default Course;
