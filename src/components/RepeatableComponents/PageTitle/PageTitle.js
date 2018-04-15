import React from 'react';
import classes from './PageTitle.css';

const pageTitle = (props)=> {
    return <h3 className={classes.PageTitle}>{props.children}</h3>
};
export default pageTitle;