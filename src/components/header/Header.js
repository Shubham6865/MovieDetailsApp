import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import userimg from '../../images/user.png';
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';


const Header = () => {

  const [term, setTerm] =useState("");
  const dispatch = useDispatch();
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(term);
    if(term==="") return alert("Please Enter Search Term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (

    <div className='header'>
     
      <div className="logo"> <Link to='/'>Movie App</Link></div>
      <div className="search-bar">
        <form onSubmit={submitHandler} >
          <input 
          type="text" 
          placeholder='Search Movie or Shows' 
          onChange={(e)=> setTerm(e.target.value)} 
          value={term}/>

          <button type='submit'><i className="fa fa-search"></i></button>

        </form>
      </div>
      <div className='user-image'>
        <img src={userimg} alt="userimage" />


      </div>
    </div>
  )
}

export default Header
