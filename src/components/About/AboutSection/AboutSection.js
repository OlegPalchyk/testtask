import React from 'react';
import classes from './AboutSection.css';

const aboutSection = (props) => {
    return <section className={classes.AboutSection}>{props.children}</section>
};

export default aboutSection;