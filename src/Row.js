import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from './axios'
import './Row.css'
const Row = ({title, fetchURL, isLargeRow=false}) => {
    const [movies,setMovies] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
           const request = await axios.get(fetchURL); 
           setMovies(request.data.results);
           return request;
        }
        fetchData();
    },[fetchURL])

    useEffect(() => {
      async function func(movie){
        try{
          const res = await axios.get(`${baseURL}${movie.backdrop_path}`)
          return
        }
        catch(e){
          console.log("Error")
        }
      }
      const x = async () => {
        for(const obj of movies){
            await func(obj)
        }
      }
      x()
    }, [movies])

  return (
    <div className='row'>
      <h2 className='row_title'>{title}</h2>
        <div className='row_posters'>
            {movies.map(movie=>(
                <LazyLoadImage 
                    className={`row_poster ${isLargeRow && "row_posterlarge"}`}
                    key={movie.id}
                    src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name} />
            ))}

        </div>
    </div>
  )
}

export default Row
