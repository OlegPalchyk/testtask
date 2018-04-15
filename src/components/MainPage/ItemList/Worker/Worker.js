import React from 'react';
import classes from './Worker.css';
import WorkerImage from "./WorkerImage/WorkerImage";
import WorkerInfo from "./WorkerInfo/WorkerInfo";
import PropTypes from 'prop-types';

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

worker.propTypes = {
  data : PropTypes.shape({
      "first_name": PropTypes.string,
      "last_name": PropTypes.string,
      "email": PropTypes.string,
      "avatar": PropTypes.string,
      "company": PropTypes.string,
      "adress": PropTypes.string,
      "phone": PropTypes.string
  })
};
worker.defaultProps = {
    data : PropTypes.shape({
        "first_name": "-",
        "last_name": "-",
        "email": "-",
        "avatar": "",
        "company":"-",
        "adress": "-",
        "phone": "-"
    })
};