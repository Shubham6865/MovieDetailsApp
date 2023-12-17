
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieApi from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies=createAsyncThunk('Movies/fetchAsyncMovies',async(term)=>{
   // const movieText ='Harry';
   
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)    
    //console.log("The Response from Api",response);
    return response.data;
});
export const fetchAsyncShows=createAsyncThunk('Movies/fetchAsyncShows',async(term)=>{
    //const series ='Friends';
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)
    //console.log("The Response from Api",response);
    return response.data;
});

export const fetchAsyncMovieOrShowDetail=createAsyncThunk('Movies/fetchAsyncMovieOrShowDetail',async(id)=>{
   
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
    //console.log("The Response from Api",response);
    return response.data;
});

const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
};
const movieSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {
    //   addMovies: (state, { payload }) => {
    //     state.movies = payload;
    //   },
      removeSelectedMovieOrShow:(state)=> {
        state.selectedMovieOrShow={};
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAsyncMovies.pending, (state) => {
          console.log("pending");
        })
        .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
          console.log("fetch fetchAsyncMovies successfully fulfilled");
          return {
            ...state,
            movies: payload,
          };
        })
        .addCase(fetchAsyncMovies.rejected, (state) => {
          console.log("rejected");
        })
        .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
            console.log("fetch fetchAsyncShows successfully fulfilled");
            return {
              ...state,
              shows: payload,
            };
          })
        .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
            console.log("fetch fetchAsyncMovieOrShowDetail successfully fulfilled");
            return {
              ...state,
              selectedMovieOrShow: payload,
            };
          });
    },
  });
  
  export const { removeSelectedMovieOrShow } = movieSlice.actions;
  export const getAllMovies = (state) => state.movies.movies;
  export const getAllShows = (state) => state.movies.shows;
  export const getslectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
  export default movieSlice.reducer;
  