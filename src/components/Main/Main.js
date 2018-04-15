import React from 'react';
import classes from './Main.css';
import {Route, Switch, Redirect} from 'react-router';
import MainPage from "../MainPage/MainPage";
import About from "../About/About";
import NotFoundRoute from "../NotFoundRoute/NotFoundRoute";

const main = (props) => {
    return <main className={classes.Main}>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/404' component={NotFoundRoute}/>
            <Redirect to='/404'/>
        </Switch>
    </main>
};

export default main;