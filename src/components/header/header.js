import React, {useEffect, useState} from 'react';
import classes from './header.module.css';
import logo from '../../assets/tvm-header-logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'

const Header = () => {

    const [query, setQuery] = useState('');
    const [placeholder, setPlaceholder] = useState('Search TV Shows');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    // console.log(location);

    const searchQueryHandler = (event) => {
        if (event.key === 'Enter' && query.length > 0) {
            // alert('hit enter ' + query)
            navigate(`/search/${query}`);
            setQuery('');
            inputFocusOutHandler();
        } 
    }

    const inputFocusHandler = () => {
        setPlaceholder('');
    }

    const inputFocusOutHandler = () => {
        setPlaceholder('Search TV Shows')
    }

    const updateQueryHandler = (event) => {
        setQuery(event.target.value);
    }

    const getBackToHome = () => {
        navigate('/');
    }

    return (
        <header className={classes['header_wrapper']}>
            <div className={classes['img_wrapper']} onClick={getBackToHome}>
                <img src={logo} alt="logo" />
            </div>
            <div className={classes.searchbar}>
                <input type="text" placeholder={placeholder} onBlur={inputFocusOutHandler} onFocus={inputFocusHandler} value={query} onChange={updateQueryHandler}  onKeyUp={searchQueryHandler} />
                <span className={classes.searchIcon}> <FaSearch /> </span>
            </div>
        </header>
    )
}

export default Header;
