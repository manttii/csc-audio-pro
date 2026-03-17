'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface DetailViewModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'product' | 'location'
  data: {
    name: string
    image: string
    description?: string
    specs?: { label: string; value: string }[]
    address?: string
    city?: string
    region?: string
  }
}

export default function DetailViewModal({
  isOpen,
  onClose,
  type,
  data,
}: DetailViewModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    bestTime: 'Morning',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: '', contact: '', bestTime: 'Morning' })
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl bg-[oklch(0.12_0_0)] border border-[oklch(0.20_0_0)] rounded-lg shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[oklch(0.18_0_0)] hover:bg-[oklch(0.22_0_0)] text-muted-foreground hover:text-foreground transition-all"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden bg-[oklch(0.18_0_0)]">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                {data.name}
              </h2>
              {type === 'product' && data.description && (
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {data.description}
                </p>
              )}
              {type === 'location' && (
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {data.address}
                </p>
              )}
            </div>

            {/* Product Specs or Location Info */}
            {type === 'product' && data.specs && (
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">
                  Technical Specifications
                </h3>
                <ul className="space-y-2">
                  {data.specs.map((spec, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span>
                        <span className="font-semibold text-foreground">
                          {spec.label}:
                        </span>{' '}
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {type === 'location' && (
              <div className="text-muted-foreground text-sm space-y-2">
                <p className="font-semibold text-foreground">
                  Installation Details
                </p>
                <p>
                  Premium audio installation in a state-of-the-art venue featuring
                  CSC Audio's flagship professional sound systems, ensuring
                  exceptional acoustic performance and reliability.
                </p>
              </div>
            )}

            {/* Inquiry Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-foreground uppercase tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact"
                    className="text-xs font-semibold text-foreground uppercase tracking-wide"
                  >
                    Email or Phone
                  </label>
                  <input
                    id="contact"
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com or +1 (555) 000-0000"
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="bestTime"
                    className="text-xs font-semibold text-foreground uppercase tracking-wide"
                  >
                    Best Time to Reach
                  </label>
                  <select
                    id="bestTime"
                    name="bestTime"
                    value={formData.bestTime}
                    onChange={handleChange}
                    className="px-3 py-2.5 rounded bg-[oklch(0.18_0_0)] border border-[oklch(0.22_0_0)] text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 px-4 py-2.5 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase rounded hover:brightness-110 active:scale-95 transition-all duration-200"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <span className="text-primary text-lg font-bold">✓</span>
                </div>
                <p className="text-foreground font-semibold">Thank you!</p>
                <p className="text-sm text-muted-foreground">
                  We will be in touch shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
