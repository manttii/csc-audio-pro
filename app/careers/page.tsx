import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Careers at CSC Audio',
  description: 'Join our team and help shape the future of professional audio.',
}

export default function CareersPage() {
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
            Careers at CSC Audio
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Help us engineer the future of professional sound solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
            <p className="text-muted-foreground leading-relaxed">
              At CSC Audio, we believe that exceptional people create exceptional products. We're always looking for talented engineers, designers, and professionals who share our passion for audio excellence.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Why CSC Audio?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                <span>Cutting-edge innovation in professional audio technology</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                <span>Collaborative environment with world-class engineers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                <span>Commitment to quality, reliability, and sonic excellence</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                <span>Global reach with local expertise</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-[oklch(0.18_0_0)]">
            <p className="text-muted-foreground mb-4">
              For current openings and career opportunities, please contact our HR team.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
