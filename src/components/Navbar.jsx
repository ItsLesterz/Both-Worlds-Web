export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bw-navbar">
      <div className="container-fluid container-xl px-4">
        <a className="navbar-brand" href="#home">
          <img src="/images/logo-horizontal.png" alt="Both Worlds Global" className="brand-logo" />
        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#bwNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="bwNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#why-us">Why Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
            <li className="nav-item ms-lg-2"><a className="btn btn-brand px-4" href="#contact">Get in Touch</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
