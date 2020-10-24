import React from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon
} from '@material-ui/icons';


function MainList(props) {

  return(
    <List>
      <ListItem button onClick={() => props.selectItem('dashboard')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={() => props.selectItem('products')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button onClick={() => props.selectItem('artists')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Artists" />
      </ListItem>
      <ListItem button onClick={() => props.selectItem('reports')}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button onClick={() => props.selectItem('integrations')}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </List>
  )
}
export default MainList;
