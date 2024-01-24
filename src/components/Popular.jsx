import React, { useEffect, useState } from 'react'
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

<div className="moviebox h-[218vh] w-full bg-blue-200 px-5 py-5">
<h1 className='text-2xl font-bold ml-3'>Popular Movie</h1>

{popularMovies.map((poster, index)=>{

return(

  <div key={index} className='posterdiv h-[50vh] w-56 rounded border-2 border-black inline-block ml-4 my-2 relative'>

<img src={`http://image.tmdb.org/t/p/original${poster.backdrop_path}`} alt="" className='h-full' />

<div className='descriptionbox h-[19vh] w-full  absolute top-[62%] px-3 py-3 text-white ' style={{backgroundColor:"rgba(0, 0, 0, 0.345"}}>
<h2 className='text-[1.1vmax]'>{poster.title}</h2>
<h4>{poster.release_date}</h4>
<h4>{poster.vote_average}</h4>
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