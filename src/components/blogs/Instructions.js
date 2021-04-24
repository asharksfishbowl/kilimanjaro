import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  istItem: {
    marginTop: theme.spacing(1),
  },
}));

export default function Instructions(props) {
  const classes = useStyles();
  const instructions = props.instructions;

  return(
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>
      {
        instructions && Object.entries(instructions).map(( [key, value], index) => (
          <List dense>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary={key}
                  secondary={value ? value : null}
                />
              </ListItem>
          </List>
        ))
      }
    </div>
  );
}
