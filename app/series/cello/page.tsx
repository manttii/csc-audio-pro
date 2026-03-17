import Navbar from '@/components/navbar'
import SeriesCatalogue from '@/components/series-catalogue'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Cello Series | CSC Audio',
  description: 'Premium line array loudspeakers engineered for powerful performance across mission-critical venues.',
}

const celloSpecimens = [
  {
    id: '1',
    name: 'RR 212',
    model: 'CS-RR212',
    description: 'Compact dual-driver line array module delivering punchy mids and extended bass response for small to mid-size venues.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '139 dB' },
      { label: 'Frequency', value: '52Hz – 20kHz' },
      { label: 'Drivers', value: '2×8″ + 4×1.4″' },
    ],
  },
  {
    id: '2',
    name: 'CF 15',
    model: 'CS-CF15',
    description: 'Full-range compact module with integrated crossover providing clean, transparent sound reproduction.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '142 dB' },
      { label: 'Frequency', value: '45Hz – 21kHz' },
      { label: 'Drivers', value: '2×10″ + 6×1.4″' },
    ],
  },
  {
    id: '3',
    name: 'Chorus 3',
    model: 'CS-CH3',
    description: 'Mid-size three-driver array element designed for scalable installations and extended venue coverage.',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '143 dB' },
      { label: 'Frequency', value: '40Hz – 22kHz' },
      { label: 'Drivers', value: '3×8″ + 8×1.4″' },
    ],
  },
  {
    id: '4',
    name: 'Quattro',
    model: 'CS-QTR4',
    description: 'Professional-grade four-driver module for high-output touring and permanent installation applications.',
    image: 'https://images.unsplash.com/photo-1499415479124-4657171fbfed?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '145 dB' },
      { label: 'Frequency', value: '35Hz – 22kHz' },
      { label: 'Drivers', value: '4×8″ + 10×1.4″' },
    ],
  },
  {
    id: '5',
    name: 'Flagship',
    model: 'CS-FLAG',
    description: 'Premium flagship model featuring advanced waveguide technology and enhanced driver configuration for ultimate performance.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=500&fit=crop',
    specs: [
      { label: 'Max SPL', value: '147 dB' },
      { label: 'Frequency', value: '32Hz – 23kHz' },
      { label: 'Drivers', value: '4×10″ + 12×1.4″' },
    ],
  },
]

export default function CelloPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SeriesCatalogue
        seriesName="Cello Series"
        seriesTagline="Loudspeaker Excellence"
        seriesDescription="Acoustically transparent, tonally rich, and spatially neutral loudspeakers engineered for powerful performance."
        seriesFullDescription="The Cello Series represents the pinnacle of professional audio engineering, combining decades of innovation with modern manufacturing techniques. Each module is crafted to deliver uncompromising clarity across the full frequency spectrum while maintaining exceptional transient response and sonic coherence. From intimate venues to stadium-scale installations, Cello systems adapt seamlessly to any acoustic environment."
        specimens={celloSpecimens}
      />
      <Footer />
    </main>
  )
}
