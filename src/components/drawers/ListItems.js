import React from 'react';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';

import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon
} from '@material-ui/icons';

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
