import React, { useState } from 'react';
import FeedbackController from './controllers/Feedback.js';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Feedback(props){
  const [feedback, setFeedback] = useState('');

  const onFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  async function create() {
    try {
      await FeedbackController.createFeedback(feedback);
    } catch (error) {
      console.log(error.message);
    }
  }

  return(
    <Dialog aria-labelledby="form-dialog-title" {...props}>
      <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
      <DialogContent>
        <DialogContentText>
          What's up Shark! Please leave any feedback ya like :)
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="feedback"
          label="Feedback"
          fullWidth
          multiline
          rowsMax={6}
          value={feedback}
          onChange={onFeedbackChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={create}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Feedback;
