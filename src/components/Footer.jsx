function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-white/5 text-center text-gray-500">
      <span className="text-[#00ff9c] font-semibold">ANSH JAGLAN</span> ©{" "}
      {new Date().getFullYear()} — Built with React ⚛️
    </footer>
  )
}

export default Footer
