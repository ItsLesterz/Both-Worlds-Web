export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid container-xl px-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <img src="/images/logo-horizontal.png" alt="Both Worlds Global" className="footer-logo" />
          </div>
          <div className="col-lg-7">
            <div className="footer-links justify-content-lg-end">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#why-us">Why Us</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Both Worlds Global. All rights reserved.</div>
      </div>
    </footer>
  )
}
