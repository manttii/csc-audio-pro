'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

const inquiryTypes = [
  'Touring/Live Concerts',
  'Club & Bar Installation',
  'Auditorium/Theatre Setup',
  'Commercial/Hotel Audio',
  'Purchasing Equipment',
]

const contactTimes = ['Morning', 'Afternoon', 'Evening']

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactTime: 'Morning',
    inquiryType: 'Touring/Live Concerts',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactTime: 'Morning',
        inquiryType: 'Touring/Live Concerts',
      })
    }, 2000)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto max-w-md w-full rounded-2xl overflow-hidden animate-in fade-in duration-300"
          style={{
            background: 'linear-gradient(135deg, oklch(0.12 0 0 / 0.95) 0%, oklch(0.10 0 0 / 0.90) 100%)',
            border: '1px solid oklch(0.22 0 0)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 0 60px oklch(0.55 0.24 27 / 0.15), inset 0 0 40px oklch(0.55 0.24 27 / 0.05)',
          }}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-[oklch(0.18_0_0)]">
            <h2 className="text-2xl font-bold text-foreground">Book a Consultation</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Let's discuss your audio needs
            </p>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Preferred Contact Time */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contactTime" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Preferred Contact Time
                  </label>
                  <select
                    id="contactTime"
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleChange}
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    {contactTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiryType" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full px-4 py-2.5 rounded font-semibold tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_16px_oklch(0.55_0.24_27/0.45)]"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 py-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center">
                  Thank You!
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  We'll be in touch soon with availability.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
