import React from 'react';
import classes from './HeroBanner.module.css';

const HeroBanner = () => {
    
    return (
        <>
            <div className={classes.herobanner}>
                <div className={classes['herobanner_wrapper']}>
                    <div>
                        <h2> Unlimited movies, TV shows and more.</h2>
                        <p> Watch Anywhere. </p>
                    </div>
                </div>
                <div className={classes.overlay}></div>
            </div>
        </>
    )
}

export default HeroBanner;
