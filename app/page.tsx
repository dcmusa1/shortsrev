"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Music, Megaphone, Disc } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black text-white font-sans relative">
      {/* Main background overlay to ensure consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black pointer-events-none"></div>

      {/* Navigation */}
      <SiteHeader />

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate="visible"
        variants={fadeIn}
      >
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-3xl space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400"
            >
              <span className="mr-1 h-2 w-2 rounded-full bg-red-500"></span> Shorts Rev
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Maximize Your YouTube Shorts{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Monetization
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 text-xl text-zinc-400">
              Shorts Rev is the premier platform connecting YouTube Shorts creators with top-tier music and brand
              opportunities. We empower creators to earn while creating engaging content and help artists and labels
              expand their reach.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/for-brands">For Brands</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/for-creators">For Creators</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/for-artists-labels">For Artists & Labels</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Revenue Stats Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  $700,000+
                </span>{" "}
                generated in 2024
              </h2>
              <p className="text-xl text-zinc-300">
                Our creators earn rewards by promoting artists’ music, label releases, and brands through YouTube
                Shorts, with monthly payouts and detailed performance tracking.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500/20 p-1 rounded">
                    <svg className="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-zinc-300">Transparent earnings system</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-500/20 p-1 rounded">
                    <svg className="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-zinc-300">Monthly payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-500/20 p-1 rounded">
                    <svg className="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-zinc-300">Detailed performance analytics</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-red-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-center mb-6">How We Support Your Success</h3>
              <div className="space-y-4">
                <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="bg-red-500/20 p-2 rounded">
                      <svg
                        className="h-5 w-5 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Growth Strategy</h4>
                      <p className="text-zinc-400">
                        Personalized guidance to maximize your channel's growth and revenue potential
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="bg-red-500/20 p-2 rounded">
                      <svg
                        className="h-5 w-5 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Revenue Optimization</h4>
                      <p className="text-zinc-400">
                        Advanced tools to track and maximize your earnings from every video
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="bg-red-500/20 p-2 rounded">
                      <svg
                        className="h-5 w-5 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Music Curation</h4>
                      <p className="text-zinc-400">
                        Custom music recommendations based on your content style and audience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Official Partners Section */}
      <motion.section
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Official Partners</h2>
            <p className="text-zinc-400">We work with industry leaders to provide unique monetization opportunities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="h-16 flex items-center justify-center">
                <Image src="/thumbmedia_logo.png" alt="Thumb Media Logo" width={150} height={40} className="h-auto" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 flex items-center justify-center">
                <Image src="/youtube-logo.png" alt="YouTube Logo" width={70} height={50} className="h-auto" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 flex items-center justify-center">
                <Image src="/sony-music-logo-new.png" alt="Sony Music Logo" width={90} height={90} className="h-auto" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 flex items-center justify-center">
                <Image src="/aegis-logo-white.svg" alt="Aegis Logo" width={100} height={40} className="h-auto" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 flex items-center justify-center">
                <Image src="/freedom-logo.svg" alt="Freedom Logo" width={120} height={40} className="h-auto" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        id="key-features"
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Creators Can Unlock New Revenue Streams
            </motion.h2>
            <motion.p
              className="mt-4 text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore our key features designed to maximize your earnings and grow your audience on YouTube Shorts
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* BrandBoost */}
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">BrandBoost</h3>
              <p className="text-zinc-400">
                Collaborate with top brands and get paid to promote their brands in your YouTube Shorts.
              </p>
              <p className="text-zinc-400">
                <br />
                <span className="font-medium">Benefits:</span>
              </p>
              <ul className="list-disc pl-5 text-zinc-400">
                <li>Earn while creating engaging content</li>
                <li>Get paid to promote brands in your YouTube Shorts</li>
                <li>Access exclusive brand partnership opportunities</li>
              </ul>
              <Link href="/brandboost" className="text-red-400 hover:text-red-300">
                Learn More
              </Link>
            </motion.div>

            {/* Artist & Label Promotions */}
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Music Promotions</h3>
              <p className="text-zinc-400">
                Connect with top artists and labels to promote their music in your YouTube Shorts.
              </p>
              <p className="text-zinc-400">
                <br />
                <span className="font-medium">Benefits:</span>
              </p>
              <ul className="list-disc pl-5 text-zinc-400">
                <li>Get paid to promote popular artists & music</li>
                <li>Earn while creating content using popular artist music</li>
                <li>Collab with popular artists & get sponsored</li>
              </ul>
              <Link href="/for-artists-labels" className="text-red-400 hover:text-red-300">
                Learn More
              </Link>
            </motion.div>

            {/* ClipsRev */}
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ClipsRev</h3>
              <p className="text-zinc-400">
                Get paid to clip viral content and help top creators grow their YouTube Shorts channels.
              </p>
              <p className="text-zinc-400">
                <br />
                <span className="font-medium">Benefits:</span>
              </p>
              <ul className="list-disc pl-5 text-zinc-400">
                <li>Get paid when your clipped content goes viral</li>
                <li>Access exclusive clipping opportunities</li>
                <li>Work with celebrities, brands, and influencers to earn by clipping their content</li>
              </ul>
              <Link href="/clipsrev" className="text-red-400 hover:text-red-300">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* For Brands Section - Removed border-t */}
      <motion.section
        id="for-brands"
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Are You a Brand Looking to Promote Your Products?
            </motion.h2>
            <motion.p
              className="mt-4 text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Reach millions of engaged viewers through our network of YouTube Shorts creators
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-8 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-red-500/20 w-16 h-16 rounded-lg flex items-center justify-center shrink-0">
                  <Megaphone className="h-8 w-8 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">BrandBoost for Advertisers</h3>
                  <p className="text-zinc-400 mb-6">
                    Connect your brand with our network of YouTube Shorts creators to reach millions of engaged viewers.
                    Our platform helps you find the perfect creators to represent your brand and products authentically.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Access to 10,000+ creators</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Targeted audience matching</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Campaign performance tracking</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Authentic brand integration</span>
                    </div>
                  </div>
                  <Button className="bg-red-500 hover:bg-red-600 transition-all duration-300" asChild>
                    <Link href="/for-brands">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* For Artists & Labels Section */}
      <motion.section
        id="for-artists-labels"
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Are You an Artist or Label Looking to Promote Your Music?
            </motion.h2>
            <motion.p
              className="mt-4 text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get your music featured in viral YouTube Shorts and reach new audiences
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-8 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-red-500/20 w-16 h-16 rounded-lg flex items-center justify-center shrink-0">
                  <Disc className="h-8 w-8 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Music Promotion Platform</h3>
                  <p className="text-zinc-400 mb-6">
                    Get your music featured in viral YouTube Shorts and reach millions of new listeners. Our platform
                    connects artists and labels with creators who can help your music go viral through engaging
                    short-form content.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Update 1 Start */}
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Reach millions of new listeners</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Boost streaming numbers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Earn royalties from viral content</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1">
                        <svg className="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Track promotion performance</span>
                    </div>
                  </div>
                  <Button className="bg-red-500 hover:bg-red-600 transition-all duration-300" asChild>
                    <Link href="/for-artists-labels">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="contact"
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-3xl space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold">
              Ready to Join Shorts Rev?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-zinc-300">
              Join thousands of artists and creators already earning with Shorts Rev's music promotion programs.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 w-full sm:w-auto transition-all duration-300"
                  asChild
                >
                  <Link href="/creator-application">Apply as Creator</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 w-full sm:w-auto transition-all duration-300"
                  asChild
                >
                  <Link href="/label-submission">Submit Music</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 w-full sm:w-auto transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 w-full sm:w-auto transition-all duration-300"
                  asChild
                >
                  <Link href="/faq">FAQ</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.p variants={fadeIn} className="text-sm text-zinc-500 mt-6">
              Application review typically takes 1-2 business days
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

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
