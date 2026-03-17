import Navbar from '@/components/navbar'
import SeriesCatalogue from '@/components/series-catalogue'
import Footer from '@/components/footer'

export const metadata = {
  title: 'String Series | CSC Audio',
  description: 'Robust small satellite speakers designed to deliver harmonious and balanced sound across diverse applications.',
}

const stringSpecimens = [
  {
    id: '1',
    name: 'ST Micro',
    model: 'ST-MCR',
    description: 'Ultracompact satellite speaker ideal for space-constrained venues and architectural applications.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '128 dB' },
      { label: 'Frequency', value: '100Hz – 20kHz' },
      { label: 'Driver', value: '1×5″ + 1″' },
    ],
  },
  {
    id: '2',
    name: 'ST Satellite',
    model: 'ST-SAT',
    description: 'Professional satellite speaker with balanced frequency response for surround and fill applications.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '132 dB' },
      { label: 'Frequency', value: '80Hz – 22kHz' },
      { label: 'Driver', value: '1×6.5″ + 1.4″' },
    ],
  },
  {
    id: '3',
    name: 'ST Fill',
    model: 'ST-FIL',
    description: 'Dedicated fill speaker providing consistent coverage in challenging acoustic zones and dead spots.',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '135 dB' },
      { label: 'Frequency', value: '60Hz – 21kHz' },
      { label: 'Driver', value: '1×8″ + 1.4″' },
    ],
  },
  {
    id: '4',
    name: 'ST Pedestal',
    model: 'ST-PED',
    description: 'Standalone pedestal-mounted speaker for mobile and temporary installation scenarios.',
    image: 'https://images.unsplash.com/photo-1499415479124-4657171fbfed?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '137 dB' },
      { label: 'Frequency', value: '55Hz – 22kHz' },
      { label: 'Driver', value: '1×8″ + 2×1.4″' },
    ],
  },
  {
    id: '5',
    name: 'ST Touring',
    model: 'ST-TUR',
    description: 'Rugged touring-grade satellite with rigging points and road-hardened construction for constant deployment.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '139 dB' },
      { label: 'Frequency', value: '45Hz – 23kHz' },
      { label: 'Driver', value: '1×10″ + 2×1.4″' },
    ],
  },
]

export default function StringPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SeriesCatalogue
        seriesName="String Series"
        seriesTagline="Satellite Speakers"
        seriesDescription="Robust small satellite speakers designed to deliver harmonious & balanced sound."
        seriesFullDescription="The String Series delivers professional-grade performance in compact packages, engineered for satellite, fill, and supplementary coverage applications. From boutique venues to large-scale festival deployments, String speakers provide balanced tonal reproduction and reliable output. Each model combines rugged construction with pristine sound quality, making them essential components of any professional touring or installation rig."
        specimens={stringSpecimens}
      />
      <Footer />
    </main>
  )
}
