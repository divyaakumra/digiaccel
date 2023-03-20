import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

import classes from './showRating.module.css';

const CircleRating = ({ rating }) => {
    return (
        <div className={classes.circleRating}> {rating}  </div>
    );
};

export default CircleRating;