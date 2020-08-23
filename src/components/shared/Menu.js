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
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './Menu.css';
import TreeView from '@material-ui/lab/TreeView';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const MenuItems = ({menuItems, classes, menuItemClickHandler}) => {
  // return menuItems.map(menuItem => (
  //   <Link to={menuItem.url} className={classes.linkText} key={menuItem.url}>
  //     <ListItem button onClick={menuItemClickHandler}>
  //       <ListItemIcon className={classes.listIcon}>{menuItem.icon}</ListItemIcon>
  //       <ListItemText className={classes.primary} primary={menuItem.name} />        
  //     </ListItem>        
  //   </Link>
  // ));

  return (
    
      <List disablePadding dense>
        {menuItems.map(({ label, name, icon, url, items: subItems, ...rest }) => {
          return (
            <React.Fragment key={name}>
              <Link to={url} className={classes.linkText} >
                <ListItem style={{ paddingLeft: 18 }} button {...rest}>
                <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
                  <ListItemText>{label}</ListItemText>
                </ListItem>
              </Link>
              <TreeView
                className={classes.root}
                defaultExpanded={['3']}
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{ width: 24 }} />}
              >
              {Array.isArray(subItems) ? (
                
                <List disablePadding dense>
                  {subItems.map((subItem) => {
                    return (
                      <Link to={`${url}${subItem.url}`} className={classes.linkText} key={subItem.url}>
                        <ListItem
                          key={subItem.name}
                          style={{ paddingLeft: 36 }}
                          button
                          dense
                        >
                          <ListItemIcon className={classes.listIcon}>{subItem.icon}</ListItemIcon>
                          <ListItemText>
                            <span className="sidebar-subitem-text">                            
                              {subItem.label}
                            </span>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    )
                  })}
                </List>
               
              ) : null}
               </TreeView>
            </React.Fragment>
          )
        })}
      </List>


  )
}

const Menu = (props) => {
    const {drawerWidth, drawerOpen, menuItemClickHandler} = props;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const useStyles = makeStyles((theme) => {
      return {
        drawer: {
          width: drawerOpen ? isSmallScreen ? 0 : drawerWidth : isSmallScreen ? 0 : drawerWidth,
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
            root: {
              color: theme.palette.text.secondary,
              '&:hover > $content': {
                backgroundColor: theme.palette.action.hover,
              },
              '&:focus > $content, &$selected > $content': {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
                color: 'var(--tree-view-color)',
              },
              '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
                backgroundColor: 'transparent',
              },
            },
        },
        drawerPaper: {
            width: drawerOpen ? drawerWidth :  isSmallScreen ?  0 : drawerWidth,
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
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
    }});
    const classes = useStyles();

    const menuItems = [
      {
        label: "Configuration Process",
        name: "Configuration Process",
        url: "/configuration-process",
        icon: <InboxIcon />
      },
      {
        label: "Manage User",
        name: "Manage User",
        url: "/manage-user",
        icon: <MailIcon />
      },
      {
        label: "Categories",
        name: "Categories",
        url: "/categories",
        icon: <Label />,
        items: [
          { name: 'Social', label: 'Social', url: '/social', icon: <SupervisorAccountIcon /> },
          { name: 'Updates', label: 'Updates', url: '/update', icon: <InfoIcon /> },
          { name: 'Forums', label: 'Forums', url: '/forums', icon: <ForumIcon /> },
          { name: 'Promotions', label: 'Promotions', url: '/promotions', icon: <LocalOfferIcon /> },
        ],
      },
      {
        label: "All Mail",
        name: "All Mail",
        url: "/mail",
        icon: <MailIcon />
      },
      {
        label: "Trash",
        name: "Trash",
        url: "/trash",
        icon: <DeleteIcon />
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
                <MenuItems menuItems={menuItems} classes={classes} menuItemClickHandler={menuItemClickHandler}/>              
            </List>
          </div>
      </Drawer>
    );
};

export default Menu;