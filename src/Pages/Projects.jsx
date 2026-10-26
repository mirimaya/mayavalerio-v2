import './Projects.css'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Pengoimage from '../Images/pengo-img.svg'
function Projects() {
    return(
        <>
            <Navbar/>
            <div className='projects-container'>
                <div className='projects1-container'>
                    {/*UPDATE WITH PROPER COMPONENT/PROP STRUCTURE */}
                    <div className='project1'>
                        <div>
                            <figure className='project-imgs'>
                                <img src={Pengoimage} alt='An image of two child mascot characters holding hands with the caption Pengo' decoding='async'></img>
                                <figcaption className='project-captions'>Figbuild 2026</figcaption>
                            </figure>
                        </div>
                        <div className='project-info'>
                            <p>An app interface built with <b>Figma</b> and <b>Figma Make</b> to help overstimulated children communicate through visual graphics with the assistance of mascots Pebble and Puddle.</p>
                            <ul className='badges project-badges'>
                                <li>Designathon Project</li>
                                <li>UX/UI Design</li>
                                <li>Accessible Design</li>
                            </ul>
                            <button className='read-more-btn'><a href='https://devpost.com/software/pengo-tv2f9m' target='_blank' rel='noopener noreferrer'>Read more</a></button>
                        </div>
                    </div>
                    <div>
                        <p className='more-coming'>More projects in the works! Stay tuned ♡</p>
                    </div>
                </div>
                
                

            </div>
            <Footer/>
        </>
    )
}

export default Projects