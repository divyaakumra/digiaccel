import React from 'react';
import PosterFallBack from '../../assets/no-poster.png';
import { useNavigate } from 'react-router-dom';
import classes from './MovieResults.module.css'

const MovieResults = (props) => {
    const movieArray = props.data;

    const navigate = useNavigate();

  return (
      <div className={classes.searchMovieContainer}>
          {movieArray.map(movie => {
              return (
                
                  <div className={classes.movieItem} onClick={()=> {navigate(`/${movie.show.id}`)}}>
                      <div className={classes.moviePoster}>
                          <img src={movie.show.image === null ? PosterFallBack : movie.show.image.original} alt={movie.show.name} />
                        </div>
                  </div>
              )          
          })}
          
    </div>
  )
}

export default MovieResults