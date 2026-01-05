import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    // 🛡️ Honeypot spam protection
    const honeypot = formRef.current.company.value
    if (honeypot) {
      // Bot detected – silently block
      return
    }

    setStatus("sending")

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
  (result) => {
    console.log("EmailJS SUCCESS:", result)
    setStatus("success")
    formRef.current.reset()
  },
  (error) => {
    console.error("EmailJS ERROR:", error)
    setStatus("error")
  }
)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.08),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Contact <span className="text-[#00ff9c]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            <p className="mb-8 max-w-md">
              Interested in internships, projects, or collaborations?
              Feel free to reach out — I’d love to connect.
            </p>

            <ul className="space-y-5">
  {/* Email */}
  <li>
    <span className="text-[#00ff9c]">▹</span>{" "}
    Email:{" "}
    <a
      href="mailto:anshjaglan2005@gmail.com"
      className="text-white hover:text-[#00ff9c] transition"
    >
      anshjaglan2005@gmail.com
    </a>
  </li>

  {/* LinkedIn */}
  <li>
    <span className="text-[#00ff9c]">▹</span>{" "}
    LinkedIn:{" "}
    <a
      href="https://www.linkedin.com/in/anshjaglan/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#00ff9c] transition"
    >
     anshjaglan
    </a>
  </li>

  {/* GitHub */}
  <li>
    <span className="text-[#00ff9c]">▹</span>{" "}
    GitHub:{" "}
    <a
      href="https://github.com/anshjaglan"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#00ff9c] transition"
    >
      anshjaglan
    </a>
  </li>

  {/* Instagram */}
  <li>
    <span className="text-[#00ff9c]">▹</span>{" "}
    Instagram:{" "}
    <a
      href="https://www.instagram.com/anshjaglan_05"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#00ff9c] transition"
    >
      @anshjaglan_05
    </a>
  </li>
</ul>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 backdrop-blur-md rounded-xl p-8
            border border-gray-800
            hover:border-[#00ff9c]
            hover:shadow-[0_0_40px_rgba(0,255,156,0.3)]
            transition-all space-y-6"
          >
            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg
                bg-gray-800 border border-gray-700
                text-white placeholder-gray-500
                focus:outline-none focus:border-[#00ff9c]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="john@email.com"
                className="w-full px-4 py-3 rounded-lg
                bg-gray-800 border border-gray-700
                text-white placeholder-gray-500
                focus:outline-none focus:border-[#00ff9c]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg
                bg-gray-800 border border-gray-700
                text-white placeholder-gray-500
                focus:outline-none focus:border-[#00ff9c]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg
              bg-[#00ff9c] text-black font-semibold
              hover:shadow-[0_0_30px_rgba(0,255,156,0.7)]
              transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
