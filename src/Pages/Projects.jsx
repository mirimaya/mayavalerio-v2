import './Projects.css'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Pengoimage from '../Images/pengo-img.svg'
import Kdiimage from '../Images/kdi-website-img.svg'
import Portimage from '../Images/port-img.svg'

function Projects() {
    return(
        <>
            <Navbar/>

{/*UPDATE WITH PROPER COMPONENT/PROP STRUCTURE */}
        <div className='projects-container'>
            <div className='polaroid-cards'>
                <div className='project'>
                    <div className='project-img'>
                        <figure>
                            <img src={Kdiimage} alt='An image of two children mascot characters holding hands with the caption Pengo'></img>
                            <figcaption>KDI Website</figcaption>
                        </figure>
                    </div>
                    <div className='project-details'>
                        <p>Mid-Fidelity prototypes designed with <b>Figma</b> for the Knights Design Interactive student organization website.</p>
                        <ul className='project-badges'>
                            <li>UX/UI Design</li>
                            <li>Site Mapping</li>
                        </ul>
                        <button className='read-more-btn'><a href='https://www.figma.com/design/eqx8LIX4XakviOkmlTrOlS/Portfolio?node-id=1-2' target='_blank' rel='noopener noreferrer'>View Figma</a></button>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-img'>
                        <figure>
                            <img src={Portimage} alt='An image of two children mascot characters holding hands with the caption Pengo'></img>
                            <figcaption>KDI Website</figcaption>
                        </figure>
                    </div>
                    <div className='project-details'>
                        <p>You're looking at it! Designed in <b>Figma</b>, animated with <b>Figma Motion</b>, and built with <b>React.js</b>. Communicates my skills and experience.</p>
                        <ul className='project-badges'>
                            <li>Front-End Development</li>
                            <li>UX/UI Design</li>
                            <li>Responsive Design</li>
                        </ul>
                        <button className='read-more-btn'><a href='https://www.figma.com/design/eqx8LIX4XakviOkmlTrOlS/Portfolio?node-id=1-3' target='_blank' rel='noopener noreferrer'>View Figma</a></button>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-img'>
                        <figure>
                            <img src={Pengoimage} alt='An image of two children mascot characters holding hands with the caption Pengo'></img>
                            <figcaption>Pengo</figcaption>
                        </figure>
                    </div>
                    <div className='project-details'>
                        <p>An app interface built with <b>Figma</b> and <b>Figma Make</b> to help overstimulated children communicate through visual graphics with the assistance of mascots Pebble and Puddle.</p>
                        <ul className='project-badges'>
                            <li>Designathon Project</li>
                            <li>UX/UI Design</li>
                            <li>Accessible Design</li>
                        </ul>
                        <button className='read-more-btn'><a href='https://www.figma.com/design/eqx8LIX4XakviOkmlTrOlS/Portfolio?node-id=1-2' target='_blank' rel='noopener noreferrer'>Case Study</a></button>
                    </div>
                </div>
            </div>
            <p className='stay-tuned'>More projects in the works! Stay tuned ♡</p>
        </div>

        {/*
            <div className='projects-container'>
            <div className='projects1-container'>
            <div className='project'>
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
                    <div className='project'>
                        <div>
                            <figure className='project-imgs'>
                                <img src={Pengoimage} alt='An image of two child mascot characters holding hands with the caption Pengo' decoding='async'></img>
                                <figcaption className='project-captions'>KDI Website Lo-Fis</figcaption>
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
         */}
            <Footer/>
        </>
    )
}

export default Projects