import React, {useEffect} from 'react'

import MovieListing from '../movieListing/MovieListing'
import { useDispatch } from 'react-redux'
import {fetchAsyncMovies} from '../../features/movies/MovieSlice'
import {fetchAsyncShows} from '../../features/movies/MovieSlice'


const Home = () => {

  const dispatch= useDispatch();
  const movietext="Harry";
  const showText="Friends"
useEffect(()=>{
    dispatch(fetchAsyncMovies(movietext));
    dispatch(fetchAsyncShows(showText));
 },[dispatch]);


  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing/>
    </div>
  )
}

export default Home
