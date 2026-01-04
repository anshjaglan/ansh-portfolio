import { motion } from "framer-motion"

function CyberGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 cyber-grid opacity-40"
    />
  )
}

export default CyberGrid
