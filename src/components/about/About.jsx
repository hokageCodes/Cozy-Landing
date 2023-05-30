import './about.css'
import AboutUs from '../../assets/about.png'

function About() {
    return (
        <section className='about__section'>
            <div className="about__content">
                <img src={AboutUs} alt='' />
                <div className="about__text">
                    <h4>About Us</h4>
                    <h3>Who are we?</h3>
                    <p>At Mental Health Platform, our mission is to provide a safe and supportive space for individuals to take control of their mental health. Our team is passionate about mental health and technology, and we believe that combining the two can lead to meaningful change.</p>
                    <div className="stats__count">
                        <div className="stat">
                            <h4>200+</h4>
                            <p>Registered Therapists</p>
                        </div>
                        <div className="stat">
                            <h4>10k+</h4>
                            <p>Resources Available</p>
                        </div>
                        <div className="stat">
                            <h4>100+</h4>
                            <p>Different Peer Groups</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About