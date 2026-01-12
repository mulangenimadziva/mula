import React from 'react'

export default function Pricing() {
  const options = [
    { name: 'Discovery Session', price: 'Free', details: '30-60 minute scoping call' },
    { name: 'Advisory Hourly', price: '$150/hr', details: 'Short-term advisory and coaching' },
    { name: 'Project Engagement', price: 'From $8,000', details: 'Fixed-fee projects with clear deliverables' },
    { name: 'Retainer', price: 'From $3,000/mo', details: 'Ongoing support and advisory' }
  ]

  return (
    <section className="card">
      <h2>How We Price</h2>
      <div className="pricing">
        {options.map((o, i) => (
          <div key={i} className="priceCard">
            <strong>{o.name}</strong>
            <div className="price">{o.price}</div>
            <div className="small">{o.details}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
