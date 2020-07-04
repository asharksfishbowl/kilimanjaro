import React, { useState } from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

function Dashboard(){
  return(
    <Typography variant="overline" className={classes().listCenter}>
      <List component="nav" className={classes().list} aria-label="mailbox folders">
        <ListItem button component={Link} href='/SoftwareCreation'>
          <ListItemText primary="Software Creation from basic link page to full on web app" />
        </ListItem>
        <ListItem button component={Link} href='/MusicCreation'>
          <ListItemText primary="Music Creation from mixing to mastering a track" />
        </ListItem>
        <ListItem button component={Link} href='/VideoCreation'>
          <ListItemText primary="Video and Photo creation from using a camera to editing" />
        </ListItem>
        <ListItem button component={Link} href='/MakerCreation'>
          <ListItemText primary="Arts and crafts, plus DIY projects" />
        </ListItem>
        <ListItem button component={Link} href='/AdminNavbarLinks'>
          <ListItemText primary="Admin Full Tilt" />
        </ListItem>
        <ListItem button component={Link} href='/PreciousPlastic'>
          <ListItemText primary="Precious Plastic Omaha" />
        </ListItem>
      </List>
    </Typography>
  );
}

export default Dashboard;