import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <About />
      </main>

      <Footer />
    </div>
  )
}

export default App
