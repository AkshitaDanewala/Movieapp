import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {

const [search, setsearch] = useState([])



  return (
    <div>

<nav className='h-12 w-full bg-black text-white flex items-center justify-center gap-5 text-[1.6vmax]'>

<div className="logo">
  <img src="https://i.pinimg.com/736x/e4/3a/2a/e43a2af43ffd9dabf88a3a5829518d74.jpg" alt="" className='h-14 w-14 ' />
</div>


    <Link to="/" className='hover:text-red-500'>Home</Link>
    <Link to="/movies/popular"  className='hover:text-red-500'>Popular</Link>
    <Link to="/movies/top_rated"  className='hover:text-red-500'>Top Rated</Link>
    <Link to="/movies/upcoming"  className='hover:text-red-500'>Upcoming</Link>


</nav>



    </div>
  )
}

export default Nav





