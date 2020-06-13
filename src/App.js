import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import NavBar from './components/shared/NavBar';
import Menu from './components/shared/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Main from './components/Main';
import { useMediaQuery } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerState] = React.useState(false);

  const menuItemClicked = () => {
    setDrawerState(!isSmallScreen)
  }

  const toggleDrawer = () => {
    setDrawerState(!drawerOpen)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar drawerHanlder={toggleDrawer}/>
      <Menu drawerWidth={drawerWidth} drawerOpen={drawerOpen} menuItemClickHandler={menuItemClicked}/>
      <Main />
    </div>
  );
}

export default App;
