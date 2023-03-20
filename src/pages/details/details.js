import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch';
import PosterFallBack from '../../assets/no-poster.png';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import classes from './details.module.css';
import Spinner from '../../components/Spinner/Spinner';

const Details = () => {

  const params = useParams();
  // console.log(params);

  const showID = params.id;

  const { data, loading } = useFetch(`/shows/${showID}`);
  // console.log('details', data.data);

  const showData = data.data;
  // console.log(showData);

  const parser = new DOMParser();

  return (
    <div className={classes.details}>
      {loading ? <p className={classes.showDataLoading}> <Spinner /> </p>: showData && (
        <ContentWrapper>
        <div className={classes.showContent}>
          <div className={classes.showPoster}>
            <img src={showData.image===null ? PosterFallBack : showData.image.original} alt={showData.name} />            
          </div>

          <div className={classes.showDetails}>
            <h2 className={classes.showTitle}> {showData.name} </h2>
            <p className={classes.showLang}> Language : <span> {showData.language} </span> </p>
              <p className={classes.showGenre}> Genres : <span > {showData.genres.length===0 ? 'Not Available' :showData.genres.map(genre => { return genre + ' ' } )} </span> </p>
            <p className={classes.showRating}> Rating : <span> {showData.rating.average===null ? 'Not Found' : showData.rating.average} </span> </p>
            <p className={classes.showSummary}> Summary : <span> {showData.summary.trim() === '' ? 'Not Available' : showData.summary.replace(/(<([^>]+)>)/gi, "")} </span></p>
            </div>
        </div>
      </ContentWrapper>      
      )}
    </div>
  )
}

export default Details;
