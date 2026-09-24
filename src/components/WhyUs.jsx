const items = [
  ['bi-globe-americas', 'Global Perspective', 'We connect businesses with talent across borders and opportunities across markets.'],
  ['bi-people-fill', 'People First', 'We believe strong teams and genuine relationships drive sustainable success.'],
  ['bi-sliders', 'Flexible Solutions', 'Our support adapts as your team, priorities, and operational needs evolve.'],
  ['bi-patch-check', 'Reliable Partnership', 'We focus on consistency, communication, accountability, and measurable outcomes.'],
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section section-white">
      <div className="container-fluid container-xl px-4">
        <div className="text-center why-heading">
          <div className="section-kicker">WHY BOTH WORLDS</div>
          <h2 className="display-heading">A Partner Built for Long-Term<br className="d-none d-md-block"/> Growth</h2>
        </div>

        <div className="row g-0 why-list mt-5">
          {items.map(([icon, title, text]) => (
            <div className="col-md-6" key={title}>
              <div className="why-item">
                <div className="why-icon"><i className={`bi ${icon}`}></i></div>
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
