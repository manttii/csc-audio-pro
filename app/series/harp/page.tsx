import Navbar from '@/components/navbar'
import SeriesCatalogue from '@/components/series-catalogue'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Harp Series | CSC Audio',
  description: 'Premium ceiling speakers with dedicated second-order crossover capturing delicate, clear, and gentle notes.',
}

const harpSpecimens = [
  {
    id: '1',
    name: 'HR Compact',
    model: 'HR-CMP',
    description: 'Space-saving ceiling speaker perfect for residential and boutique commercial installations.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '115 dB' },
      { label: 'Frequency', value: '80Hz – 20kHz' },
      { label: 'Crossover', value: '2nd Order' },
    ],
  },
  {
    id: '2',
    name: 'HR In-Wall',
    model: 'HR-IWL',
    description: 'Flush-mounted in-wall design providing seamless aesthetic integration while delivering premium audio clarity.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '118 dB' },
      { label: 'Frequency', value: '65Hz – 22kHz' },
      { label: 'Crossover', value: '2nd Order' },
    ],
  },
  {
    id: '3',
    name: 'HR Studio',
    model: 'HR-STUD',
    description: 'Reference-grade monitor speaker delivering studio-accurate sound for mixing, mastering, and critical listening.',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '122 dB' },
      { label: 'Frequency', value: '50Hz – 23kHz' },
      { label: 'Crossover', value: '3-Way 2nd Order' },
    ],
  },
  {
    id: '4',
    name: 'HR Pendant',
    model: 'HR-PEND',
    description: 'Architecturally sophisticated pendant design adding visual elegance while maintaining sonic transparency.',
    image: 'https://images.unsplash.com/photo-1499415479124-4657171fbfed?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '120 dB' },
      { label: 'Frequency', value: '60Hz – 21kHz' },
      { label: 'Crossover', value: '2nd Order' },
    ],
  },
  {
    id: '5',
    name: 'HR Flagship',
    model: 'HR-FLG',
    description: 'Premium flagship ceiling speaker featuring ribbon tweeters and advanced waveguide for exceptional clarity and imaging.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '126 dB' },
      { label: 'Frequency', value: '40Hz – 24kHz' },
      { label: 'Crossover', value: '3-Way 3rd Order' },
    ],
  },
]

export default function HarpPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SeriesCatalogue
        seriesName="Harp Series"
        seriesTagline="Ceiling Speaker Solution"
        seriesDescription="Premium ceiling speakers with a dedicated second-order crossover, capturing delicate, clear, and gentle notes."
        seriesFullDescription="The Harp Series represents the pinnacle of ceiling speaker design, engineered for premium residential, commercial, and hospitality environments. Each model features precision-tuned second or third-order crossovers and acoustically optimized geometries that eliminate coloration and deliver transparent, articulate sound. From compact installations to reference-grade applications, Harp speakers disappear into your acoustic space."
        specimens={harpSpecimens}
      />
      <Footer />
    </main>
  )
}
