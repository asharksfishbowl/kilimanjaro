import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { Emojione } from 'react-emoji-render';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Artists" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Blog Articles</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Emojione text=":pizza:"/>
      </ListItemIcon>
      <ListItemText
        primary="Amazing"
        secondary="Oven Baked"
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Emojione text=":garlic:"/>
      </ListItemIcon>
      <ListItemText
        primary="Homemade"
        secondary="Garlic Oil"
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Emojione text=":chicken:"/>
      </ListItemIcon>
      <ListItemText
        primary="Chicken"
        secondary="with Roasted Tomato"
      />
    </ListItem>
  </div>
);
