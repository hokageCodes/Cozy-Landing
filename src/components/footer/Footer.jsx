import './footer.css'
import { RiFacebookFill } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { RiTwitterFill } from 'react-icons/ri'
import { RiLinkedinBoxFill } from 'react-icons/ri'

function Footer() {
    return (
        <>        
            <footer>
                    <div className="footer__logo">
                        <h2>CozyCove</h2>
                    </div>
                    <div>
                        <ul className="footer__links">
                            <li>Home</li>
                            <li>Features</li>
                            <li>About Us</li>
                            <li>How it works</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="social__links__footer">
                        <RiFacebookFill className='social__icon__footer' />
                        <RiInstagramLine className='social__icon__footer' />
                        <RiTwitterFill className='social__icon__footer' />
                        <RiLinkedinBoxFill className='social__icon__footer' />
                    </div>
            </footer>
            <hr />
            <div className='footer-bottom'>
                <ul className="footer-bottom-links">
                    <li>2023 CozyCove. All right reserved.</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies Settings</li>
                </ul>
            </div>
        </>
    )
}

export default Footer