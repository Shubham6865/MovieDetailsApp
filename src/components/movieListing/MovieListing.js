import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies ,getAllShows } from '../../features/movies/MovieSlice'
import MovieCard from '../movieCard/MovieCard'
import './movieListing.scss';
import Slider from 'react-slick';
import {Settings} from '../../common/Settings'

const MovieListing = () => {

  
  const movies= useSelector(getAllMovies);
  const shows= useSelector(getAllShows);
  let renderMovies, renderShows="";
  
  

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error"><h3>{movies.Error}</h3></div>
  );

  renderShows = shows.Response === "True" ? (
    shows.Search.map((shows, index) => (
      <MovieCard key={index} data={shows} />
    ))
  ) : (
    <div className="movies-error"><h3>{shows.Error}</h3></div>
  );
  
  // console.log(movies)
  return (
   
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          
          <div className="container">
            <Slider {...Settings}>
            {renderMovies}
            </Slider>
            {console.log("from container",renderMovies)}
          </div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="container">
            <Slider {...Settings} >
            {renderShows}
            </Slider>
            {/* {console.log("from container",renderShows)} */}
          </div>
        </div>
      </div>
   
  )
}

export default MovieListing
