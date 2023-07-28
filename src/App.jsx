import { BrowserRouter } from "react-router-dom"
// Code above is for routing
import { About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative bg-hero-pattern bg-cover
        bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
