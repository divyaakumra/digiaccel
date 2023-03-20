import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import  './home.css';

//Genre
import Crime from './genre/crime/crime';
import Drama from './genre/drama/Drama';
import Horror from './genre/horror/Horror';

const home = () => {
  return (
    <>
        <HeroBanner />
        <div className='genres_carousel'>
            <Drama />
            <Crime />
            <Horror />
        </div>
    </>
  )
}

export default home;