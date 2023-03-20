import React from 'react';
import classes from './pageNotFound.module.css';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

  const navigate = useNavigate();

  const goBackToHomeHandler = () => {
    return navigate('/');
  } 

  return (
    <div className={classes.pageNotFoundContainer}>
      <ContentWrapper>
        <div className={classes.pageNotFound}>
          <h2> OOPS! </h2>
          <p> We could not find what you were searching for. </p>
          <button onClick={goBackToHomeHandler}> Home </button>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default PageNotFound;
