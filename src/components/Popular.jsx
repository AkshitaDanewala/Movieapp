import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Popular = () => {
  const [popularMovies, setpopularMovies] = useState([])

useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  // fetch("https://api.themoviedb.org/3/tv/popular?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  // fetch("https://api.themoviedb.org/3/search/movie?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  .then(res=> res.json())
  .then(data => setpopularMovies(data.results) )
  // .then(data => console.log(data))
})

  return (
    
    <div className=' maindiv h-screen w-full bg-green-200 '>

<div className="moviebox h-[305vh] w-full bg-black px-5 py-5">
<h1 className='text-2xl font-bold ml-3 text-white'>Popular Movie</h1>

{popularMovies.map((poster, index)=>{

return(

  <div key={index} className='posterdiv h-[69vh] w-56 rounded border-2 border-black inline-block ml-4 my-2 relative'>

<img src={`http://image.tmdb.org/t/p/original${poster.backdrop_path}`} alt="" className='h-[49vh]' />

<div className='descriptionbox h-[20vh] w-full  absolute top-[71%]   px-3 py-3 text-white' >
 
  <span>Title:</span> <span className='text-[1.2vmax] ml-3'>{poster.title}</span>
 <h2> <span>Release Date:</span> <span className='ml-3'>{poster.release_date}</span></h2> 
 <h2><span>Ratings:</span> <span className='text-[1.2vmax] text-red-500 ml-3'>{poster.vote_average}</span></h2>



</div>

  </div>

)



})}



</div>


  



{/* maindivend */}
    </div>
    
    
   



   
  )
}

export default Popular