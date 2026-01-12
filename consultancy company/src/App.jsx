import React from 'react'
import CompanyHeader from './components/CompanyHeader'
import Objectives from './components/Objectives'
import ServiceList from './components/ServiceList'
import Pricing from './components/Pricing'
import BookingForm from './components/BookingForm'

export default function App() {
  return (
    <div className="container">
      <CompanyHeader />
      <main>
        <Objectives />
        <ServiceList />
        <Pricing />
        <BookingForm />
      </main>
    </div>
  )
}
