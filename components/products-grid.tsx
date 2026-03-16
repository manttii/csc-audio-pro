'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import InquiryModal from './inquiry-modal'

const products = [
  {
    name:        'Cello Series',
    tagline:     'Loudspeaker Excellence',
    description:
      'Acoustically transparent, tonally rich, and spatially neutral loudspeakers engineered for powerful performance.',
    specs: [
      { label: 'Max SPL',     value: '139 dB' },
      { label: 'LF Driver',   value: '2× 8″'  },
      { label: 'HF Driver',   value: '4× 1.4″' },
    ],
    image:       '/cello.png',
    accent:      'primary',    // red
    badge:       'Most Popular',
  },
  {
    name:        'Contrabass Series',
    tagline:     'Premium Subwoofers',
    description:
      'Deep, impactful subwoofers capturing bold and dynamic characteristics. Available in Reflex, Multiload, or band pass.',
    specs: [
      { label: 'Max SPL',     value: '143 dB' },
      { label: 'LF Driver',   value: '2× 18″' },
      { label: 'Config',      value: 'Flexible' },
    ],
    image:       '/sub.png',
    accent:      'accent',     // blue
    badge:       'New 2025',
  },
  {
    name:        'Harp Series',
    tagline:     'Ceiling Speaker Solution',
    description:
      'Premium ceiling speakers with a dedicated second-order crossover, capturing delicate, clear, and gentle notes.',
    specs: [
      { label: 'Range',       value: '28Hz – 40kHz' },
      { label: 'Tweeter',     value: 'Custom Design' },
      { label: 'Crossover',   value: '2nd Order' },
    ],
    image:       '/harp.png',
    accent:      'primary',
    badge:       'Premium',
  },
  {
    name:        'String Series',
    tagline:     'Satellite Speakers',
    description:
      'Robust small satellite speakers designed to deliver harmonious & balanced sound.',
    specs: [
      { label: 'Max SPL',     value: '135 dB' },
      { label: 'Compact',     value: 'Design' },
      { label: 'Application', value: 'Versatile' },
    ],
    image:       '/string.png',
    accent:      'accent',
    badge:       'Latest',
  },
]

export default function ProductsGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSeries, setSelectedSeries] = useState('')

  const handleInquire = (seriesName: string) => {
    setSelectedSeries(seriesName)
    setIsModalOpen(true)
  }

  return (
    <section
      id="products"
      className="relative py-28 bg-background overflow-hidden"
      aria-label="Product series"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, oklch(0.60 0.18 250 / 0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
                Product Range
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance text-foreground">
              Engineered to<br />
              <span className="text-primary">Perform.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-pretty leading-relaxed text-sm sm:text-base">
            Three distinct series — each a benchmark in its class. From compact touring
            cabinets to reference home theater systems.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const isAccent = product.accent === 'accent'
            const glowColor = isAccent
              ? 'oklch(0.60 0.18 250 / 0.25)'
              : 'oklch(0.55 0.24 27 / 0.25)'
            const borderColor = isAccent
              ? 'oklch(0.60 0.18 250 / 0.30)'
              : 'oklch(0.55 0.24 27 / 0.30)'
            const textAccent = isAccent ? 'text-accent' : 'text-primary'
            const bgAccent   = isAccent ? 'bg-accent'   : 'bg-primary'

            return (
              <article
                key={product.name}
                className="group relative flex flex-col rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background:
                    'linear-gradient(135deg, oklch(0.12 0 0 / 0.85) 0%, oklch(0.10 0 0 / 0.70) 100%)',
                  border: `1px solid ${borderColor}`,
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  boxShadow: `0 0 40px ${glowColor}`,
                }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`${bgAccent} text-primary-foreground text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} — ${product.tagline}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 33vw"
                  />
                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, oklch(0.10 0 0) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 gap-4 p-6">
                  {/* Name + tagline */}
                  <div className="flex flex-col gap-1">
                    <span className={`text-xs tracking-[0.25em] uppercase font-medium ${textAccent}`}>
                      {product.tagline}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {product.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty flex-1">
                    {product.description}
                  </p>

                  {/* Spec grid */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-[oklch(0.22_0_0)]">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="flex flex-col gap-0.5">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                          {spec.label}
                        </span>
                        <span className="text-xs font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Inquire */}
                  <button
                    onClick={() => handleInquire(product.name)}
                    className={`group/btn flex items-center gap-2 text-sm font-semibold tracking-widest uppercase ${textAccent} hover:opacity-80 transition-opacity`}
                    aria-label={`Inquire about the ${product.name}`}
                  >
                    Inquire
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </div>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
                  }}
                  aria-hidden="true"
                />
              </article>
            )
          })}
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSeries={selectedSeries}
      />
    </section>
  )
}
