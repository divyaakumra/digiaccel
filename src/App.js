import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// sections of our app
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import PageNotFound from './pages/404/pageNotFound';
import Details from './pages/details/details';
import SearchResults from './pages/searchResults/searchResults';


function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Details/>} />
          <Route path="/search/:query" element={<SearchResults/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
