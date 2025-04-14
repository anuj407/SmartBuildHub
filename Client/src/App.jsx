import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App