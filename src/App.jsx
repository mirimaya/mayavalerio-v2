import './App.css'
import { Link } from "react-router-dom"
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Catanimation from './Images/home-cat-animation.webm'
import Catstatic from './Images/home-cat-static.svg'

//the home page
function App() {
   const ua = navigator.userAgent

  const isSafari =
    /Safari/i.test(ua) &&
    !/Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Brave|Android/i.test(ua)

  return (
    <>
      <div className='app-container'>  
        {/*imports the navbar component*/}
        <Navbar/>
        <div className='app-content-container'>
          {/*Creates a div to store the left-side of the home page*/}
          <div>
            <ul className='home-tagline'>
              <li><p className='create-something-text'>Create Something</p></li>
              <li><p className='beautiful-text'>Beautiful</p></li>
              <li><Link to={'/projects'}><button type='button' className='projects-btn'>See My Work</button></Link></li>
            </ul>
          </div>

        {/*Creates a div to store the right-side of the home page*/}
        <div className='cat-container'>
          {isSafari ? (
            <img src={Catstatic} alt='A static image of a cat drawing.'></img>
          ) : (
            <video autoPlay muted loop loading='lazy' decoding='async' src={Catanimation}></video>
          )}
        </div>
        </div>

        {/*imports the footer component*/}
        <Footer/>
      </div>
    </>
  )
}

export default App
