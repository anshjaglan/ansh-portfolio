import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import ProfileGlow from "./ProfileGlow"

function Hero() {
  const [text] = useTypewriter({
    words: ["Engineer", "Developer", "Problem Solver"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-30
        bg-[linear-gradient(rgba(0,255,156,0.08)_1px,transparent_1px),
        linear-gradient(90deg,rgba(0,255,156,0.08)_1px,transparent_1px)]
        bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I’m{" "}
            <span className="text-[#00ff9c]">Ansh Jaglan</span>
          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
            Full-Stack{" "}
            <span className="text-[#00ff9c]">
              {text}
              <Cursor cursorStyle="_" />
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            Third-year Computer Science undergraduate passionate about building
            scalable, modern web applications using React, Node.js, and
            full-stack technologies.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 rounded-full
            bg-[#00ff9c] text-black font-semibold
            hover:shadow-[0_0_30px_rgba(0,255,156,0.8)]
            transition"
          >
            Let’s Connect
          </a>

            <a
    href="/Ansh Jaglan Resume (1).pdf"
    download
    className="
px-6 py-3 rounded-full
border border-[#00ff9c]
text-[#00ff9c]
transition-all duration-300
hover:bg-[#00ff9c] hover:text-black
hover:shadow-[0_0_25px_rgba(0,255,156,0.6)]
active:scale-95
"
  >
    Download Resume
  </a>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <ProfileGlow />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
