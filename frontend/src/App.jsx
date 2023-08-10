import Bio from './components/Bio'
import Highlights from './components/Highlights'
import NavBar from './components/NavBar'
import './index.css'

function App() {
  return (
    <div className="bg-gray-50 h-full w-full font-lato">
      <div className="bg-white mx-16 h-full">
        <NavBar />
        <div className="flex">
          <Bio />
          <Highlights />
        </div>
      </div>
    </div>
  )
}

export default App
