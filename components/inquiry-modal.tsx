'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
  defaultSeries?: string
}

export default function InquiryModal({ isOpen, onClose, defaultSeries }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    series: defaultSeries || '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', series: defaultSeries || '' })
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-md rounded-lg overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.12 0 0 / 0.95) 0%, oklch(0.10 0 0 / 0.90) 100%)',
            border: '1px solid oklch(0.22 0 0)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow:
              '0 20px 60px -12px rgba(0, 0, 0, 0.5), 0 0 40px oklch(0.55 0.24 27 / 0.15)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[oklch(0.22_0_0)]">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-foreground">Inquire Now</h2>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">
                Get in touch with our team
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-1 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
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
                <p className="text-foreground font-semibold text-center">Thank you!</p>
                <p className="text-muted-foreground text-sm text-center">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
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

                {/* Series */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="series" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Product Series
                  </label>
                  <select
                    id="series"
                    name="series"
                    value={formData.series}
                    onChange={handleChange}
                    required
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 8px center',
                      paddingRight: '28px',
                    }}
                  >
                    <option value="">Select a series...</option>
                    <option value="Cello Series">Cello Series</option>
                    <option value="Contrabass Series">Contrabass Series</option>
                    <option value="Harp Series">Harp Series</option>
                    <option value="String Series">String Series</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-4 w-full px-4 py-2.5 rounded bg-primary text-primary-foreground font-semibold tracking-widest uppercase text-sm hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_16px_oklch(0.55_0.24_27/0.45)]"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
