const steps = [
  ['01', 'Tell Us What You Need', 'We learn about your business, workflow, and staffing requirements.'],
  ['02', 'Build Your Solution', 'We identify the right roles and support structure for your company.'],
  ['03', 'Launch Your Team', 'We help establish the processes, tools, and communication needed to begin.'],
  ['04', 'Grow Together', 'We continue supporting and adapting the solution as your business evolves.'],
]

export default function HowItWorks() {
  return (
    <section className="section process-section">
      <div className="container-fluid container-xl px-4">
        <div className="section-kicker">HOW IT WORKS</div>
        <h2 className="display-heading">Simple by Design</h2>

        <div className="process-line"></div>
        <div className="row g-4 process-grid">
          {steps.map(([num, title, text]) => (
            <div className="col-md-6 col-lg-3" key={num}>
              <div className="process-step">
                <div className="step-number">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-panel">
          <div>
            <div className="cta-kicker">GLOBAL OPPORTUNITIES. REAL IMPACT.</div>
            <h3>Ready to Build a Stronger Team?</h3>
          </div>
          <a href="#contact" className="btn btn-light btn-lg cta-button">Let's Work Together <i className="bi bi-arrow-right ms-3"></i></a>
        </div>
      </div>
    </section>
  )
}
