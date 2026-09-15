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
                                <img src={Pengoimage} alt='An image of two child mascot characters holding hands with the caption Pengo' loading='lazy' decoding='async'></img>
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
                
                <div className='projects2-container'>
                    <p className='projects-title'>Experience</p>
                    <div className='kdi-marketing experience-list'>
                        <p className='experiences-titles'><b>Marketing Officer - Knights Design Interactive</b></p>
                        <ul className='badges'>
                            <li>Aug. 2026 - Present</li>
                            <li>Student Organization</li>
                        </ul>
                        <ul className='bullets'>
                            <li><p>Work in a 3-person team to efficiently manage marketing tasks whilst 
                                maintaining consistent branding.
                            </p></li>
                            <li><p>Design and create digital content for
                                <a href='https://www.instagram.com/kdi.club/' target='_blank' rel='noopener noreferrer'> Instagram </a> 
                                and 
                                <a href='https://www.linkedin.com/company/knights-design-interactive/' target='_blank' rel='noopener noreferrer'> Linkedin </a> 
                                to promote engagement and organization awareness.
                            </p></li>
                            <li><p>Collaborate cross-functionally with multiple teams to organize and 
                                execute promotional campaigns.
                            </p></li>
                        </ul>
                    </div>
                    <div className='dig-workshops experience-list'>
                        <p className='experiences-titles'><b>Workshop Director - Digital Innovation Group @ UCF</b></p>
                        <ul className='badges'>
                            <li>Mar. 2026 - Aug. 2026</li>
                            <li>Student Organization</li>
                        </ul>
                        <ul className='bullets'>
                            <li><p>Organize and direct hands-on, interactive workshops for students to understand various digital media technologies.</p></li>
                            <li><p>Design and create clear, understandable instructional materials, visual aids, and lesson plans.</p></li>
                            <li><p>Manage logistics including scheduling, communication between teams, and setup to ensure workshops run efficiently on the correct schedule.</p></li>
                        </ul>
                    </div>
                    <div className='idrink-barista experience-list'>
                        <p className='experiences-titles'><b>Barista & Cashier - Idrink Boba & Sandwiches</b></p>
                        <ul className='badges'>
                            <li>Aug. 2024 - Present</li>
                            <li>Part-Time Work</li>
                        </ul>
                        <ul className='bullets'>
                            <li><p>Deliver friendly, hospitable customer service and prepare drinks efficiently in a high-volume environment.</p></li>
                            <li><p>Collaborate closely with coworkers to coordinate drink and food preparation, order-taking, and orders completed.</p></li>
                            <li><p>Manage cash register operations, balance daily transations, and ensure smooth closing procedures.</p></li>
                        </ul>
                    </div>
                    <div className='projects-skills'>
                        <div>
                            <p><b>Skills:</b></p>
                        </div>
                        <div>
                            <ul className='badges'>
                                <li><p>HTML</p></li>
                                <li><p>CSS</p></li>
                                <li><p>JavaScript</p></li>
                                <li><p>React.js</p></li>
                                <li><p>Figma</p></li>
                                <li><p>FigmaMotion</p></li>
                                <li><p>Adobe Photoshop</p></li>
                                <li><p>Adobe Illustrator</p></li>
                                <li><p>Adobe Express</p></li>
                                <li><p>Canva</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Projects