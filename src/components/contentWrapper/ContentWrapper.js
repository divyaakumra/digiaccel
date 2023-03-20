import React from 'react';
import classes from './ContentWrapper.module.css';

const ContentWrapper = (props) => {

  const classnames = props.addClass ? props.addClass : '';

  return (
      <div className={`${classes.contentWrapper} ${classnames}`}> {props.children} </div>
  )
}

export default ContentWrapper;