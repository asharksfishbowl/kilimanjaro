import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ReactPlayer from 'react-player';
import InstagramEmbed from 'react-instagram-embed';

import Post from './Post';
import Instructions from './Instructions';

const useStyles = makeStyles((theme) => ({
  video: {
    boxShadow: '1px 1px 2px 0px black',
  },
  instructions: {
    position: "relative",
  }
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8} >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ReactPlayer height="40%" width="100%" url={props.url} className={classes.video} />
      {
        posts && posts.map((post, key) => (
          <div key={key}>
            <Instructions title="Instructions" key={key} instructions={post.instructions} className={classes.instructions} />
            <InstagramEmbed
              url={post.imageUrl}
              clientAccessToken='2798007656972208|09cea63eb2dd319b02a3aef2470f5f36'
              maxWidth={320}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
        ))
      }

    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
