import { useEffect, useState } from "react"

function Navbar() {
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)

  const links = ["Home", "Skills", "Projects", "Experience", "Contact"]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md
      ${scrolled
        ? "bg-black/70 shadow-[0_0_30px_rgba(0,255,156,0.3)]"
        : "bg-black/40"}
      border-b border-white/5`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-[#00ff9c]">
          ANSH JAGLAN
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map(link => (
            <li key={link} className="relative">
              <a
                href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className="group transition"
              >
                <span
                  className={`${
                    active === link
                      ? "text-[#00ff9c]"
                      : "group-hover:text-[#00ff9c]"
                  }`}
                >
                  {link}
                </span>

                {/* Neon underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full
                  bg-[#00ff9c] origin-left transition-transform
                  ${active === link
                    ? "scale-x-100 shadow-[0_0_12px_rgba(0,255,156,0.9)]"
                    : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
