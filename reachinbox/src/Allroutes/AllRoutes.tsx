import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login'
import Deskstop from '../pages/Desktop '

const AllRoutes:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/desktop' element={ <Deskstop/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
