import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import DownloadCTA from "@/components/download-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0e17] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#c9a55c"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <DownloadCTA />
        <Footer />
      </div>
    </main>
  )
}
