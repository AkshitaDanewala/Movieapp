import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from "./components/Home"
import Popular from "./components/Popular"
const App = () => {


  return (
    <div>
      <Nav/>
      <Routes>
        
        <Route index element={<Home/>}/>
<Route path= "movie/:id" element={<h1>Movie world</h1>}/>
<Route path= "movies/:type" element={<Popular/>}/>
<Route path= "/*" element={<h1>Error page</h1>}/>




        </Routes>







    </div>
  )
}

export default App