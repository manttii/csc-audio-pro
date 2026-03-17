import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'About CSC Audio',
  description: 'Learn about CSC Audio and our commitment to professional sound solutions.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-10 overflow-hidden border-b border-[oklch(0.18_0_0)]">
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6 tracking-wide uppercase font-semibold"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            About CSC Audio
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Celebrating two decades of trust and innovation in professional audio engineering.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since 2004, CSC Audio has been at the forefront of professional audio innovation, delivering world-class sound solutions to over 2,000 mission-critical venues worldwide. Our German design heritage emphasizes precision engineering, relentless quality control, and unwavering dedication to sonic excellence.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are driven by a deep passion for sound. Our mission is to craft professional audio products that deliver high performance, reliability, and uncompromising sonic integrity for every application—from intimate venues to large-scale festivals.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Presence</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With headquarters in Leicester, UK, and offices across Europe and India, CSC Audio serves customers in 15+ countries. Our distributed infrastructure ensures rapid support, technical expertise, and supply chain reliability for installations worldwide.
            </p>
          </div>

          <div className="pt-8 border-t border-[oklch(0.18_0_0)]">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
