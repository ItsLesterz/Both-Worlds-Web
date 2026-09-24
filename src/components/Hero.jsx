export default function Hero() {
  const values = [
    ['bi-people', 'Global Talent', 'Access skilled professionals ready to support your business.'],
    ['bi-graph-up-arrow', 'Business Growth', 'Flexible solutions designed to scale with your company.'],
    ['bi-shield-check', 'Reliable Support', 'Dedicated teams focused on quality and consistency.'],
  ]

  return (
    <section id="home" className="hero-section">
      <div className="container-fluid container-xl px-4">
        <div className="row align-items-center hero-main g-5">
          <div className="col-lg-6">
            <div className="hero-kicker">PEOPLE <span>•</span> SOLUTIONS <span>•</span> A BRIGHTER TOMORROW</div>
            <h1 className="hero-title">
              Connecting Businesses With the <span>Talent They Need to Grow.</span>
            </h1>
            <p className="hero-description">
              Both Worlds Global helps businesses scale through reliable nearshore and offshore support solutions.
              We connect companies with skilled professionals who become an extension of their team.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#contact" className="btn btn-brand btn-lg px-4">Get in Touch <i className="bi bi-arrow-right ms-2"></i></a>
              <a href="#services" className="btn btn-outline-clean btn-lg px-4">Explore Our Services</a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-art">
              <img src="/images/brand-icon.png" alt="Both Worlds Global globe icon" className="hero-icon" />
              <div className="hero-callout">
                <span>Global Talent.</span>
                <strong>Real Opportunity.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="value-panel row g-0">
          {values.map(([icon, title, text]) => (
            <div className="col-md-4" key={title}>
              <div className="value-block">
                <div className="value-icon"><i className={`bi ${icon}`}></i></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
