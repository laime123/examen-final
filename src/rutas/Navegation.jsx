import React from 'react'
import{BrowserRouter,Route,Routes,Navigate,NavLink}from 'react-router-dom'
import{Home}from'../components/Home'
import{About}from'../components/About'
import{Dashboard}from'../components/Dashboard'


function Navegation() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <NavLink to='/Home' >
                    Home
                </NavLink>
               
            </li>
            <li>
                <NavLink to='/About' >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to='/Dashboard' >
                    Dashboard
                </NavLink>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<Navigate to="/Home" replace/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export  {Navegation}