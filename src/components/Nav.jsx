import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {

const [search, setsearch] = useState([])



  return (
    <div>

<nav className='h-12 w-full bg-black text-white flex items-center justify-center gap-5 text-[1.6vmax]'>

<div className="logo">
  <img src="" alt="" className='h-10 w-10 bg-red-200' />
</div>


    <Link to="/" className='hover:text-red-500'>Home</Link>
    <Link to="/movies/popular"  className='hover:text-red-500'>Popular</Link>
    <Link to="/movies/top_rated"  className='hover:text-red-500'>Top Rated</Link>
    <Link to="/movies/upcoming"  className='hover:text-red-500'>Upcoming</Link>

<input type="search" placeholder='search here' className='text-black' value={search}  onChange={(e)=> setsearch(e.target.value)}/>
<button >search</button>

</nav>



    </div>
  )
}

export default Nav