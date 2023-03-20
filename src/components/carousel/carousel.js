import React, {useRef} from 'react';
import PosterFallback from '../../assets/no-poster.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './carousel.css';
import ShowRating from '../showRating/showRating';
import Spinner from '../Spinner/Spinner';

const Carousel = (props) => {

  const carouselContainer = useRef();

  const loading = props.loading;
  // alert(loading);

  const navigate = useNavigate();

  const horrorShowData = props.data;

  // console.log(Array.isArray(horrorShowData), horrorShowData);

  const navigation = (type) => {

  }

  return (
    <>
      <div className='carousel'>
        <ContentWrapper>

          {!loading ? (<div className='carouselItems' ref={carouselContainer}>
            
            {horrorShowData?.map(data => {

              const posterImg = data.show.image === null ? PosterFallback : data.show.image.original;
              const rating = data.show.rating.average === null ? '?' : data.show.rating.average;

              return (
                <div key={data.show.id} className="carousel-item" onClick={()=>navigate(`${data.show.id}`)}>
                  <div className='showPoster'>
                    <img src={posterImg} alt={data.show.name} />
                    <ShowRating rating={rating} />
                  </div>
                  <div className='showText'>
                    <span className='showTitle'> {data.show.name} </span>
                  </div>
                </div>
             )
            }
            )
            }
          </div>
          
          ) : (<Spinner initial={true}/>)}
          
        </ContentWrapper>
      </div>
    </>
  )
}

export default Carousel