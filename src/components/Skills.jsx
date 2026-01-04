import { motion } from "framer-motion"

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React"],
  Backend: ["Node.js", "Express.js"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  Other: ["Git", "GitHub", "DSA", "DBMS"],
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-md rounded-xl p-6
              border border-gray-800
              hover:border-[#00ff9c]
              hover:shadow-[0_0_35px_rgba(0,255,156,0.3)]
              transition-all"
            >
              <h3 className="text-lg font-semibold text-[#00ff9c] mb-4">
                {category}
              </h3>

              <ul className="space-y-2 text-gray-300">
                {items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c]" />
                    {skill}
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

export default Skills
