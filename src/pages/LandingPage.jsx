import Navbar from '../components/Navbar/Navbar'
import About from '../components/about/About'
import Community from '../components/community/Community'
import Features from '../components/features/Features'
import Footer from '../components/footer/Footer'
import How from '../components/howitworks/How'
function LandingPage() {
    return (
        <div>
            <Navbar />
            <Features />
            <About />
            <How />
            <Community/>
            <Footer />
        </div>
    )
}

export default LandingPage