"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Target, Users, Mail, ArrowRight, BarChart } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ForBrandsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

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
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black pointer-events-none"></div>
      {/* Navigation */}
      <SiteHeader />

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden py-20 md:py-32"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 z-0"></div>
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
              <span className="mr-1 h-2 w-2 rounded-full bg-red-500"></span> EXCLUSIVE BRAND PROGRAM
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Reach{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Billions</span>{" "}
              of Viewers on YouTube Shorts
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 text-xl text-zinc-400">
              Partner with Shorts Rev, the only platform offering brand promotion in viral YouTube Shorts content from
              our exclusive network of top creators
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Dialog open={formOpen} onOpenChange={setFormOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                  >
                    Partner With Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-700">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-white">Partner With Shorts Rev</DialogTitle>
                    <DialogDescription className="text-zinc-400">
                      Fill out the form below and our team will get back to you within 24 hours
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-zinc-300">
                          Company Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your company name"
                          className="bg-zinc-800 border-zinc-700 text-zinc-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-300">
                          Business Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          className="bg-zinc-800 border-zinc-700 text-zinc-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-zinc-300">
                        Company Website
                      </Label>
                      <Input
                        id="website"
                        placeholder="https://yourcompany.com"
                        className="bg-zinc-800 border-zinc-700 text-zinc-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-zinc-300">
                        Estimated Budget
                      </Label>
                      <select
                        id="budget"
                        className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-md p-2"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m+">$1,000,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-zinc-300">
                        Tell us about your brand and goals
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please share details about your brand, target audience, and campaign goals"
                        className="bg-zinc-800 border-zinc-700 text-zinc-300 min-h-[120px]"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" className="mt-1" />
                      <Label htmlFor="terms" className="text-sm text-zinc-400">
                        I agree to the{" "}
                        <Link href="/terms" className="text-red-400 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-red-400 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </form>
                  <DialogFooter>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                      <Mail className="mr-2 h-4 w-4" /> Submit Inquiry
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Unparalleled Reach</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We have creators with 50mil+ views and we get combined 10billion+ views a month across our network of top
              YouTube Shorts creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center hover:border-red-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50M+</h3>
              <p className="text-zinc-400">Minimum views per creator in the last 28 days</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center hover:border-red-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10B+</h3>
              <p className="text-zinc-400">Monthly views across our creator network</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center hover:border-red-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Global</h3>
              <p className="text-zinc-400">Reach with creators across multiple countries</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Top Creators Section */}
      <motion.section
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">The Best Creator Network</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Shorts Rev is the only platform with an exclusive network of verified, high-performing YouTube Shorts
              creators who consistently deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center hover:border-red-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Verified</h3>
              <p className="text-zinc-400">
                All creators are manually verified and vetted for quality and authenticity
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center hover:border-red-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">High-Performing</h3>
              <p className="text-zinc-400">Minimum 50M views per creator in the last 28 days ensures maximum impact</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center hover:border-red-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Targeted</h3>
              <p className="text-zinc-400">Precise audience matching ensures your brand reaches the right viewers</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How BrandBoost Works For Brands
            </motion.h2>
            <motion.p
              className="mt-4 text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A simple process to get your brand in front of billions of viewers
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-red-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-zinc-400">Reach out to our team with your brand and campaign goals</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-red-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Campaign Setup</h3>
              <p className="text-zinc-400">
                We'll design a custom campaign to match your brand with the right creators
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-red-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Creator Matching</h3>
              <p className="text-zinc-400">We'll match your brand with top-performing creators in your niche</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-red-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Track Results</h3>
              <p className="text-zinc-400">Monitor campaign performance with detailed analytics and reporting</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Partner With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Shorts Rev
                </span>
              </h2>
              <p className="text-xl text-zinc-300 mb-8">
                Access to an exclusive network of top-performing YouTube Shorts creators with massive reach and
                engagement.
              </p>
              <div className="flex flex-col gap-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Access to creators with 50M+ views in the last 28 days</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Targeted audience matching based on your brand's needs</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Performance-based pricing with transparent reporting</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300">Official YouTube partner with proven track record</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-zinc-800/50 rounded-2xl border border-zinc-700 p-8 hover:bg-zinc-800/40 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center">Campaign Features</h3>
                <div className="grid grid-cols-1 gap-4">
                  <motion.div
                    className="bg-zinc-800 rounded-lg p-5 flex items-start gap-4 hover:bg-zinc-700/70 hover:border-red-500/50 border border-zinc-800 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Massive Reach</h4>
                      <p className="text-zinc-400">Get your brand in front of billions of engaged viewers</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-zinc-800 rounded-lg p-5 flex items-start gap-4 hover:bg-zinc-700/70 hover:border-red-500/50 border border-zinc-800 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Detailed Analytics</h4>
                      <p className="text-zinc-400">Track views, engagement, and campaign performance</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-zinc-800 rounded-lg p-5 flex items-start gap-4 hover:bg-zinc-700/70 hover:border-red-500/50 border border-zinc-800 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div className="bg-red-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Creator Matching</h4>
                      <p className="text-zinc-400">
                        We match your brand with creators that align with your target audience
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
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
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="mr-1 h-2 w-2 rounded-full bg-red-500"></span> FAQ
            </motion.div>
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">How much does it cost to run a campaign?</h3>
              <p className="text-zinc-400">
                Campaign costs vary based on your goals, target audience, and campaign duration. We offer flexible
                pricing options starting from $10,000 for smaller campaigns.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">How do you select creators for my brand?</h3>
              <p className="text-zinc-400">
                We match creators based on your brand values, target audience demographics, and content niche. All
                creators in our network have at least 50 million views in the last 28 days.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">How long does a typical campaign run?</h3>
              <p className="text-zinc-400">
                Most campaigns run for 30-60 days, but we can customize the duration based on your specific goals and
                budget.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">What reporting and analytics do you provide?</h3>
              <p className="text-zinc-400">
                We provide detailed reports including views, engagement rates, audience demographics, and ROI metrics.
                You'll have access to a real-time dashboard to track campaign performance.
              </p>
            </motion.div>
          </div>

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
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-3xl space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold">
              Ready to Reach Billions of Viewers?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-zinc-300">
              Partner with Shorts Rev today and get your brand in front of our massive audience
            </motion.p>

            <motion.div variants={fadeIn} className="mt-8">
              <Dialog open={formOpen} onOpenChange={setFormOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-700 text-red-400 hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
              </Dialog>
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
