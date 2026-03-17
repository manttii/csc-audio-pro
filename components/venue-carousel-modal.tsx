'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideData {
  imageSrc: string
  title: string
  description: string
}

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

const venueSlides: Record<string, SlideData[]> = {
  'Clubs & Bars': [
    {
      imageSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      title: 'Main Dance Floor',
      description: 'Immersive sound system delivering club-defining low-end punch and crystal vocals. Built for nightly rigors of high-energy venues.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      title: 'VIP Lounge Section',
      description: 'Intimate satellite coverage providing premium audio experience in exclusive seating areas with precise directional control.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop',
      title: 'Roof Terrace',
      description: 'Weatherproof outdoor audio installation delivering consistent, high-SPL coverage across rooftop venues and open-air sections.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1499415479124-4657171fbfed?w=800&h=600&fit=crop',
      title: 'DJ Booth',
      description: 'Near-field monitoring system enabling DJs to maintain mix integrity and beatmatching accuracy throughout the night.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
      title: 'Back Bar Counter',
      description: 'Discreet speaker placement providing full-range audio for background ambience and promotional announcements.',
    },
  ],
  'Auditoriums': [
    {
      imageSrc: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
      title: 'Main Auditorium',
      description: 'Full-range line array system delivering even speech intelligibility and music clarity from orchestra pit to back balcony.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1524169358285-4c4a3a2e7315?w=800&h=600&fit=crop',
      title: 'Stage Monitors',
      description: 'Performer-focused monitoring system enabling actors and musicians to hear themselves with precision and confidence.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      title: 'Balcony Section',
      description: 'Delayed speaker arrays ensuring upper-level audiences receive synchronized sound without acoustic anomalies.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      title: 'Sound Control Room',
      description: 'Networked DSP processors enabling real-time mixing, EQ, and dynamic control for adaptive venue acoustics.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      title: 'Emergency Announcement',
      description: 'High-priority evacuation system with intelligible coverage reaching every corner of the facility within specifications.',
    },
  ],
  'Live Concerts': [
    {
      imageSrc: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
      title: 'Main PA System',
      description: 'Festival-grade line arrays delivering sky-high SPL with reference-class transient response and sonic clarity across massive venues.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
      title: 'Subwoofer Array',
      description: 'Cardioid and multiload subwoofer configurations providing earth-shaking bass with zero stage bleed for optimal gain-before-feedback.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop',
      title: 'Fill System',
      description: 'Strategically positioned satellite arrays ensuring consistent coverage of distant seating and blind zones without reflections.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1524169358285-4c4a3a2e7315?w=800&h=600&fit=crop',
      title: 'Wireless Microphones',
      description: 'Ultra-reliable RF systems with redundant frequencies enabling seamless performer mobility and crowd interaction.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1501649686169-18df41a43d96?w=800&h=600&fit=crop',
      title: 'Touring Rigging',
      description: 'Modular, tour-ready systems engineered for rapid setup, breakdown, and transportation between festival dates and venues.',
    },
  ],
  'Hotels & Malls': [
    {
      imageSrc: 'https://images.unsplash.com/photo-1551632036-498813ff5d3c?w=800&h=600&fit=crop',
      title: 'Main Lobby',
      description: 'Ambient audio system creating welcoming atmosphere while maintaining whisper-quiet background levels for conversation.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      title: 'Restaurant & Dining',
      description: 'Zone-specific audio delivering curated ambience tailored to dining experience without overpowering guest conversations.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1500595046891-fdfedea05f94?w=800&h=600&fit=crop',
      title: 'Rooftop Bar',
      description: 'Weatherproof outdoor installation providing modern, sophisticated ambience with premium sound for upscale entertainment.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      title: 'Conference Halls',
      description: 'Modular sound reinforcement enabling seamless presentations, conferences, and events with multiple simultaneous sessions.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1514520291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      title: 'Fitness Center',
      description: 'Synchronized multi-zone audio supporting fitness classes, cardio areas, and wellness programming with independent volume control.',
    },
  ],
}

export default function VenueCarouselModal({
  isOpen,
  onClose,
  venue,
  onConsult,
}: VenueCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slides = venueSlides[venue.title] || []
  const currentSlide = slides[currentIndex] || {}

  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [isOpen, slides.length])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  if (!isOpen) return null

  const handlePrev = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const handleDotClick = (idx: number) => {
    setIsTransitioning(true)
    setCurrentIndex(idx)
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
                  src={currentSlide.imageSrc || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop'}
                  alt={currentSlide.title || `${venue.title} venue`}
                  fill
                  className="object-cover transition-opacity duration-300"
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
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${slides[idx]?.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 flex flex-col justify-between">
              {/* Synchronized Title and Description */}
              <div className="flex-1 overflow-hidden">
                {/* Slide title */}
                <div
                  className={`transition-all duration-300 ${
                    isTransitioning
                      ? 'opacity-0 translate-y-2'
                      : 'opacity-100 translate-y-0'
                  }`}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {currentSlide.title}
                  </h2>
                </div>

                {/* Slide description */}
                <div
                  className={`transition-all duration-300 delay-75 ${
                    isTransitioning
                      ? 'opacity-0 translate-y-2'
                      : 'opacity-100 translate-y-0'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {currentSlide.description}
                  </p>
                </div>
              </div>

              {/* CTA - Fixed at bottom, never animates */}
              <button
                onClick={() => {
                  onClose()
                  onConsult()
                }}
                className="mt-8 w-full px-4 py-3 rounded-lg font-semibold tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_16px_oklch(0.55_0.24_27/0.45)]"
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
