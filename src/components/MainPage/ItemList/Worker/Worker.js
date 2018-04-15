import React from 'react';
import classes from './Worker.css';
import WorkerImage from "./WorkerImage/WorkerImage";
import WorkerInfo from "./WorkerInfo/WorkerInfo";

const worker = (props)=> {
    const {data} = props;
    return <div className={classes.Worker}>
              <div className={classes.WorkerBlockLeft}>
                  <WorkerImage data={data}/>
              </div>
              <div className={classes.WorkerBlockRight}>
                  <WorkerInfo data={data}/>
              </div>
           </div>
};

export default worker;