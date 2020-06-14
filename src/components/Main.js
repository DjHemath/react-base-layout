import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import ConfigurationProcess from './main-components/ConfigurationProcess';
import ManageUser from './main-components/ManageUser';

const Main = () => {
    const useStyles = makeStyles(theme => ({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            backgroundColor: '#f4f4f4',
            height: '100vh'
          },
    }));
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <Toolbar />
            <main>
                <Switch>
                    <Route path="/configuration-process" component={ConfigurationProcess}/>
                    <Route path="/manage-user" component={ManageUser}/>
                </Switch>
            </main>
        </div>
    );
};

export default Main;