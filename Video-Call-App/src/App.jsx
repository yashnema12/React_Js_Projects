import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VideoRoom from './Pages/VideoRoom'
import Home from './Pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<VideoRoom/>}/>

    </Routes>
  )
}

export default App