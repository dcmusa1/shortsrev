"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"

export default function ClipsRevPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
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
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black text-white font-sans">
      {/* Navigation */}
      <SiteHeader />

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate="visible"
        variants={fadeIn}
      >
        {/* Hero gradient with blend at bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black pointer-events-none"></div>

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
              <Lock className="mr-1 h-3 w-3" /> EXCLUSIVE PROGRAM
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">ClipsRev</span>
              <br />
              Get Paid to Clip Viral Content
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 text-xl text-zinc-400">
              Earn $1-5 RPM on average by clipping content for TikTok, Instagram, and YouTube. Join Shorts Rev's
              Clippers Program and access a $500k monthly budget!
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/creator-application">Apply Now</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Platforms Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Section background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-4xl space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
              Clip and Upload to Top Platforms
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Maximize your reach by clipping and uploading content across these popular platforms.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">YouTube</h3>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    <path d="M18.737 5.732c.79-.002 1.427.63 1.427 1.412-.001.786-.637 1.423-1.424 1.423-.79 0-1.428-.636-1.427-1.425 0-.785.637-1.41 1.424-1.41z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">TikTok</h3>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2C22,19.4 19.4,22 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8C2,4.6 4.6,2 7.8,2M7.6,4C5.7,4 4.1,5.6 4.1,7.5V16.5C4.1,18.4 5.7,20 7.6,20H16.4C18.3,20 19.9,18.4 19.9,16.5V7.5C19.9,5.6 18.3,4 16.4,4H7.6M18.8,7.3C18.8,7.7 18.4,8 18,8.1C17.6,8.1 17.3,7.7 17.2,7.3C17.2,6.9 17.6,6.6 18,6.5C18.4,6.5 18.8,6.9 18.8,7.3M12,5.8C15.4,5.8 18,8.4 18,11.8C18,15.3 15.4,17.9 12,17.9C8.6,17.9 6,15.3 6,11.8C6,8.4 8.6,5.8 12,5.8M12,7.7C9.7,7.7 7.9,9.5 7.9,11.8C7.9,14 10.1,15.8 12,15.8C13.9,15.8 16.1,14 16.1,11.8C16.1,9.5 13.9,7.7 12,7.7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Instagram</h3>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.593z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Snapchat</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-4xl space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400"
            >
              Key Features
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
              Unlock New Revenue Streams
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Our platform helps you monetize your content in ways you never thought possible.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-red-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Monetize Your Content</h3>
                <p className="text-zinc-400">
                  Turn your existing content into revenue-generating clips with our advanced AI tools.
                </p>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-red-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Reach New Audiences</h3>
                <p className="text-zinc-400">
                  Expand your reach with optimized clips designed for platforms like TikTok, Instagram, and YouTube.
                </p>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-red-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Referral Program</h3>
                <p className="text-zinc-400">
                  Earn additional income by referring other creators to our platform and grow your network.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-4xl space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Join thousands of creators who are already monetizing their content with ClipsRev.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/creator-application">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Celebs/Streamers/Influencers Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-4xl space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
              Want Your Content Clipped and Seen by Millions?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Join top celebrities, streamers, and influencers who trust ClipsRev to maximize their content reach.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Celebrity"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Celebrities</h3>
                <p className="text-zinc-400">
                  Top celebrities use our platform to repurpose their interviews, podcasts, and appearances into viral
                  clips.
                </p>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Streamer"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Streamers</h3>
                <p className="text-zinc-400">
                  Gaming and live streamers maximize their hours of content by turning key moments into shareable clips.
                </p>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 flex flex-col items-center hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Influencer"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Influencers</h3>
                <p className="text-zinc-400">
                  Content creators across all niches use our tools to expand their reach and grow their audience.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                asChild
              >
                <Link href="/contact">
                  Get Your Content Featured
                  <svg
                    className="h-5 w-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-4xl space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400"
            >
              FAQ
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Everything you need to know about the ClipsRev program
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-left hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-2">How much can I earn with ClipsRev?</h3>
                <p className="text-zinc-400">
                  Earnings vary based on the performance of your clips and the volume of content you produce. Active
                  clippers typically earn between $500-$8,000 monthly, with top performers earning significantly more.
                  The program offers scalable income potential as you improve your clipping skills.
                </p>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-left hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">What type of content can I clip?</h3>
                <p className="text-zinc-400">
                  You can clip content from approved sources including partner channels, licensed content libraries, and
                  public domain material. We provide clear guidelines on what content is eligible for clipping to ensure
                  all clips comply with copyright laws and platform policies.
                </p>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-left hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">How do I get paid?</h3>
                <p className="text-zinc-400">
                  We provide monthly payments through various payment methods including PayPal, bank transfers, and
                  other supported platforms. Detailed analytics are available in your dashboard to track your earnings.
                </p>
              </motion.div>

              <motion.div
                className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-left hover:bg-zinc-800/50 transition-all duration-300 hover:border-red-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">What are the requirements to join?</h3>
                <p className="text-zinc-400">
                  We're looking for clippers who know how to take the content we provide, cut the best moments, and turn
                  them into viral content. You don't need to find your own videos, we give you everything. You just need
                  to know how to edit clips in a way that grabs attention, gets views, and reaches new audiences.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-zinc-300">
                Still have more questions? Check our complete{" "}
                <Link href="/faq" className="text-red-400 hover:text-red-300 underline font-medium">
                  FAQ
                </Link>{" "}
                page
              </p>
            </motion.div>
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
