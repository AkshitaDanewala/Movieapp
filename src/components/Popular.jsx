import React, { useEffect, useState } from 'react'

const Popular = () => {

  const [popularMovies, setpopularMovies] = useState([])

useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=c48ac7a0d7524be5ea4ad45855a94c2d")
  .then(res=> res.json())
  // .then(data => setpopularMovies(data) )
  .then(data => console.log(data))
})

  return (

    <div>P</div>
  )
}

export default Popular