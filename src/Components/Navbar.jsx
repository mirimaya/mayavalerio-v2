import { Link } from "react-router-dom"
import './Navbar.css'
import Mayaslogo from '../Images/navbar-logo.svg'
import Mayasresume from '../assets/maya-resume-sept26.pdf'

function Navbar() {
    return(
        <>
            <nav class='navbar-container'>
                <div className='nav-logo'>
                    <img src={Mayaslogo} alt="Maya Valerio's Logo"></img>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to={"/"} className='nlinks'>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className='nlinks'>About Me</Link>
                    </li>
                    <li>
                        <Link to={"/projects"} className='nlinks'>Projects</Link>
                    </li>
                    <li>
                        <a href={Mayasresume} className='nlinks' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </li>
                </ul>
            </nav>           
        </>
    )
}

export default Navbar