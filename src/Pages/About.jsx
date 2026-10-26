import './About.css'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Mayaimage from '../Images/maya-img.svg'

function About() {
    return(
        <>
            <Navbar/>
            <div className='about-container'>
                <div className='about1-container'>
                    <div className='about1-polaroid'>
                        <figure>
                            <img src={Mayaimage} alt='An image of myself in a polaroid!' decoding='async'></img>
                            <figcaption className='me-caption'>Maya Valerio</figcaption>
                        </figure>
                    </div>

                    <div className='about1-paras'>
                        <ul>
                            <li><p className='titles'>Hi, I'm Maya!</p></li>
                            <li><p>
                                I'm a student at the University of Central Florida studying Digital 
                                Media on the Web and Interactive Media track with a minor in Computer 
                                Science. I studied at Lake-Sumter State College during my junior and 
                                senior year of high school and graduated with an Associate's Degree 
                                in General Studies—after which I transferred to UCF in 2025.
                            </p></li>
                            <li><p>
                                I'm passionate about learning more about front-end and back-end development; 
                                my goal is to become a full-stack website developer. I love learning and 
                                improving my skills as a web developer and designer. Thanks for checking out my
                                page!
                            </p></li>
                            <li><p>♡ Connect and chat with me on my socials!</p></li>
                            <div className = 'about1-chatlinks'>
                                <div><li><a href='https://www.linkedin.com/in/mayaivalerio/' className='clinks' target='_blank' rel='noopener noreferrer'>Linkedin</a></li></div>
                                <div><li><p>|</p></li></div>
                                <div><li><a href='https://github.com/mirimaya' className='clinks' target='_blank' rel='noopener noreferrer'>Github</a></li></div>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='experience-container'>
                    <p className='titles'>Experience</p>
                    <div className='experience-list'>
                        <p className='experiences-titles'><b>Website Developer - Knights Design Interactive</b></p>
                        <ul className='badges'>
                            <li>Sept. 2026 - Present</li>
                            <li>Orlando, FL</li>
                        </ul>
                        <ul className='bullets'>
                            <li><p>Collaborate within a team of 6 designers and developers</p></li>
                            <li><p>Design and develop a student organization website and member dashboard</p></li>
                            <li><p>Develop a design system and low- and high-fidelity prototypes using Figma</p></li>
                        </ul>
                    </div>
                    <div className='experience-list'>
                        <p className='experiences-titles'><b>Marketing Officer - Knights Design Interactive</b></p>
                        <ul className='badges'>
                            <li>Aug. 2026 - Present</li>
                            <li>Orlando, FL</li>
                        </ul>
                        <ul className='bullets'>
                            <li><p>Work in a 3-person team to manage marketing tasks whilst 
                                maintaining consistent branding
                            </p></li>
                            <li><p>Design and create digital content for
                                <a href='https://www.instagram.com/kdi.club/' target='_blank' rel='noopener noreferrer'> Instagram </a> 
                                and 
                                <a href='https://www.linkedin.com/company/knights-design-interactive/' target='_blank' rel='noopener noreferrer'> Linkedin </a> 
                                to promote engagement and organization awareness
                            </p></li>
                            <li><p>Collaborate cross-functionally with multiple teams to organize and 
                                execute promotional campaigns
                            </p></li>
                        </ul>
                    </div>
                    <div className='experience-list'>
                        <p className='experiences-titles'><b>Workshop Director - Digital Innovation Group @ UCF</b></p>
                        <ul className='badges'>
                            <li>Mar. 2026 - Aug. 2026</li>
                            <li>Orlando, FL</li>
                        </ul>
                        <ul className='bullets'>
                            <li><p>Organize and direct hands-on, interactive workshops for students to understand various digital media technologies</p></li>
                            <li><p>Manage logistics including scheduling, communication between teams, and setup to ensure workshops run efficiently</p></li>
                        </ul>
                    </div>
                    <div className='experience-list'>
                        <p className='experiences-titles'><b>Barista & Cashier - Idrink Boba & Sandwiches</b></p>
                        <ul className='badges'>
                            <li>Aug. 2024 - Present</li>
                            <li>Minneola, FL</li>
                        </ul>
                        <ul className='bullets'>
                            <li><p>Deliver friendly, hospitable customer service and prepare drinks efficiently in a high-volume environment</p></li>
                            <li><p>Manage cash register operations, balance daily transations, and ensure smooth closing procedures</p></li>
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
                                <li><p>Figma Motion</p></li>
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

export default About