import { useState } from 'react'
import Bio from './components/Bio'
import Highlights from './components/Highlights'
import NavBar from './components/NavBar'
import './index.css'
import Footer from './components/Footer'
function App() {

  return (
    <div className="bg-gray-50 h-screen w-full font-lato">
      <div className="bg-white mx-16 h-screen">
        <NavBar />
        <div className="flex">
          <Bio />
          <Highlights />
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
