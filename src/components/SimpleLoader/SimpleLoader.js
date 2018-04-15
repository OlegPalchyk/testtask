import React from 'react';
import classes from './SimpleLoader.css';

const simpleLoader = ()=> {
    return <div className={classes.Container}>
              <div className={classes.Loader}>
                  <div className={classes.LoaderDot}/>
                  <div className={classes.LoaderDot}/>
                  <div className={classes.LoaderDot}/>
                  <div className={classes.LoaderDot}/>
                  <div className={classes.LoaderDot}/>
                  <div className={classes.LoaderDot}/>
                  <div className={classes.LoaderText}/>
              </div>
           </div>
};

export default simpleLoader;
