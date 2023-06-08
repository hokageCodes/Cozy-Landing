import Hero from '../hero/Hero'
import './navbar.css'

function Navbar() {
    return (
        <header className="header__container">
            <nav className="nav__container">
                <div className="logo">
                    <h2>CozyCove</h2>
                </div>
                <div className="nav__links">
                    <ul>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>How it works</li>
                        <li>FAQ</li>
                        <button className='nav__button'>Get Started</button>
                    </ul>
                </div>
            </nav>
            <Hero />
        </header>
    )
}

export default Navbar