import { motion } from "framer-motion"

const projects = [
  {
    title: "Social Sight",
    description:
      "A full-stack social media dashboard with analytics, post scheduling, and secure JWT authentication.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    link: "#",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat platform using Socket.IO with authentication, online tracking, and secure messaging.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    link: "#",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-md rounded-xl p-6
              border border-gray-800
              hover:border-[#00ff9c]
              hover:shadow-[0_0_45px_rgba(0,255,156,0.35)]
              transition-all"
            >
              <h3 className="text-xl font-semibold text-[#00ff9c]">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <a
                href={project.link}
                className="inline-block mt-6 text-[#00ff9c] hover:underline"
              >
                View Project →
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
