import { useEffect, useState } from 'react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <nav className="navbar navbar-expand-lg fixed-top bw-navbar">
      <div className="container-fluid container-xl px-4">

        {/* Logo */}
        <a className="navbar-brand" href="#home">
          <img
            src="/images/logo-horizontal.png"
            alt="Both Worlds Global"
            className="brand-logo"
          />
        </a>

        {/* Mobile Menu */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bwNav"
          aria-controls="bwNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="bwNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            {/* Home */}
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            {/* About */}
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>

            {/* Services */}
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            {/* Why Us */}
            <li className="nav-item">
              <a className="nav-link" href="#why-us">
                Why Us
              </a>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>

            {/* Light / Dark Mode */}
            {/* Light / Dark Mode Toggle */}
<li className="nav-item ms-lg-2">
  <button
    type="button"
    className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
    onClick={() => setDarkMode(!darkMode)}
    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    aria-pressed={darkMode}
  >
    <span className="theme-toggle-thumb">
      {darkMode ? (
        <i className="bi bi-moon-fill"></i>
      ) : (
        <i className="bi bi-sun-fill"></i>
      )}
    </span>
  </button>
</li>

            {/* Get in Touch */}
            <li className="nav-item">
              <a
                className="btn btn-brand px-4"
                href="#contact"
              >
                Get in Touch
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}