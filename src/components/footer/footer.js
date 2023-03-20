import React from 'react';
import classes from './footer.module.css';

const footer = () => {

    const date = new Date();
    const year = date.getFullYear();

  return (
      <div className={classes['footer_wrapper']}>
        <p> Terms of Use | Privacy Policy &copy; {year} TVMAZE. All Rights Reserved.</p>
    </div>
  )
}

export default footer;

