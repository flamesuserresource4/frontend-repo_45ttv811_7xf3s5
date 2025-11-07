import { Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thank you! We will get back to you shortly.')
    // Reset the form safely in React (JS)
    if (e.currentTarget && typeof e.currentTarget.reset === 'function') {
      e.currentTarget.reset()
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Contact us</h2>
            <p className="mt-3 text-slate-600">Our concierge team is available 24/7 to assist with bookings and inquiries.</p>
            <div className="mt-6 space-y-3">
              <a href="mailto:reservations@ikuae.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Mail className="h-5 w-5" /> reservations@ikuae.com
              </a>
              <a href="tel:+9710000000" className="block inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Phone className="h-5 w-5" /> +971 00 000 000
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">First name</label>
                <input required name="firstName" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last name</label>
                <input required name="lastName" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required name="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800">Send message</button>
            {status && <p className="mt-3 text-sm text-emerald-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
