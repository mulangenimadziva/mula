import React from 'react'

export default function ServiceList() {
  const services = [
    { title: 'Business Strategy', desc: 'Market analysis, go-to-market and growth plans' },
    { title: 'Operational Improvement', desc: 'Process design, cost reduction and scaling' },
    { title: 'Technology & Automation', desc: 'Platform selection, integration, and automation' },
    { title: 'Training & Capability', desc: 'Workshops, coaching and knowledge transfer' }
  ]

  return (
    <section className="card">
      <h2>Services Offered</h2>
      <div className="services">
        {services.map((s, i) => (
          <div key={i} className="service">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
