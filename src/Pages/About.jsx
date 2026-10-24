import './About.css'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Mayaimage from '../Images/maya-img.svg'
import Mayalmhsgrad from '../Images/lmhs-grad-img.svg'
import Mayalsscgrad from '../Images/lssc-grad-img.svg'

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
                            <li><p className='about1-title'>Hi, I'm Maya!</p></li>
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
            </div>
            <Footer/>
        </>
    )
}

export default About