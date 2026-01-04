import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          About <span className="text-[#00ff9c]">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/70 backdrop-blur-md rounded-xl p-8
          border border-gray-800
          hover:border-[#00ff9c]
          hover:shadow-[0_0_40px_rgba(0,255,156,0.3)]
          transition-all"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m <span className="text-[#00ff9c] font-semibold">Ansh Jaglan</span>,
            a <span className="text-white font-semibold">third-year Computer Science undergraduate</span>
            with a strong interest in full-stack web development and modern
            software engineering practices.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I enjoy building clean, scalable, and user-focused applications
            using technologies like <span className="text-white">React, Node.js, Express,
            MongoDB, and PostgreSQL</span>. I’ve worked on real-world projects
            including social media dashboards and real-time applications, and
            I’m constantly improving my problem-solving and DSA skills.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Currently, I’m seeking <span className="text-white">internship and entry-level
            software engineering opportunities</span> where I can learn from
            experienced developers and contribute to meaningful products.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
