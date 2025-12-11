import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Scroll state

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Neon link styles
  const navLink =
    "relative inline-block pb-1 text-white transition-all duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-0 " +
    "after:w-full after:h-[2px] after:bg-[#00f0ff] " +
    "after:shadow-[0_0_10px_#00f0ff,0_0_20px_#00f0ff] " +
    "after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 " +
    "hover:after:scale-x-100 hover:after:origin-left " +
    "hover:text-[#00f0ff] hover:[text-shadow:0_0_5px_#00f0ff,0_0_10px_#00f0ff]";

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[9999] transition-all duration-300
        ${scrolled ? "bg-black/30 backdrop-blur-xl shadow-xl h-[10vh]" : "h-[20vh] bg-transparent"}
      `}
    >
      <div
        className={`
          w-full px-6 lg:px-20 flex items-center justify-between transition-all duration-300
          ${scrolled ? "h-[10vh]" : "h-[20vh]"}
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className={`transition-all duration-300 max-w-[35vh] ml-0
              ${scrolled ? "max-w-[18vh]" : "max-w-[35vh]"}
            `}
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-7 h-0.5 bg-white"></span>
          <span className="w-7 h-0.5 bg-white"></span>
          <span className="w-7 h-0.5 bg-white"></span>
        </button>

        {/* Menu */}
        <div
          className={`
            ${open ? "right-0" : "-right-full"}
            lg:right-0 fixed top-[12vh] lg:static
            w-[70%] lg:w-auto h-screen lg:h-auto
            bg-black/70 lg:bg-transparent p-8 lg:p-0
            transition-all duration-300
          `}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-12 text-white">

            <li>
              <Link className={navLink} to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link className={navLink} to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              <button
                className={`flex items-center gap-1 ${navLink}`}
                onClick={() => setDropdown(!dropdown)}
                style={{ fontFamily: "DoppioOne, sans-serif" }}
              >
                Services ▾
              </button>

              <ul
                className={`
                  absolute left-[-60px] mt-2 w-80 bg-white/10 backdrop-blur-xl
                  border border-white/20 rounded-xl py-2 z-[999]
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300
                  ${dropdown ? "opacity-100 visible" : ""}
                `}
              >
                <li>
                  <Link
                    to="/ai-solutions"
                    className={`block px-4 py-2 rounded-lg ${navLink}`}
                    onClick={() => { setOpen(false); setDropdown(false); }}
                  >
                    AI Solutions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cloud-consulting"
                    className={`block px-4 py-2 rounded-lg ${navLink}`}
                    onClick={() => { setOpen(false); setDropdown(false); }}
                  >
                    Cloud Consulting Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cloud-implementation"
                    className={`block px-4 py-2 rounded-lg ${navLink}`}
                    onClick={() => { setOpen(false); setDropdown(false); }}
                  >
                    Cloud Implementation Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/managed-cloud"
                    className={`block px-4 py-2 rounded-lg ${navLink}`}
                    onClick={() => { setOpen(false); setDropdown(false); }}
                  >
                    Managed Cloud & IT Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/network-design"
                    className={`block px-4 py-2 rounded-lg ${navLink}`}
                    onClick={() => { setOpen(false); setDropdown(false); }}
                  >
                    Network Design & Infrastructure
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                className={navLink}
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
