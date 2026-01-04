import { motion } from "framer-motion"

const experiences = [
  {
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    duration: "Oct 2024 – Nov 2024",
    points: [
      "Worked on web development fundamentals and responsive layouts",
      "Built mini-projects using HTML, CSS, and JavaScript",
      "Received outstanding remarks for professionalism and technical skills",
    ],
  },
  {
    role: "Web Developer Project Intern",
    company: "Codec Technologies",
    duration: "Jun 2025 – Aug 2025",
    points: [
      "Worked on real-world full-stack web applications",
      "Collaborated on business-focused IT solutions",
      "Learned agile development practices and backend systems",
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-md rounded-xl p-6
              border border-gray-800
              hover:border-[#00ff9c]
              hover:shadow-[0_0_40px_rgba(0,255,156,0.3)]
              transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-xl font-semibold text-[#00ff9c]">
                  {exp.role}
                </h3>
                <span className="text-gray-400 text-sm">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-300 mt-2">
                {exp.company}
              </p>

              <ul className="mt-4 space-y-2 text-gray-400">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#00ff9c]">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
