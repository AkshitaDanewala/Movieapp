import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from "./cards/Card"


const Movielist = () => {

const [movieList, setmovieList] = useState([])
const {type} = useParams()

useEffect(()=>{
    getdata()
}, [])

useEffect(()=>{
    getdata()
}, [type])

const getdata = ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c48ac7a0d7524be5ea4ad45855a94c2d`)
    .then( res => res.json())
    .then(data=>  setmovieList(data.results))
}

  return (
    <div className='movielist p=[0 10px 10px 10px 10px]'>

<h2 className="list__title text-[1.4vmax] m-[2vmax]">{(type ? type : "POPULAR").toUpperCase()}</h2>

<div className="listcards flex flex-wrap  justify-center">
    {
        movieList.map((movie, id)=>{
            <Cards movie={movie} key={id}/>

        })
    }
</div>

    </div>
  )
}

export default Movielist