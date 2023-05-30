import './hero.css'
function Hero() {
    return (
        <section className="hero__section">
            <div className="hero__content">
                <h1>Your <span>Secure</span> and <span>Supportive</span> Mental Health Community</h1>
                <p>Find solace, support, and strength on our blockchain-powered mental health platform. Join a community that understands and cares about your well-being. Take the first step towards a brighter, healthier future.</p>
                <div className="call_to_actions">
                    <button className='hero__button'>Get Started</button>
                    <button className='documentation__button'>Read Our Documentation</button>
                </div>
            </div>
        </section>
    )
}

export default Hero