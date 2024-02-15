import Navbar from "./components/Navbar"
import './App.css'
// import Footer from "./components/Footer"
import Hero from "./components/Hero"
import About from "./components/About"
import WhyChooseMe from "./components/WhyChooseMe"
import CallToAction from "./components/CallToAction"
import CountdownTimer from "./components/CountdownTimer"
import SlideInForm from "./components/SlideInForm"
import Testimonial from "./components/Testimonial"


const App = () => {
  return (
    <div className="relative px-2">
      <Navbar/>
      <Hero/>
      <About/>
      <WhyChooseMe/>
      <Testimonial/>
      <SlideInForm/>
      <CallToAction/>
      <CountdownTimer/>
    </div>
  )
}

export default App
