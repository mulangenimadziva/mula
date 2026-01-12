import React, { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', date: '', message: '' })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.service) {
      setStatus('Please complete name, email and service.')
      return
    }
    setStatus('Booking submitted — we will contact you soon.')
    console.log('Booking data:', form)
    setForm({ name: '', email: '', service: '', date: '', message: '' })
  }

  return (
    <section className="card">
      <h2>Book a Consultation</h2>
      <form onSubmit={handleSubmit} className="bookingForm">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Service
          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a service</option>
            <option value="Business Strategy">Business Strategy</option>
            <option value="Operational Improvement">Operational Improvement</option>
            <option value="Technology & Automation">Technology & Automation</option>
            <option value="Training & Capability">Training & Capability</option>
          </select>
        </label>
        <label>
          Preferred Date
          <input name="date" type="date" value={form.date} onChange={handleChange} />
        </label>
        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <div className="actions">
          <button type="submit">Submit Booking</button>
        </div>
        {status && <div className="status">{status}</div>}
      </form>
    </section>
  )
}
