const services = [
  ['bi-headset', 'Customer Support', 'Inbound and outbound customer service teams focused on excellent customer experiences.'],
  ['bi-clipboard-check', 'Administrative Support', 'Virtual assistance, data entry, scheduling, documentation, and back-office coordination.'],
  ['bi-bar-chart-line', 'Sales Support', 'Lead generation, appointment setting, follow-up, and sales support that helps teams stay focused.'],
  ['bi-tools', 'Technical Support', 'Level 1 help desk, troubleshooting, customer technical assistance, and issue triage.'],
  ['bi-diagram-3', 'Back-Office Operations', 'Data processing, reporting, document management, and reliable operational support.'],
  ['bi-person-badge', 'Custom Staffing Solutions', 'Dedicated professionals or teams tailored to your business requirements and growth plans.'],
]

export default function Services() {
  return (
    <section id="services" className="section section-soft">
      <div className="container-fluid container-xl px-4">
        <div className="section-kicker">OUR SERVICES</div>
        <h2 className="display-heading service-heading">BPO Solutions Built<br className="d-none d-lg-block"/> Around Your Business</h2>
        <p className="body-copy service-intro">
          Flexible support solutions designed around your workflow, your customers, and the way your business grows.
        </p>

        <div className="row g-4 mt-4">
          {services.map(([icon, title, text]) => (
            <div className="col-md-6 col-lg-4" key={title}>
              <div className="service-card h-100">
                <i className={`bi ${icon}`}></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
