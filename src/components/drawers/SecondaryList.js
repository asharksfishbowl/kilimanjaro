import React from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';

import { Emojione } from 'react-emoji-render';

function SecondaryList(props) {

  return(
    <List>
      <ListSubheader inset>Blog Articles</ListSubheader>
      <ListItem button onClick={() => props.selectItem('pizza/blog/')}>
        <ListItemIcon>
          <Emojione text=":pizza:"/>
        </ListItemIcon>
        <ListItemText
          primary="Amazing"
          secondary="Oven Baked"
        />
      </ListItem>
      <ListItem button onClick={() => props.selectItem('garlic/blog/')}>
        <ListItemIcon>
          <Emojione text=":garlic:"/>
        </ListItemIcon>
        <ListItemText
          primary="Homemade"
          secondary="Garlic Oil"
        />
      </ListItem>
      <ListItem button onClick={() => props.selectItem('chicken/blog')}>
        <ListItemIcon>
          <Emojione text=":chicken:"/>
        </ListItemIcon>
        <ListItemText
          primary="Chicken"
          secondary="with Roasted Tomato"
        />
      </ListItem>
    </List>
  )
}
export default SecondaryList;
