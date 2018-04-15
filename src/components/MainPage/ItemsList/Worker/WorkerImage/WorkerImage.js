import  React from 'react';
import classes from './WorkerImage.css';

const workerImage = (props) => {
    const {data} = props;
    return <div className={classes.WorkerImage}>
                <img srcSet={data.avatar}/>
           </div>
};
export default workerImage;