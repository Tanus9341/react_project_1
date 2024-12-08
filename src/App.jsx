
import FeatureSection from './component/FeatureSection.jsx'
import Footer from './component/footer.jsx'
import HeroSection from './component/HeroSection.jsx'
import Navbar from './component/navbar.jsx'
import Price from './component/price.jsx'
import Testimonial from './component/Testimonial.jsx'
import WorkFlow from './component/WorkFlow.jsx'


function App() {
  return (
    <>
  <Navbar />
  <div className="max-w-7xl mx-auto pt-20 px-6">
  <HeroSection />
  <FeatureSection />
  <WorkFlow />
  <Price/>
  <Testimonial/>
  <Footer />
 

  </div>
 
</>
  )
}
export default App
