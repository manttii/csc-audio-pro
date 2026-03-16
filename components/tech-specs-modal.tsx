'use client'

import { X } from 'lucide-react'

interface TechSpecsModalProps {
  isOpen: boolean
  onClose: () => void
  series: string
}

const techSpecs: Record<string, { title: string; description: string; specs: { label: string; value: string }[] }> = {
  'Cello Series': {
    title: 'Cello Series',
    description: 'Acoustically transparent, tonally rich, and spatially neutral loudspeakers engineered for powerful performance. Features advanced Neo drivers for superior acoustic clarity.',
    specs: [
      { label: 'Driver Technology', value: 'Neo Drivers' },
      { label: 'Max SPL', value: '139 dB' },
      { label: 'LF Driver', value: '2× 8″ Woven Composite' },
      { label: 'HF Driver', value: '4× 1.4″ Compression' },
      { label: 'Frequency Range', value: '45Hz – 20kHz' },
      { label: 'Crossover', value: '3rd Order LR' },
      { label: 'Impedance', value: '8 Ohms' },
      { label: 'Power Handling', value: '500W Continuous' },
    ],
  },
  'Contrabass Series': {
    title: 'Contrabass Series',
    description: 'Deep, impactful subwoofers capturing bold and dynamic characteristics. Available in Reflex, Multiload, or band pass configurations with Silicon Carbide MOSFETs for enhanced power delivery.',
    specs: [
      { label: 'Amplifier', value: 'Silicon Carbide MOSFETs' },
      { label: 'Max SPL', value: '143 dB' },
      { label: 'LF Driver', value: '2× 18″ Vented Coil' },
      { label: 'Frequency Range', value: '20Hz – 200Hz' },
      { label: 'Configurations', value: 'Reflex, Multiload, Band Pass' },
      { label: 'Power Output', value: '1500W RMS' },
      { label: 'Impedance', value: '4 Ohms' },
      { label: 'Dimensions', value: '32″ × 36″ × 32″' },
    ],
  },
  'Harp Series': {
    title: 'Harp Series',
    description: 'Premium ceiling speakers with a dedicated second-order crossover, capturing delicate, clear, and gentle notes. Engineered for critical listening environments with custom ribbon tweeters.',
    specs: [
      { label: 'Tweeter Type', value: 'Custom Ribbon' },
      { label: 'Crossover', value: '2nd Order' },
      { label: 'Frequency Range', value: '28Hz – 40kHz' },
      { label: 'Max SPL', value: '130 dB' },
      { label: 'Sensitivity', value: '92 dB/W/m' },
      { label: 'Impedance', value: '8 Ohms' },
      { label: 'Power Handling', value: '250W Continuous' },
      { label: 'Installation', value: 'Ceiling/Wall Mount' },
    ],
  },
  'String Series': {
    title: 'String Series',
    description: 'Robust small satellite speakers designed to deliver harmonious & balanced sound. Perfect for compact installations and supplementary systems with reliable mid-range performance.',
    specs: [
      { label: 'Frequency Range', value: '65Hz – 20kHz' },
      { label: 'Max SPL', value: '135 dB' },
      { label: 'Driver Configuration', value: '1× 5″ + 1× 1″' },
      { label: 'Sensitivity', value: '88 dB/W/m' },
      { label: 'Impedance', value: '8 Ohms' },
      { label: 'Power Handling', value: '150W Continuous' },
      { label: 'Mounting', value: 'Bracket/Pedestal' },
      { label: 'Weight', value: '4.5 kg' },
    ],
  },
}

export default function TechSpecsModal({ isOpen, onClose, series }: TechSpecsModalProps) {
  const specs = techSpecs[series]

  if (!isOpen || !specs) return null

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
          className="relative w-full max-w-2xl rounded-lg overflow-hidden max-h-[80vh] overflow-y-auto"
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
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-[oklch(0.22_0_0)] bg-gradient-to-r from-[oklch(0.12_0_0/0.95)] to-[oklch(0.10_0_0/0.90)]">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-foreground">{specs.title}</h2>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">
                Technical Specifications
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
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <p className="text-foreground leading-relaxed text-pretty">
                {specs.description}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest">
                Detailed Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specs.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded border border-[oklch(0.22_0_0)] bg-[oklch(0.15_0_0)]"
                  >
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {spec.label}
                    </p>
                    <p className="text-foreground font-semibold">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
