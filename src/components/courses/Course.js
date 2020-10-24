import React, { useState, useEffect } from 'react';
import CourseController from './controllers/Course.js';
import CRUD from '../../server/CRUD.js';
import Styles from './Styles.js';

import SoftwareImg from './assets/software.png';

import {
  Grid,
  Container,
  Avatar,
  Card,
  CardHeader,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  IconButton,
  TextField,
  Switch
} from '@material-ui/core';

import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons';

function Course(props) {
  const classes = Styles();
  const [backdrop, setShowBackdrop] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [visible, setVisible] = useState(false);
  const [order, setOrder] = useState('');
  const [lessons, setLessons] = useState('');

  useEffect(() => {
    const fetchData = async () => CourseController.getLessons(setLessons);
    fetchData();
  }, []);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const onVisibleChange = (event) => {
    setVisible(event.target.checked);
  };

  const hideBackdrop = () => {
    setShowBackdrop(false);
  };

  const showBackdrop = () => {
    setShowBackdrop(!backdrop);
  };

  function resetForm(){
    setName('');
    setDate('');
    setDescription('');
    setVisible(false);
    setOrder('');
  }

  async function saveRecord() {
    showBackdrop();
    let record = {name, date, description, visible, order};
    await CRUD.create('lessons', record);
    hideBackdrop();
  };

  async function editRecord(key) {
    showBackdrop();
    const record = await CRUD.read('lessons', key);
    setName(record.name);
    setDate(record.date);
    setDescription(record.description);
    setOrder(record.order);
    if (record.visible) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
    hideBackdrop();
  };

  async function deleteRecord(record) {
    showBackdrop();
    await CRUD.delete('lessons', record);
    hideBackdrop();
  };

  return(
    <Container className={classes.root} maxWidth="md">
      <Grid container className={classes.cardGrid} spacing={4}>
        {lessons.length ? lessons.map((lesson, key) => (
          <Grid item key={key} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    ASF
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                  <MoreVertIcon />
                  </IconButton>
                }
                title={lesson.name}
                subheader={lesson.date}
              />
              <CardActionArea href="/Courses">
                <CardMedia
                  className={classes.cardMedia}
                  image={SoftwareImg}
                  title={lesson.name}
                />
              </CardActionArea>
              <CardContent className={classes.cardContent}>
                <Typography>
                  {lesson.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites" onClick={() => { CourseController.like()}}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" onClick={() => { CourseController.share()}}>
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => { editRecord(lesson.name)}}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => { deleteRecord(lesson.id)}}>
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
                  id="date"
                  label="Live Date"
                  type="datetime-local"
                  className={classes.dateField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={date}
                  onChange={onDateChange}
                  fullWidth
                />
                <TextField
                  id="description"
                  label="Description"
                  multiline
                  rowsMax={4}
                  value={description}
                  onChange={onDescriptionChange}
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
                <FormGroup row className={classes.visibleField}>
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
              <Button color="primary" onClick={resetForm} fullWidth>
                Clear
              </Button>
              <Button color="primary" onClick={saveRecord} fullWidth>
                Save
              </Button>
            </CardActions>

          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Course;
