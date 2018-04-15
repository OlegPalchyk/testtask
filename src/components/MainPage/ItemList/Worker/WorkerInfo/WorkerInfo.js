import  React from 'react';
import classes from './WorkerInfo.css';

const workerInfo = (props) => {
    const {data} = props;
    return <div className={classes.WorkerInfo}>
              <p className={classes.WorkerName}>{data.first_name} {data.last_name}</p>
              <p>email : {data.email}</p>
              <p>company : {data.company}</p>
              <p>adress : {data.adress}</p>
              <p>phone : {data.phone}</p>
           </div>
};

export default workerInfo;