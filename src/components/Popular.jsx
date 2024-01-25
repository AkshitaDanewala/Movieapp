import React, { useEffect, useState } from 'react'

const Popular = () => {
  const [popularMovies, setpopularMovies] = useState([])
  const [popularTV, setpopularTV] = useState([])

useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  .then(res=> res.json())
  .then(data => setpopularMovies(data.results) )
  // .then(data => console.log(data))
})



useEffect(()=>{
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  .then(res=> res.json())
  .then(data=> setpopularTV(data.results))
  // .then(data=> console.log(data.results))

})

  return (
    
    <div className=' maindiv h-screen w-full bg-green-200 '>

<div className="moviebox h-[280vh] w-full bg-black px-5 py-5 ">
<h1 className='text-2xl font-bold ml-3 text-white'>Popular Movie</h1>

{popularMovies.map((poster, index)=>{

return(

  <div key={index} className='posterdiv  h-[63vh] w-56 rounded border-2 border-black  inline-block ml-4 my-2 relative'>

<img src={`http://image.tmdb.org/t/p/original${poster.backdrop_path}`} alt="" className='h-[40vh] rounded' />

<div className='descriptionbox h-[23vh] w-full  absolute top-[63%]   px-3 py-3 text-white' >
 
  <span>Title:</span> <span className='text-[1.2vmax] ml-3'>{poster.title}</span>
 <h2> <span>Release Date:</span> <span className='ml-3'>{poster.release_date}</span></h2> 
 <h2><span>Ratings:</span> <span className='text-[1.2vmax] text-red-500 ml-3'>{poster.vote_average}</span></h2>



</div>

  </div>

)



})}



</div>




<div className="popularTV h-full w-full bg-black h-[283vh] w-full  px-5 py-5 ">

<h1 className='text-2xl font-bold ml-3 text-white'>Popular TV</h1>

{popularTV.map((tv, index)=>{
  return(

    <div key={index} className="TVdiv h-[63vh] w-56 rounded border-2 border-black  inline-block ml-4 my-2 relative">

<img src={`http://image.tmdb.org/t/p/original${tv.backdrop_path}`} alt="" className='h-[40vh] rounded' />


<div className='descriptionbox h-[23vh]  w-full  absolute top-[63%]   px-3 py-3 text-white' >
 
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

export default Popular