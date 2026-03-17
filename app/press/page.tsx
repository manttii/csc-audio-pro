import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Press & Media | CSC Audio',
  description: 'CSC Audio press releases, media kit, and news coverage.',
}

export default function PressPage() {
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
            Press & Media
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Latest news, announcements, and coverage from CSC Audio.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Press Releases</h2>
            <p className="text-muted-foreground leading-relaxed">
              Stay updated with the latest announcements from CSC Audio, including new product releases, industry partnerships, and company milestones.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Media Kit</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Access our complete media kit including brand guidelines, product photos, and company information for media coverage and publications.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Installations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Discover case studies and featured installations showcasing CSC Audio systems deployed in mission-critical venues around the world.
            </p>
          </div>

          <div className="pt-8 border-t border-[oklch(0.18_0_0)]">
            <p className="text-muted-foreground mb-4">
              For media inquiries and interview requests, please reach out to our communications team.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Contact Press
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
