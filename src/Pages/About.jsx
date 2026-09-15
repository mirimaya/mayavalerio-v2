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
                            <img src={Mayaimage} alt='An image of myself in a polaroid!' loading='lazy' decoding='async'></img>
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

                <div className='about2-container'>
                    <div className='about2-paras'>
                        <ul>
                            <li><p className='about2-title'>My Journey So Far...</p></li>
                            <li><p>
                                When I was younger, I had no idea what I wanted to pursue as my career 
                                in the future. I was always a very creative girl; I loved to make digital 
                                art & had a lot of fun with video editing—specifically motion graphics. 
                                Eventually, I had graduated from high school & my state college, but I was 
                                still unsure as to what my future looked like. I could see my end goal; a 
                                successful career that would allow me to take care of my cats, but the path of 
                                how to get there was very fuzzy.
                            </p></li>
                            <li><p>
                                When I was applying for my transfer to UCF, I planned to major in business. 
                                My mother was not happy with my choice. She knew I was only choosing business 
                                because I didn't know what else to do. With the help of my mother, we sat down 
                                together and went through UCF's long list of majors, and I took a leap of faith 
                                and chose the Digital Media program at UCF Downtown. I ended up falling in love 
                                with the program &lt;3
                            </p></li>
                            <li><p>
                                During my first year at UCF, I learned that I was passionate about both 
                                front-end and back-end website development, and I decided to take on a Computer 
                                Science minor to learn more about computers and further my skills as a programmer.
                                Currently, I'm in my second year, and I am working to improve my skills in UX/UI 
                                design, front-end development, and back-end development every day. My goal is to 
                                be able to create a project that works as beautifully as it looks!
                            </p></li>
                        </ul>
                    </div>
                    <div className='about2-polaroids'>
                        <figure className='lmhs-img'>
                            <img src={Mayalmhsgrad} alt='An image of myself at my graduation from high school.' loading='lazy' decoding='async'></img>
                            <figcaption className='grad-captions'>Lake Minneola</figcaption>
                        </figure>
                        <figure className='lssc-img'>
                            <img src={Mayalsscgrad} alt='An image of myself at my graduation from state college.' loading='lazy' decoding='async'></img>
                            <figcaption className='grad-captions'>Lake-Sumter</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About