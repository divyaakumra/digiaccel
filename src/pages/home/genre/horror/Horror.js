import React from 'react';
import Carousel from '../../../../components/carousel/carousel';
import ContentWrapper from '../../../../components/contentWrapper/ContentWrapper';
import useFetch from '../../../../components/Hooks/useFetch';

const Horror = () => {

    const { data, loading } = useFetch('/search/shows?q=horror');

    // console.log(data.data);
    const horrorShows = data.data;

    return (
        <div className='carousel-section'>
            <ContentWrapper addClass="carousel_wrapper">
                <span className='carousel-title'> Horror </span>
            </ContentWrapper>
            <Carousel loading={loading} data={horrorShows} />
        </div>
  )
}


export default Horror;