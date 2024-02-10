import React, { useEffect, useState } from 'react'

const Upcoming = () => {

const [upcomingMovie, setupcomingMovie] = useState([])

useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  .then(res=> res.json())
  .then(data=> setupcomingMovie(data.results))
  // .then(data=> console.log(data))
})



  return (
 
<div className=' maindiv h-screen w-full '>

<div className="moviebox h-[280vh] w-full bg-black px-5 py-14 whitespace-nowrap overflow-x-auto"  style={{scrollbarWidth: "none"}}>
<h1 className='text-2xl font-bold ml-3 text-white'>Upcoming Movies</h1>

{upcomingMovie.map((poster, index)=>{

return(

  <div key={index} className='posterdiv  h-[63vh] w-[26%] rounded border-2 border-black  inline-block ml-5 my-2 relative'>

<img src={`http://image.tmdb.org/t/p/original${poster.backdrop_path}`} alt="" className='h-[40vh] rounded' />

<div className='descriptionbox h-[18vh] w-full  absolute top-[71%]   px-3 py-3 text-white' >
 
  <span>Title:</span> <span className='text-[1.2vmax] ml-3'>{poster.original_title}</span>
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

export default Upcoming