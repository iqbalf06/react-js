import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navs from './components/Navbar'

function App() {
  return(
    <div>
      <Navs />
      <Login />
      <Home />
    </div>
  )
  
  //   <Router>
  //     <div>
  //       <Navs />
  //     </div>
      
  //     <Routes>
  //       <Route exact path='/' element={<Home />} />
  //       <Route exact path='/login' element={<Login />} />
  //       <Route exact path='/register' element={<Register />} />
  //     </Routes>
  //   </Router>
  // )
}





export default App