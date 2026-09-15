import './Footer.css'

function Footer() {
    return(
        <>
            <footer className='footer-container'>
                <div className=''>
                    <ul className='footer-links'>
                        <li>
                            <a href='mailto:mayaivalerio@icloud.com' className='flinks' target='_blank' rel='noopener noreferrer'>Email</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/mayaivalerio/' className='flinks' target='_blank' rel='noopener noreferrer'>Linkedin</a>
                        </li>
                        <li>
                            <a href='https://github.com/mirimaya' className='flinks' target='_blank' rel='noopener noreferrer'>GitHub</a>
                        </li>
                    </ul>
                </div>
                <div className='copyright'>
                    <p>&copy; Copyright Maya Valerio. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer