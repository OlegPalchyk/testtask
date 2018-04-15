import React from 'react';
import classes from './HeaderNav.css';
import {NavLink} from 'react-router-dom';

const headerNav = (props) => {
  return <nav className={classes.HeaderNav}>
            <NavLink to="/" className={classes.HeaderNavItem}>Items</NavLink>
            <NavLink to="/about" className={classes.HeaderNavItem}>About</NavLink>
         </nav>
};

export default headerNav;