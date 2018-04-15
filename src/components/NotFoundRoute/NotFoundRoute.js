import React from 'react';
import classes from './NotFoundRoute.css';
import Wrapper from '../../hoc/wrapper';
import PageTitle from "../RepeatableComponents/PageTitle/PageTitle";
import {NavLink} from "react-router-dom";

const notFoundRoute = (props) => {
    return <Wrapper>
                <PageTitle>Page not found </PageTitle>
                <NavLink to='/'  className={classes.LinkRedirection}>Go to main page-></NavLink>
    </Wrapper>
};

export default notFoundRoute;