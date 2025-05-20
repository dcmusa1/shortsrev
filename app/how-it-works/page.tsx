import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, CheckCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How Shorts Rev Works</h1>
              <p className="text-zinc-400 md:text-xl max-w-2xl mx-auto">
                Learn how our platform connects creators with official music and generates revenue
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <div className="aspect-video overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/50">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <p className="text-zinc-400">Video demonstration coming soon</p>
                    <p className="text-sm text-zinc-500 mt-2">Check back later for our detailed walkthrough</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 space-y-16">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400 mb-4">
                      Step 1
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Apply for the Program</h2>
                    <p className="text-zinc-400 mb-6">
                      Submit your application through our simple form. We'll review your channel and content to ensure
                      it meets our requirements.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Quick application process</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">2-3 business day review time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">No minimum subscriber requirement</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6">
                    <div className="aspect-video rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Application Process"
                        width={600}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="order-2 md:order-1 bg-zinc-800/50 rounded-xl border border-zinc-700 p-6">
                    <div className="aspect-video rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Music Library"
                        width={600}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400 mb-4">
                      Step 2
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Access Our Music Library</h2>
                    <p className="text-zinc-400 mb-6">
                      Once approved, you'll gain access to our extensive library of licensed music from major labels and
                      independent artists.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">10,000+ tracks available</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">New music added weekly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Trending and popular tracks</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400 mb-4">
                      Step 3
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Create and Monetize</h2>
                    <p className="text-zinc-400 mb-6">
                      Use our licensed music in your Shorts content and start earning revenue through our partnership
                      program.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">No copyright strikes or claims</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Transparent revenue sharing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Monthly payments</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6">
                    <div className="aspect-video rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Monetization Process"
                        width={600}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-lg h-12 px-8" asChild>
                  <Link href="/creator-application">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="col-span-2">
              <Image
                src="/color-wordmark-transparent.png"
                alt="Shorts Rev Logo"
                width={240}
                height={80}
                className="h-16 w-auto mb-4 transition-all duration-300 hover:scale-105"
              />
              <p className="text-zinc-400 mb-4">
                Connecting creators and artists to monetize
                <br />
                music in the YouTube Shorts ecosystem.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.youtube.com/@ShortsRevMusic"
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link
                  href="https://discord.gg/shortsrev"
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.2 0 2.156 1.086 2.156 2.419c0 1.334-.955 2.419-2.156 2.419zm7.962 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.2 0 2.156 1.086 2.156 2.419c0 1.334-.955 2.419-2.156 2.419z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/shortsrev"
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/shortsrev"
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/clipsrev" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    ClipsRev
                  </Link>
                </li>

                <li>
                  <Link href="/brandboost" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    BrandBoost
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/for-creators" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    For Creators
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-artists-labels"
                    className="text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    For Artists & Labels
                  </Link>
                </li>
                <li>
                  <Link href="/for-brands" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    For Brands
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
            <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Shorts Rev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
