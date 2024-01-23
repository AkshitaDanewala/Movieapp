import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from "./components/Home"
import Popular from "./components/Popular.jsx"
import Toprated from "./components/Toprated.jsx"
import Upcoming from "./components/Upcoming.jsx"

const App = () => {


  return (
    <div>
      <Nav/>
      <Routes>
        
        <Route  index element={<Home/>}/>
        <Route path="/movies/popular" element={<Popular/>}/>
        <Route index element={<Toprated/>}/>
        <Route index element={<Upcoming/>}/>








        </Routes>







    </div>
  )
}

export default App