import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';

const MenuItems = ({menuItems, classes, menuItemClickHandler}) => {
  return menuItems.map(menuItem => (
    <Link to={menuItem.url} className={classes.linkText} key={menuItem.url}>
      <ListItem button onClick={menuItemClickHandler}>
        <ListItemIcon className={classes.listIcon}>{menuItem.icon}</ListItemIcon>
        <ListItemText className={classes.primary} primary={menuItem.text} />
      </ListItem>
    </Link>
  ));
}

const Menu = (props) => {
    const {drawerWidth, drawerOpen, closeHandler, openHandler, menuItemClickHandler} = props;

    const useStyles = makeStyles((theme) => ({
        drawer: {
            width: drawerOpen ? drawerWidth : theme.spacing(7) + 1,
            flexShrink: 0,
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            [theme.breakpoints.down('xs')]: {
              width: 0,
            },
        },
        drawerPaper: {
            width: drawerOpen ? drawerWidth :  theme.spacing(7) + 1,
            overflowX: 'hidden',
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            [theme.breakpoints.down('xs')]: {
              width: drawerOpen ? theme.spacing(30) + 1 : 0,
            },
        },
        drawerContainer: {
            // overflow: 'auto',
        },
        menuCloseIcon: {
            display: 'flex',
            justifyContent: drawerOpen ? 'flex-end' : 'center',
            alignContent: 'center'
        },
        linkText: {
          textDecoration: 'none',
          color: '#333'
        },
        listIcon: {
          minWidth: '40px'
        }
    }));
    const classes = useStyles();

    const menuItems = [
      {
        text: "Configuration Process",
        url: "/configuration-process",
        icon: <InboxIcon />
      },
      {
        text: "Manage User",
        url: "/manage-user",
        icon: <MailIcon />
      }
    ];

    return (
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem className={classes.menuCloseIcon}>
                  {
                      drawerOpen 
                        ? 
                            <IconButton onClick={closeHandler}><ChevronLeftIcon /></IconButton>
                        :
                            <IconButton onClick={openHandler}><ChevronRightIcon /></IconButton>
                  }
              </ListItem>
              {/* <Link to="/configuration-process" className={classes.linkText} >
                <ListItem button onClick={menuItemClickHandler}>
                  <ListItemIcon className={classes.listIcon}><InboxIcon /></ListItemIcon>
                  <ListItemText primary={"Configuration Process"} />
                </ListItem>
              </Link>
              <Link to="/manage-user" className={classes.linkText} >
                <ListItem button onClick={menuItemClickHandler}>
                  <ListItemIcon className={classes.listIcon}><InboxIcon /></ListItemIcon>
                  <ListItemText className={classes.primary} primary={"Manage User"} />
                </ListItem>
              </Link> */}

              <MenuItems menuItems={menuItems} classes={classes} menuItemClickHandler={menuItemClickHandler}/>
              
          </List>
        </div>
      </Drawer>
    );
};

export default Menu;