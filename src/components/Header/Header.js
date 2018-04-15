import React from 'react';
import classes from './Header.css';
import HeaderNav from "./HeaderNav/HeaderNav";

const header = (props)=> {
    return <header className={classes.Header}>
                <HeaderNav/>
           </header>
};

export default header;