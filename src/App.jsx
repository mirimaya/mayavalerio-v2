import './App.css'
import { Link } from "react-router-dom"
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Catanimation from './Images/home-cat-animation.webm'

//the home page
function App() {
  return (
    <>
      {/*imports the navbar component*/}
      <Navbar/>
    <div className='home-container'>
      {/*Creates a div to store the left-side of the home page*/}
      <div>
        <ul className='home-tagline'>
          <li><p className='home-phrase'>Create Something</p></li>
          <li><p className='main-text'>Beautiful</p></li>
          <li>
            <Link to={'/projects'}>
              <button type='button' className='projects-btn'>See My Work</button>
            </Link>
          </li>
        </ul>
      </div>

      {/*Creates a div to store the right-side of the home page*/}
      <div className='cat-container'>
        <video autoPlay muted loop loading='lazy' decoding='async' src={Catanimation}></video>
      </div>
    </div>

      {/*imports the footer component*/}
      <div className='footer'>
        <Footer/>
      </div>
    </>
  )
}

export default App
