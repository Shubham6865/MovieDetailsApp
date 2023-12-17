import React ,{useEffect}from 'react'
import {useParams,Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {fetchAsyncMovieOrShowDetail, removeSelectedMovieOrShow} from '../../features/movies/MovieSlice'
import {getslectedMovieOrShow} from '../../features/movies/MovieSlice'
import Loader from '../loader/Loader'
import './movieDetail.scss';


const MovieDetail = () => {

  const {imdbID} =useParams();
  const dispatch =useDispatch();


  const data = useSelector(getslectedMovieOrShow)
  // console.log(data)
  
  useEffect(()=>{
    
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  },[dispatch,imdbID])

  return (
    <div className='movie-section'>

      {Object.keys(data).length===0?
       ( <Loader/>) :
      (<>
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating  <i className="fa fa-star"></i>   : {data.imdbRating}
            </span>
            <span>
              IMDB Votes  <i className="fa fa-thumbs-up"></i>   : {data.imdbVotes}
            </span>
            <span>
              RunTime  <i className="fa fa-film"></i>   : {data.Runtime}
            </span>
            <span>
              Year  <i className="fa fa-calendar"></i>   : {data.Year}
            </span>
          </div>
          <div className="movieplot">
            {data.Plot}
          </div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Language</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
            <div>
              <button className='btn-back'> <Link to='/'>
              Back
              </Link></button>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster} alt={data.Title} />

        </div>
      </>)}
    </div>
  )
}

export default MovieDetail
