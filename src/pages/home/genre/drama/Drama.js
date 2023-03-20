import React from 'react';
import ContentWrapper from '../../../../components/contentWrapper/ContentWrapper';
import Carousel from '../../../../components/carousel/carousel';
import useFetch from '../../../../components/Hooks/useFetch';

const Drama = () => {

    const { data, loading } = useFetch('/search/shows?q=drama');

    const dramaShows = data.data;
    

    return (
        <div className='carousel-section'>
            <ContentWrapper addClass="carousel_wrapper"> 
                <span className='carousel-title'> Drama </span>
            </ContentWrapper>
            <Carousel loading={loading} data={dramaShows} />
        </div>
  )
}

export default Drama;