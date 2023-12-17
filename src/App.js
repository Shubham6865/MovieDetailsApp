import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
    
      </Router>
    </div>
  );
}

export default App;
