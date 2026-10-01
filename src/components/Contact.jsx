import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      })

      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container-fluid container-xl px-4">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="section-kicker">CONTACT US</div>
            <h2 className="display-heading">Let’s Talk</h2>
            <p className="body-copy contact-intro">
              Tell us a little about your business and the support you’re looking for. Our team will get back to you shortly.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon"><i className="bi bi-envelope"></i></div>
                <div><span>Sales</span><strong>sales@bothworldsglobal.com</strong></div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><i className="bi bi-envelope-at"></i></div>
                <div><span>General</span><strong>info@bothworldsglobal.com</strong></div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><i className="bi bi-telephone"></i></div>
                <div><span>Phone</span><strong>+1 (XXX) XXX-XXXX</strong></div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><i className="bi bi-geo-alt"></i></div>
                <div><span>Locations</span><strong>United States / Honduras</strong></div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-card">

              {submitted && (
                <div className="alert alert-success">
                  Thanks! Your message was submitted.
                </div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >

                <input type="hidden" name="form-name" value="contact" />

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-control"
                      name="fullName"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Company Name</label>
                    <input
                      className="form-control"
                      name="companyName"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Business Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Service Interested In
                    </label>

                    <select
                      className="form-select"
                      name="service"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Customer Support</option>
                      <option>Administrative Support</option>
                      <option>Sales Support</option>
                      <option>Technical Support</option>
                      <option>Back-Office Operations</option>
                      <option>Custom Staffing Solution</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>

                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-brand px-4"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}