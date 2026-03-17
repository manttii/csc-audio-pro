'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import InquiryModal from './inquiry-modal'

interface SpecimenProduct {
  id: string
  name: string
  model: string
  description: string
  image: string
  specs: { label: string; value: string }[]
}

interface SeriesCatalogueProps {
  seriesName: string
  seriesTagline: string
  seriesDescription: string
  seriesFullDescription: string
  specimens: SpecimenProduct[]
}

export default function SeriesCatalogue({
  seriesName,
  seriesTagline,
  seriesDescription,
  seriesFullDescription,
  specimens,
}: SeriesCatalogueProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const handleInquire = (productName: string) => {
    setSelectedProduct(productName)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-10 overflow-hidden border-b border-[oklch(0.18_0_0)]">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, oklch(0.55 0.24 27 / 0.15) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6 tracking-wide uppercase font-semibold"
            >
              ← Back to Products
            </Link>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight">
              {seriesName}
            </h1>

            {/* Tagline */}
            <p className="text-lg text-primary font-semibold tracking-wider uppercase mb-6">
              {seriesTagline}
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl text-pretty mb-4">
              {seriesDescription}
            </p>

            {/* Full description */}
            <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-2xl text-pretty">
              {seriesFullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Specimen Grid */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Featured Speakers
            </h2>
            <p className="text-muted-foreground">
              Explore the complete lineup of {seriesName} products
            </p>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specimens.map((specimen) => {
              const textAccent =
                specimen.id % 2 === 0 ? 'text-primary' : 'text-accent'
              const borderColor =
                specimen.id % 2 === 0
                  ? 'oklch(0.55 0.24 27 / 0.3)'
                  : 'oklch(0.60 0.18 250 / 0.3)'

              return (
                <article
                  key={specimen.id}
                  className="group relative flex flex-col rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.12 0 0 / 0.85) 0%, oklch(0.10 0 0 / 0.70) 100%)',
                    border: `1px solid ${borderColor}`,
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-56 overflow-hidden bg-black/20">
                    <Image
                      src={specimen.image}
                      alt={specimen.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase ${textAccent} bg-black/30 backdrop-blur-md border border-white/10`}>
                        {specimen.id % 2 === 0 ? 'Premium' : 'Standard'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    {/* Details */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {specimen.name}
                      </h3>
                      <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-3">
                        Model: {specimen.model}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {specimen.description}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 py-4 border-y border-[oklch(0.22_0_0)]">
                        {specimen.specs.map((spec) => (
                          <div key={spec.label} className="flex flex-col gap-1">
                            <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                              {spec.label}
                            </span>
                            <span className="text-xs font-semibold text-foreground">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inquire Button */}
                    <button
                      onClick={() => handleInquire(specimen.name)}
                      className={`group/btn mt-4 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase ${textAccent} hover:opacity-80 transition-opacity`}
                    >
                      Inquire Now
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSeries={selectedProduct}
      />
    </>
  )
}
