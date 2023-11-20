import React, { useState } from 'react'
import Login from '../pages/Login/Index';
import MainLayout from '../layout/MainLayout';

export default function index() {
    const [activeUser, seActiveUser] = useState(true);
  return (
    <>
        {activeUser?<MainLayout/>:<Login/>}
    </>
  )
}
