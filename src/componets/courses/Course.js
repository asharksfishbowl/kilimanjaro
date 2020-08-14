import React, { useState, useEffect } from 'react';
import CourseController from './controllers/Course.js';
import Styles from './Styles.js';

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
  const [lessons, setLessons] = useState([]);

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

    <div className={classes().root}>
      {lessons && lessons.map((lesson, key) => (
        <FormGroup key={key} row>
          <Typography variant="subtitle2" align="left" color="textSecondary">
            {lesson.name}
          </Typography>
          <IconButton aria-label="delete" align="right" onClick={() => { deleteLesson(lesson.name)}}>
            <DeleteIcon />
          </IconButton>
        </FormGroup>
      ))}
      <form className={classes().root} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />
        <TextField
          id="order"
          label="Order"
          type="number"
          value={order}
          onChange={onOrderChange}
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
        <Button color="primary" onClick={save}>
          Save
        </Button>
      </form>
    </div>
  )
}
export default Course;
