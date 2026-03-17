'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import VenueCarouselModal from './venue-carousel-modal'
import ConsultationModal from './consultation-modal'

const venues = [
  {
    title:       'Clubs & Bars',
    description:
      'Punishing low-end and crystal-clear mids designed for high-energy nightlife environments. Built to perform night after night at extreme SPLs.',
    fullDescription:
      'CSC Audio systems for clubs and bars deliver the raw power and precision needed for high-energy nightlife. Our sonic signature combines chest-hitting bass with pristine mids, crafted to energize dance floors while maintaining clarity for vocals and DJ cues. All systems are rigged-ready and built for nightly punishment.',
    image:       '/images/venue-club.jpg',
    tags:        ['High SPL', 'Rigging Ready', 'RGB DSP'],
    span:        'col-span-1 md:col-span-2 row-span-1',
    accent:      'red',
    imagePos:    'object-center',
  },
  {
    title:       'Auditoriums',
    description:
      'Even coverage across every seat. Precision-steerable line arrays eliminate reflections and dead spots in challenging acoustic spaces.',
    fullDescription:
      'For auditoriums and theaters, CSC Audio provides even, articulate coverage from front row to back. Our precision-steerable line arrays intelligently navigate complex architectural acoustics, eliminating reflections and dead spots. Every seat gets identical intelligibility and impact, whether it\'s orchestral performances, theatre productions, or lectures.',
    image:       '/images/venue-auditorium.jpg',
    tags:        ['Speech Clarity', 'Wide Coverage', 'Low Coloration'],
    span:        'col-span-1 row-span-1',
    accent:      'blue',
    imagePos:    'object-center',
  },
  {
    title:       'Live Concerts',
    description:
      'Festival-grade touring systems delivering reference-class sound to crowds of thousands. Sky-high output with no compromise on fidelity.',
    fullDescription:
      'CSC Audio touring systems are specified at festivals and large venues worldwide. Festival-grade reliability, sky-high SPL capability, and reference-class transient response make CSC the choice for tours, outdoor festivals, and large-scale productions where audiences expect nothing less than world-class sound.',
    image:       '/images/venue-concert.jpg',
    tags:        ['Festival Grade', 'Long Throw', '143 dB SPL'],
    span:        'col-span-1 row-span-1',
    accent:      'red',
    imagePos:    'object-top',
  },
  {
    title:       'Hotels & Malls',
    description:
      'Architecturally discreet systems that blend into premium interiors while delivering immersive, full-range background and foreground audio.',
    fullDescription:
      'For hospitality and commercial spaces, CSC Audio specializes in architecturally integrated systems that seamlessly complement premium interiors. From background ambience to immersive foreground experiences, our discreet installations elevate guest experiences while remaining virtually invisible—until they hear the sound.',
    image:       '/images/venue-hotel.jpg',
    tags:        ['Discreet Install', 'Multi-Zone', 'Voice Evac Ready'],
    span:        'col-span-1 md:col-span-2 row-span-1',
    accent:      'blue',
    imagePos:    'object-center',
  },
]

export default function SolutionsGrid() {
  const [selectedVenue, setSelectedVenue] = useState<typeof venues[0] | null>(null)
  const [carouselOpen, setCarouselOpen] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)

  const handleVenueClick = (venue: typeof venues[0]) => {
    setSelectedVenue(venue)
    setCarouselOpen(true)
  }

  const handleConsult = () => {
    setCarouselOpen(false)
    setConsultationOpen(true)
  }

  return (
    <section
      id="solutions"
      className="relative py-28 bg-background overflow-hidden"
      aria-label="Solutions for every space"
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, oklch(0.55 0.24 27 / 0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
                Applications
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance text-foreground">
              Solutions for<br />
              <span className="text-accent">Every Space.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-pretty leading-relaxed text-sm sm:text-base">
            From intimate cocktail bars to 50,000-seat festival stages — CSC Audio
            systems are specified wherever sound is mission-critical.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">
          {venues.map((venue) => {
            const isRed  = venue.accent === 'red'
            const glowColor   = isRed ? 'oklch(0.55 0.24 27 / 0.30)' : 'oklch(0.60 0.18 250 / 0.30)'
            const borderColor = isRed ? 'oklch(0.55 0.24 27 / 0.25)' : 'oklch(0.60 0.18 250 / 0.25)'
            const tagBg       = isRed ? 'oklch(0.55 0.24 27 / 0.15)'  : 'oklch(0.60 0.18 250 / 0.15)'
            const tagText     = isRed ? 'text-primary' : 'text-accent'
            const tagBorder   = isRed ? 'oklch(0.55 0.24 27 / 0.35)' : 'oklch(0.60 0.18 250 / 0.35)'

            return (
              <article
                key={venue.title}
                onClick={() => handleVenueClick(venue)}
                className={`group relative flex flex-col justify-end rounded-lg overflow-hidden cursor-pointer ${venue.span}`}
                style={{
                  border: `1px solid ${borderColor}`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`${venue.title} — click to learn more`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleVenueClick(venue)
                  }
                }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={venue.image}
                    alt={`${venue.title} — CSC Audio installation`}
                    fill
                    className={`object-cover ${venue.imagePos} transition-transform duration-700 group-hover:scale-105`}
                    sizes="(max-width: 768px) 95vw, (max-width: 1280px) 66vw, 900px"
                  />
                  {/* Layered dark overlay — always legible */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, oklch(0.06 0 0 / 0.97) 0%, oklch(0.06 0 0 / 0.55) 50%, oklch(0.06 0 0 / 0.25) 100%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Glassmorphism hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.12 0 0 / 0.50) 0%, oklch(0.10 0 0 / 0.30) 100%)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                  }}
                  aria-hidden="true"
                />

                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${glowColor}, 0 0 30px ${glowColor}` }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3 p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {venue.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded-sm ${tagText}`}
                        style={{
                          background: tagBg,
                          border: `1px solid ${tagBorder}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title + arrow */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground text-balance">
                      {venue.title}
                    </h3>
                    <span
                      className={`mt-1 shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 ${tagText}`}
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  {/* Description — fades up on hover */}
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty max-w-lg opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    {venue.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-80 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${isRed ? 'oklch(0.55 0.24 27)' : 'oklch(0.60 0.18 250)'}, transparent)`,
                  }}
                  aria-hidden="true"
                />
              </article>
            )
          })}
        </div>
      </div>

      {/* Venue Carousel Modal */}
      {selectedVenue && (
        <VenueCarouselModal
          isOpen={carouselOpen}
          onClose={() => setCarouselOpen(false)}
          venue={selectedVenue}
          onConsult={handleConsult}
        />
      )}

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </section>
  )
}
