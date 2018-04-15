import React from 'react';
import classes from './Main.css';
import {Route, Switch, Redirect} from 'react-router';
import asyncComponent from '../AsyncComponent/AsyncComponent';
const AsyncMainPage = asyncComponent(() => import('../MainPage/MainPage'));
const AsyncAbout = asyncComponent(() => import('../About/About'));
const AsyncNotFoundRoute = asyncComponent(() => import('../NotFoundRoute/NotFoundRoute'));

const main = (props) => {
    return <main className={classes.Main}>
        <Switch>
            <Route exact path='/' component={AsyncMainPage}/>
            <Route exact path='/about' component={AsyncAbout}/>
            <Route exact path='/404' component={AsyncNotFoundRoute}/>
            <Redirect to='/404'/>
        </Switch>
    </main>
};

export default main;