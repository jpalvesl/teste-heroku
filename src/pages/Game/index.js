import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Game() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Game
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Fase 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Renda fixa" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Renda Variavel" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Comparação" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Desafio" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Fase 2" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Fase 3" />
      </ListItem>
    </List>
  );
}
