import './features.css'
import Feature1 from '../../assets/feature1.png'
import Feature2 from '../../assets/feature2.png'
import Feature3 from '../../assets/feature3.png'
function Features() {
    return (
        <section className="features__container">
            <div className="features__heading">
                <h2>Our Amazing Features</h2>
                <p>Discover a range of powerful features designed to support and uplift your mental health journey.</p>
            </div>
            <div className="features__list">
                <div className="list">
                    <img src={Feature1} alt="" />
                    <div className="feature_list_content">
                        <h3>Smart Recommendations & Self-Care Resources</h3>
                        <p>Our platform provides personalized support and resources based on your individual needs and challenges. We use smart recommendations and algorithms to provide you with tailored recommendations for mental health resources and activities that may be helpful for you.</p>
                        <button className='nav__button'>Get Started</button>
                    </div>
                </div>
                <div className="list">
                    <div className="feature_list_content">
                        <h3>Peer Support & Licensed Therapists</h3>
                        <p>Our platform provides a community of like-minded individuals who are going through similar mental health challenges. You can connect with peers and participate in group chats or one-on-one conversations to provide and receive support. We also provides a directory of licensed therapists and mental health professionals that you can connect with for therapy sessions.</p>
                        <button className='nav__button'>Get Started</button>
                    </div>
                    <img src={Feature2} alt="" />
                </div>
                <div className="list">
                    <img src={Feature3} alt="" />
                    <div className="feature_list_content">
                        <h3>Secure Communication</h3>
                        <p>Our platform provides personalized support and resources based on your individual needs and challenges. We use smart recommendations and algorithms to provide you with tailored recommendations for mental health resources and activities that may be helpful for you.</p>
                        <button className='nav__button'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features