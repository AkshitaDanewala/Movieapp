import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>

<nav className='h-12 w-full bg-black text-white flex items-center justify-center gap-5 text-[1.6vmax]'>
    <Link to="/" className='hover:text-red-500'>Home</Link>
    <Link to="/movies/popular"  className='hover:text-red-500'>Popular</Link>
    <Link to="/movies/top_rated"  className='hover:text-red-500'>Top Rated</Link>
    <Link to="/movies/upcoming"  className='hover:text-red-500'>Upcoming</Link>
</nav>


    </div>
  )
}

export default Nav