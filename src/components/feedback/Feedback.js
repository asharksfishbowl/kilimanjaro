import React, { useState } from 'react';
import FeedbackController from './controllers/Feedback.js';
import Styles from './Styles.js';
import swal from '@sweetalert/with-react';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Feedback(props){
  const classes = Styles();
  const [backdrop, setShowBackdrop] = useState(false);
  const [feedback, setFeedback] = useState('');

  const onFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const hideBackdrop = () => {
    setShowBackdrop(false);
  };

  const showBackdrop = () => {
    setShowBackdrop(!backdrop);
  };

  async function save() {
    showBackdrop();
    try {
      const result = await FeedbackController.addFeedback(feedback);
      console.log(result);
      if (result.data.success) {
        hideBackdrop();
        props.onClose();
        swal('Thanks for the Feedback Shark!!!', "We are working on deliver the best experience for yous :)", "success");
      }
      return result;
    } catch (error) {
      console.log(error.message);
    } finally {
      let message = {success:true, message: 'Thanks for the feedback Shark!!!'};
      return message;
    }
  }

  return(
    <Dialog aria-labelledby="form-dialog-title" onClose = {props.onClose} {...props}>
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
        <Button color="primary" onClick={save}>
          Save
        </Button>
      </DialogActions>
      <Backdrop className={classes.backdrop} open={backdrop} onClick={hideBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Dialog>
  );
}

export default Feedback;
