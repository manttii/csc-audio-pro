import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Distributor Map | CSC Audio',
  description: 'Find authorized CSC Audio distributors and dealers worldwide.',
}

export default function DistributorsPage() {
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
            Distributor Map
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Find authorized CSC Audio distributors and dealers in your region.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Distribution Network</h2>
            <p className="text-muted-foreground leading-relaxed">
              CSC Audio products are available through a carefully selected network of authorized distributors and dealers worldwide. Our partners share our commitment to quality service and professional expertise.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Find a Distributor</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With offices and authorized partners in 15+ countries, CSC Audio ensures rapid support and reliable supply chain management regardless of your location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-lg border border-[oklch(0.22_0_0)] bg-[oklch(0.12_0_0)]">
                <h3 className="font-semibold text-foreground mb-2">United Kingdom</h3>
                <p className="text-sm text-muted-foreground">Leicester Headquarters</p>
              </div>
              <div className="p-6 rounded-lg border border-[oklch(0.22_0_0)] bg-[oklch(0.12_0_0)]">
                <h3 className="font-semibold text-foreground mb-2">Europe</h3>
                <p className="text-sm text-muted-foreground">Fürth, Germany Hub</p>
              </div>
              <div className="p-6 rounded-lg border border-[oklch(0.22_0_0)] bg-[oklch(0.12_0_0)]">
                <h3 className="font-semibold text-foreground mb-2">Asia Pacific</h3>
                <p className="text-sm text-muted-foreground">Chandigarh, India</p>
              </div>
              <div className="p-6 rounded-lg border border-[oklch(0.22_0_0)] bg-[oklch(0.12_0_0)]">
                <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground">Request local distributor info</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[oklch(0.18_0_0)]">
            <p className="text-muted-foreground mb-4">
              To locate a distributor in your area or for wholesale inquiries, please contact our sales team.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Find a Distributor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
