import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import TestSlice from '../features/TestSlice'


const mainStore = configureStore({
    reducer:{
      test:TestSlice
    }
})

const Store = ({children}) => {
  return (
    <Provider store={mainStore}>
        {children}
    </Provider>
  )
}

export default Store