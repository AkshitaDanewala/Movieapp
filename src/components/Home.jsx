import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Home = () => {

const [popularMovies, setpopularMovies] = useState([])

    useEffect(()=>{
fetch("https://api.themoviedb.org/3/movie/popular?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
.then(res => res.json())
.then(data => setpopularMovies(data.results) )
    })


  return (
   <>



    <div className='maindiv h-full w-full  bg-red-300 '>


<Carousel 
showThumbs={false}
autoplay={true}
transitionTime={3}
infiniteLoop={true}
showStatus={false}
> 

{popularMovies.map((movie, id)=>(
    <Link to={`/movie/${movie.id}`} key={id}  >
    
    <div key={id} className="posterimg h-[511px] ">
        <img src={`http://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=""  className='w-full m-auto block'/>
{/* agar imdb se koi image lagani hai to yeh wala apth lagaate hai */}
    </div>

    <div className="posterimg-overlay h-[70%] w-full bottom-[0px] absolute top-20 flex flex-col justify-end items-start px-8 ">

    <h2 className='text-white text-[2.5vmax] font-bold'>{movie.original_title}</h2>

<h2 className='text-white text-[1.5vmax] font-bold'>Release Date: <span className='text-[1.3vmax]'>{movie.release_date}</span></h2> 

<h2 className='text-white text-[1.5vmax] font-bold'>Ratings:  <span>{movie.vote_average}</span> </h2>
  
  <p className='text-white w-9/12 '>{movie.overview}</p>

</div>


    </Link>
   
))}


</Carousel >

   


    {/* maindivend */}
    </div>
    </>
  )
}

export default Home

// api key = "c48ac7a0d7524be5ea4ad45855a94c2d"
// api token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhhYzdhMGQ3NTI0YmU1ZWE0YWQ0NTg1NWE5NGMyZCIsInN1YiI6IjY1YWU4YTJkZDEwMGI2MDEwYzgyNjY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MQLBQHig_MUZd0NZRRiMwP_OKhIahA8TUwAag_ivrIw"