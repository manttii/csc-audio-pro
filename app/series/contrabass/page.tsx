import Navbar from '@/components/navbar'
import SeriesCatalogue from '@/components/series-catalogue'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Contrabass Series | CSC Audio',
  description: 'Deep, impactful subwoofers capturing bold and dynamic characteristics with multiple configuration options.',
}

const contrabassSpecimens = [
  {
    id: '1',
    name: 'CB Mini',
    model: 'CB-MINI',
    description: 'Compact powered subwoofer ideal for small clubs and venues requiring deep bass without excessive footprint.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '135 dB' },
      { label: 'Frequency', value: '25Hz – 150Hz' },
      { label: 'Driver', value: '1×12″' },
    ],
  },
  {
    id: '2',
    name: 'CB Dual',
    model: 'CB-DUL18',
    description: 'Professional dual-18" cardioid subwoofer with variable configuration for optimal stage control.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '143 dB' },
      { label: 'Frequency', value: '20Hz – 120Hz' },
      { label: 'Driver', value: '2×18″' },
    ],
  },
  {
    id: '3',
    name: 'CB Reflex',
    model: 'CB-RFX',
    description: 'High-efficiency reflex-loaded configuration providing warm, full-bodied bass for music production and live events.',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '140 dB' },
      { label: 'Frequency', value: '22Hz – 130Hz' },
      { label: 'Driver', value: '1×18″' },
    ],
  },
  {
    id: '4',
    name: 'CB Multiload',
    model: 'CB-MLOD',
    description: 'Advanced multiload design enabling flexible tuning and multiple mounting configurations for complex installations.',
    image: 'https://images.unsplash.com/photo-1499415479124-4657171fbfed?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '144 dB' },
      { label: 'Frequency', value: '18Hz – 140Hz' },
      { label: 'Driver', value: '2×18″' },
    ],
  },
  {
    id: '5',
    name: 'CB Bandpass',
    model: 'CB-BNDP',
    description: 'Premium bandpass sealed enclosure delivering surgical bass accuracy and minimal stage bleed for touring rigs.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '145 dB' },
      { label: 'Frequency', value: '35Hz – 100Hz' },
      { label: 'Driver', value: '2×18″' },
    ],
  },
]

export default function ContrabassPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SeriesCatalogue
        seriesName="Contrabass Series"
        seriesTagline="Premium Subwoofers"
        seriesDescription="Deep, impactful subwoofers capturing bold and dynamic characteristics. Available in Reflex, Multiload, or band pass."
        seriesFullDescription="The Contrabass Series defines low-frequency excellence, engineered for everything from intimate club environments to stadium-scale festivals. Each configuration option—Reflex for warmth, Multiload for flexibility, and Bandpass for surgical precision—delivers earth-shaking impact while maintaining gain-before-feedback and zero stage coloration. Silicon Carbide MOSFET amplifiers ensure pristine power delivery."
        specimens={contrabassSpecimens}
      />
      <Footer />
    </main>
  )
}
