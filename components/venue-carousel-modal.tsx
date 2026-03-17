'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface VenueCarouselModalProps {
  isOpen: boolean
  onClose: () => void
  venue: {
    title: string
    description: string
    fullDescription: string
  }
  onConsult: () => void
}

const venueImages: Record<string, string[]> = {
  'Clubs & Bars': [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1499415479124-4657171fbfed?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
  ],
  'Auditoriums': [
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524169358285-4c4a3a2e7315?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
  ],
  'Live Concerts': [
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524169358285-4c4a3a2e7315?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1501649686169-18df41a43d96?w=800&h=600&fit=crop',
  ],
  'Hotels & Malls': [
    'https://images.unsplash.com/photo-1551632036-498813ff5d3c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1500595046891-fdfedea05f94?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514520291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
  ],
}

export default function VenueCarouselModal({
  isOpen,
  onClose,
  venue,
  onConsult,
}: VenueCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = venueImages[venue.title] || []

  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [isOpen, images.length])

  if (!isOpen) return null

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
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
          className="pointer-events-auto max-w-4xl w-full rounded-2xl overflow-hidden animate-in fade-in duration-300"
          style={{
            background: 'linear-gradient(135deg, oklch(0.12 0 0 / 0.95) 0%, oklch(0.10 0 0 / 0.90) 100%)',
            border: '1px solid oklch(0.22 0 0)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 0 60px oklch(0.55 0.24 27 / 0.15), inset 0 0 40px oklch(0.55 0.24 27 / 0.05)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px]">
            {/* Left: Carousel */}
            <div className="relative bg-black/40 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Image */}
                <Image
                  src={images[currentIndex]}
                  alt={`${venue.title} venue ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 0%, oklch(0.06 0 0 / 0.40) 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Navigation arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 flex flex-col justify-between">
              {/* Title and description */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{venue.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {venue.description}
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {venue.fullDescription}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  onClose()
                  onConsult()
                }}
                className="w-full px-4 py-3 rounded-lg font-semibold tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_16px_oklch(0.55_0.24_27/0.45)]"
              >
                Consult with an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
