import  React from 'react';
import classes from './WorkerImage.css';

const workerImage = (props) => {
    const {data} = props;
    return <div className={classes.WorkerImage}>
                <img srcSet={data.avatar}/>
                {/*<span>{data.first_name[0]}</span>*/}
           </div>
};
export default workerImage;