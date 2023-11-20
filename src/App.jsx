import React  from 'react'
import './App.css'
import Store from './store'
import Auth from './Auth/index.jsx'
function App() {

  return (
    <>
      <Store>
        <Auth/>
      </Store>
      
    </>
  )
}

export default App
