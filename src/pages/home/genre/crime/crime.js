import React, {useEffect} from 'react';
import ContentWrapper from '../../../../components/contentWrapper/ContentWrapper';
import Carousel from '../../../../components/carousel/carousel';
import useFetch from '../../../../components/Hooks/useFetch';

const Crime = () => {    

    const { data, loading } = useFetch('/search/shows?q=crime');

    const crimeShows = data.data;
    
    return (
        <div className='carousel-section'>
            <ContentWrapper addClass="carousel_wrapper">
                <span className='carousel-title'> Crime </span>
            </ContentWrapper>
             <Carousel loading={loading} data={crimeShows} />
        </div>
      
  )
}

export default Crime;
