import React from 'react'

export default function Objectives() {
  const objectives = [
    'Increase revenue through focused strategy',
    'Improve operational efficiency',
    'Deliver technology-led transformation',
    'Enable sustainable growth and capability building'
  ]

  return (
    <section className="card">
      <h2>Our Objectives</h2>
      <ul>
        {objectives.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </section>
  )
}
