import { motion } from "framer-motion"
import profile from "../assets/profiletech.png"

function ProfileGlow() {
  return (
    <motion.div
      whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="relative flex items-center justify-center perspective-[1000px]"
    >
      {/* Outer glow */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full
        bg-[#00ff9c]/20 blur-3xl animate-pulse" />

      {/* Neon ring */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full
        border border-[#00ff9c]/50
        shadow-[0_0_60px_rgba(0,255,156,0.6)]" />

      {/* Profile image */}
      <img
        src={profile}
        alt="Profile"
        style={{ objectPosition: "50% 35%" }}

        className="relative w-56 h-full md:w-72 md:h-72 rounded-full
        object-cover border-2 border-[#00ff9c]
        shadow-[0_0_40px_rgba(0,255,156,0.8)]"
      />
    </motion.div>
  )
}

export default ProfileGlow
