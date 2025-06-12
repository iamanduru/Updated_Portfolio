// src/components/ContactForm.jsx
import React, { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = 'Please enter a valid email address'
    if (!formData.message.trim() || formData.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: null })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)

    const phone = '254790877089' // your WhatsApp number in international format without '+'
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`

    // Open WhatsApp chat
    window.open(url, '_blank')
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {Object.values(errors).map((msg) => (
        <p key={msg} className="text-sm text-red-500">
          {msg}
        </p>
      ))}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Mitchelle Andy"
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none ${
              errors.name
                ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                : 'border-teal-500 focus:border-amber-400 focus:ring focus:ring-amber-200'
            } bg-teal-750 text-gray-300`}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@example.com"
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none ${
              errors.email
                ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                : 'border-teal-500 focus:border-amber-400 focus:ring focus:ring-amber-200'
            } bg-teal-750 text-gray-300`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What do you wanna talk about...?"
          className="w-full px-4 py-3 rounded-lg border border-teal-500 bg-teal-750 text-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200 transition-colors focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Doodle away....."
          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none ${
            errors.message
              ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
              : 'border-teal-500 focus:border-amber-400 focus:ring focus:ring-amber-200'
          } bg-teal-750 text-gray-300`}
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-amber-500 text-white py-3 rounded-lg flex justify-center items-center transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send via WhatsApp <Send className="h-5 w-5 ml-2" />
            </>
          )}
        </Button>
      </div>

      <p className="text-sm text-center text-gray-400 mt-4">
        Fields marked with <span className="text-red-500">*</span> are required
      </p>
    </form>
  )
}
