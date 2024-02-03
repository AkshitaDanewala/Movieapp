import React, { useEffect, useState } from 'react'

const Toprated = () => {

const [topratedMovie, settopratedMovie] = useState([])
const [topratedTV, settopratedTV] = useState([])


useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  .then(res=> res.json())
  .then(data=> settopratedMovie(data.results))
  // .then(data=> console.log(data))

})

useEffect(()=>{
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  .then(res=> res.json())
.then(data=> settopratedTV(data.results))
  // .then(data=> console.log(data))
})

  return (
   
    <div className=' maindiv h-screen w-full bg-green-200 '>

    <div className="moviebox  w-full bg-black  px-5 py-5 whitespace-nowrap overflow-x-auto" style={{scrollbarWidth: "none"}}>
    <h1 className='text-2xl font-bold ml-3 text-white'>Top- Rated Movie</h1>
    
    {topratedMovie.map((poster, index)=>{
    
    return(
    
      <div key={index} className='posterdiv  h-[63vh] w-[26%] rounded border-2 border-black  inline-block ml-4 my-2 relative'>
    
    <img src={`http://image.tmdb.org/t/p/original${poster.backdrop_path}`} alt="" className='h-[44vh] rounded' />
    
    <div className='descriptionbox h-[18vh] w-full  absolute top-[71%]   px-3 py-3 text-white' >
     
      <span>Title:</span> <span className='text-[1.2vmax] ml-3'>{poster.title}</span>
     <h2> <span>Release Date:</span> <span className='ml-3'>{poster.release_date}</span></h2> 
     <h2><span>Ratings:</span> <span className='text-[1.2vmax] text-red-500 ml-3'>{poster.vote_average}</span></h2>
    
    
    
    </div>
    
      </div>
    
    )
    
    
    
    })}
    
    
    
    </div>
     <hr />
    
    
    
    <div className="popularTV  w-full bg-black  w-full  px-5 py-5 whitespace-nowrap overflow-x-auto " style={{scrollbarWidth: "none"}}>
    
    <h1 className='text-2xl font-bold ml-3 text-white'>Top- Rated TV</h1>
    
    {topratedTV.map((tv, index)=>{
      return(
    
        <div key={index} className="TVdiv h-[63vh] w-[26%] rounded border-2 border-black  inline-block ml-4 my-2 relative">
    
    <img src={`http://image.tmdb.org/t/p/original${tv.backdrop_path}`} alt="" className='h-[44vh] rounded' />
    
    
    <div className='descriptionbox h-[18vh]  w-full  absolute top-[71%]   px-3 py-3 text-white' >
     
      <span>Title:</span> <span className='text-[1.2vmax] ml-3'>{tv.original_name}</span>
     <h2> <span>Release Date:</span> <span className='ml-3'>{tv.first_air_date}</span></h2> 
     <h2><span>Ratings:</span> <span className='text-[1.2vmax] text-red-500 ml-3'>{tv.vote_average}</span></h2>
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
        </div>
    
    
    
    
     
      )
    })}
    
    
    
    </div>
    
    
      
    
    
    
    {/* maindivend */}
        </div>
        

  )
}

export default Toprated