import React, { useState, useEffect } from 'react';
import CourseController from './controllers/Course.js';
import CRUD from '../../server/CRUD.js';
import Styles from './Styles.js';

import SoftwareImg from './assets/software.png';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
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
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

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
    await CRUD.create('lessons', record, record.name);
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
                <Button size="medium" color="primary" href="/Courses">
                  Learn More
                </Button>
                <IconButton aria-label="delete" onClick={() => { editRecord(lesson.name)}}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => { deleteRecord(lesson.name)}}>
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
