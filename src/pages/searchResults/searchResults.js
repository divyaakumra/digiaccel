import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component'; 
import classes from './searchResults.module.css';
import { useParams } from 'react-router-dom';
import fetchDataFromApi from '../../Utils/Api';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import NoResults from '../../assets/no-results.png';
import Spinner from '../../components/Spinner/Spinner';
import MovieResults from './MovieResults';


const SearchResults = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  // const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState('');

  useEffect(() => {
    searchQuery();
  }, [query]);
  
  const searchQuery = () => {
    setLoading(true)

    fetchDataFromApi(`/search/shows?q=${query}`).then(res => {
      setLoading(false);
      setData(res.data);
    }).catch(err => setData(err));
  }

  console.log(data);
  

  return (
    <div className={classes.searchpage}>
      
      {loading && <Spinner initial={true} />}

      {!loading && <ContentWrapper>
        
        {data.length === 0 ?
          
          (<p className={classes.resultNotFound}> Sorry, no results found. </p>) :

          <div className={classes.pageTitle}>
            {`Search ${data.length > 1 ? 'results' : 'result'} : ${query}`}

            <MovieResults data={data} />

          </div>
        }
        
      </ContentWrapper>}

    </div>
  )
}

export default SearchResults;
