import { Link } from "react-router-dom"
import './Navbar.css'
import Mayaslogo from '../Images/navbar-logo.svg'
import Mayasresume from '../assets/maya-resume-oct2026.pdf'

function Navbar() {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }
    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    return(
        <>
            <nav>
                <ul className='sidebar'>
                    <li onClick={hideSidebar}><a href="#" className='nlinks'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#332A2B"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <li><Link to={"/"} className='nlinks'>Home</Link></li>
                    <li><Link to={"/about"} className='nlinks'>About Me</Link></li>
                    <li><Link to={"/projects"} className='nlinks'>Projects</Link></li>
                    <li><a href={Mayasresume} className='nlinks' target='_blank' rel='noopener noreferrer'>Resume</a></li>
                </ul>
                <ul className='nav-links'>
                    <li><img src={Mayaslogo} alt="Maya Valerio's Logo" className='nav-logo nlinks' height="60"></img></li>
                    <li className='hideOnMobile'><Link to={"/"} className='nlinks hoverlinks'>Home</Link></li>
                    <li className='hideOnMobile'><Link to={"/about"} className='nlinks hoverlinks'>About Me</Link></li>
                    <li className='hideOnMobile'><Link to={"/projects"} className='nlinks hoverlinks'>Projects</Link></li>
                    <li className='hideOnMobile'><a href={Mayasresume} className='nlinks hoverlinks' target='_blank' rel='noopener noreferrer'>Resume</a></li>
                    <li className='menu-btn' onClick={showSidebar}><a href="#" className='nlinks'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#332A2B"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                </ul>
            </nav>           
        </>
    )
}
export default Navbar