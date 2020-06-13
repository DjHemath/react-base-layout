import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    menuIcon: {
      color: '#fff'
    }
  }));

const NavBar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const {drawerHanlder} = props

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp>
            <IconButton className={classes.menuIcon} onClick={drawerHanlder}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap>
            Hospital Name
          </Typography>
          <Typography variant="h6" noWrap>
            Logo
          </Typography>
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    );
};

export default NavBar;