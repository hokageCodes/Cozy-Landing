import './footer.css'
import { RiFacebookFill } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { RiTwitterFill } from 'react-icons/ri'
import { RiLinkedinBoxFill } from 'react-icons/ri'

function Footer() {
    return (
        <footer>
            <div className="footer__logo">
                    <h2>CozyCove</h2>
                </div>
                <div className="footer__links">
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>How it works</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="social__links">
                    <RiFacebookFill className='social__icon' />
                    <RiInstagramLine className='social__icon' />
                    <RiTwitterFill className='social__icon' />
                    <RiLinkedinBoxFill className='social__icon' />
                </div>
        </footer>
    )
}

export default Footer