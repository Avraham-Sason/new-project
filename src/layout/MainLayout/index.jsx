import React from 'react'
import { Route,Routes } from 'react-router'
import Home from '../../pages/home'
import styles from './style.module.css'

function MainLayout() {
  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
  )
}

export default MainLayout