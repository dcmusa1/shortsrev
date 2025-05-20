"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})

  const faqItems: FAQItem[] = [
    // Music Promotions FAQs
    {
      question: "How does the Music Promotions program work?",
      answer:
        "The Music Promotions program connects creators with licensed music from major labels and artists. By featuring music from our catalog, creators can boost their earnings based on the performance of their videos. We handle all licensing and copyright issues, allowing creators to focus on making great content while earning from their videos.",
      category: "Music Promotions",
    },
    {
      question: "How do I get paid through the Music Promotions program?",
      answer:
        "We provide monthly payments through various payment methods including PayPal, bank transfers, and other supported platforms. Detailed analytics are available in your dashboard to track your earnings.",
      category: "Music Promotions",
    },
    {
      question: "What music can I use in my YouTube Shorts?",
      answer:
        "You can use any music available in our extensive library, which includes tracks from major labels like Sony Music and independent artists. Our catalog is regularly updated with trending and popular tracks to help your content perform better.",
      category: "Music Promotions",
    },
    {
      question: "Will I get copyright strikes using Shorts Rev music?",
      answer:
        "No, you will not receive copyright strikes when using music properly through our platform. We have official licensing agreements with all music providers in our library, ensuring your content is protected from copyright claims.",
      category: "Music Promotions",
    },
    {
      question: "How much can I earn from the Music Promotions program?",
      answer:
        "Earnings vary based on your content's performance, the music you promote, and your audience engagement. Some creators earn a few hundred dollars per month, while top performers can earn thousands.",
      category: "Music Promotions",
    },

    // BrandBoost FAQs
    {
      question: "What is BrandBoost?",
      answer:
        "BrandBoost is Shorts Rev's exclusive, invite-only program that connects top-performing creators with brands looking to promote their products or services. Creators get paid to feature these brands in their content while maintaining their own style and audience connection.",
      category: "BrandBoost",
    },
    {
      question: "How do I qualify for BrandBoost campaigns?",
      answer:
        "To qualify for BrandBoost, your channel must have at least 50 million views on YouTube Shorts in the last 28 days, be an active and approved Shorts Rev creator, and consistently comply with YouTube's community guidelines and Shorts Rev's content policies. BrandBoost is available strictly by invitation to creators who meet our quality and performance standards.",
      category: "BrandBoost",
    },
    {
      question: "How much can I earn from BrandBoost campaigns?",
      answer:
        "BrandBoost campaign payments vary depending on your audience size, engagement rates, and the specific requirements of each brand. Payments typically range from $500 to $5,000+ per video, with clear terms established before you begin creating content.",
      category: "BrandBoost",
    },
    {
      question: "How often will I receive BrandBoost opportunities?",
      answer:
        "Opportunities depend on your channel's ongoing performance and the availability of matching campaigns. As your channel grows and maintains strong results, you'll receive more frequent offers. You can always decline campaigns that don't align with your content or interests.",
      category: "BrandBoost",
    },

    // ClipsRev FAQs
    {
      question: "What is ClipsRev?",
      answer:
        "ClipsRev is our program that pays creators to clip trending and viral content. You'll earn revenue when your clips perform well on the platform.",
      category: "ClipsRev",
    },
    {
      question: "How do I earn money through ClipsRev?",
      answer:
        "You can earn by clipping the content provided in campaigns and fulfilling the requirements requested by the campaign owners.",
      category: "ClipsRev",
    },
    {
      question: "What type of content can I clip for ClipsRev?",
      answer:
        "You can clip content from approved sources including partner channels, licensed content libraries, and public domain material. We provide clear guidelines on what content is eligible for clipping to ensure all clips comply with copyright laws and platform policies.",
      category: "ClipsRev",
    },
    {
      question: "Where can I post the content?",
      answer:
        "We currently have active campaigns for YouTube, TikTok, Instagram, and Snapchat, where you can post your clipped content.",
      category: "ClipsRev",
    },
    {
      question: "How much can I earn from ClipsRev?",
      answer:
        "Earnings vary based on the performance of your clips and the volume of content you produce. Active clippers typically earn between $500-$8,000 monthly, with top performers earning significantly more. The program offers scalable income potential as you improve your clipping skills.",
      category: "ClipsRev",
    },

    // Affiliate Program FAQs
    {
      question: "What is the Shorts Rev Affiliate Program?",
      answer:
        "The Shorts Rev Affiliate Program allows you to earn commission by referring qualified creators to our platform. Affiliates receive access to a dedicated panel where they can generate invite codes to onboard new creators who meet our standards. Earnings are based on the performance and revenue generated by the creators you refer.",
      category: "Affiliate Program",
    },
    {
      question: "How much commission do affiliates earn?",
      answer:
        "As an affiliate, you can earn between 5% to 20% commission from the Shorts Rev pool for creators you refer to the platform. Commission rates vary depending on various factors and the program the referred creator joins.",
      category: "Affiliate Program",
    },
    {
      question: "Who can join the Affiliate Program?",
      answer:
        "The Affiliate Program is open to existing Shorts Rev creators in good standing, as well as industry professionals, managers, and influencers with relevant networks. Applications are reviewed to ensure affiliates can provide quality referrals. If you're interested in becoming an Affiliate, please <a href='/contact' style='color: #f87171; text-decoration: underline; font-weight: 500;'>Contact Us</a>.",
      category: "Affiliate Program",
    },
    {
      question: "How do I track my affiliate earnings?",
      answer:
        "All affiliate activity is tracked in your Affiliate Dashboard, where you can monitor invite codes, conversions, pending commissions, and paid earnings. The dashboard provides detailed analytics on the performance of your referrals.",
      category: "Affiliate Program",
    },
    {
      question: "When and how do I get paid for affiliate referrals?",
      answer:
        "Affiliate commissions are paid monthly during the regular Shorts Rev payment cycle. Payments are made through the same methods available for creator payouts, including PayPal and bank transfers.",
      category: "Affiliate Program",
    },

    // Program Integration FAQs
    {
      question: "Can I participate in multiple Shorts Rev programs simultaneously?",
      answer:
        "Yes, you can participate in multiple programs simultaneously. Many successful creators combine Music Promotions, BrandBoost, and ClipsRev to maximize their earnings. Each program has its own dashboard section for easy management.",
      category: "Program Integration",
    },
    {
      question: "How do I balance requirements from different programs?",
      answer:
        "Our programs are designed to complement each other. For example, you can use licensed music from the Music Promotions program in your BrandBoost campaign videos. Our team can help you develop a strategy that effectively integrates multiple programs.",
      category: "Program Integration",
    },
    {
      question: "Are there any conflicts between programs I should be aware of?",
      answer:
        "The main consideration is exclusivity requirements. Some brand campaigns may require category exclusivity, meaning you can't promote competing brands during the campaign period. Our team will clearly communicate any restrictions before you commit to a campaign.",
      category: "Program Integration",
    },
    {
      question: "Do I need separate applications for each program?",
      answer:
        "Yes, each program requires a separate application as they have different requirements and evaluation criteria. However, being accepted into one program often streamlines the approval process for others as we already have your basic information and performance history.",
      category: "Program Integration",
    },
    {
      question: "Can I use the same content across multiple programs?",
      answer:
        "In many cases, yes. For example, you can create content that uses music from our Music Promotions program while also incorporating a brand integration from BrandBoost. However, specific requirements will be provided for each campaign or assignment.",
      category: "Program Integration",
    },

    // Technical & Support FAQs
    {
      question: "How do I contact support if I have issues?",
      answer:
        "You can contact our support team through two main channels:<br/><br/>1) Visit our <a href='/contact' style='color: #f87171; text-decoration: underline; font-weight: 500;'>Contact Page</a> to get in touch with our team<br/><br/>2) Join our <a href='https://discord.gg/shortsrev' style='color: #f87171; text-decoration: underline; font-weight: 500;'>Discord</a> and open a support ticket",
      category: "Technical & Support",
    },
    {
      question: "What should I do if my payment is delayed?",
      answer:
        "If your payment is delayed beyond our standard processing time (10 business days after the end of the month), first check your dashboard for any notifications about payment issues. If there are no notifications, contact support with your payment ID and we'll investigate immediately.",
      category: "Technical & Support",
    },
    {
      question: "How do I update my payment information?",
      answer:
        "You can update your payment information in the Settings section of your dashboard. Go to Account > Payment Settings, and you'll be able to add or modify your payment methods. Changes may take 1-2 business days to process for security verification.",
      category: "Technical & Support",
    },
    {
      question: "What should I do if my YouTube channel gets a strike?",
      answer:
        "If your channel receives a strike, contact our support team immediately with details of the strike. Our copyright team will investigate and help resolve legitimate claims related to content used through our platform. We cannot assist with strikes unrelated to Shorts Rev content.",
      category: "Technical & Support",
    },
    {
      question: "Is there a minimum payout threshold?",
      answer:
        "Yes, the minimum payout threshold is $50 for most payment methods. Earnings below this amount will roll over to the next payment period. For wire transfers, the minimum threshold is $100 due to associated banking fees.",
      category: "Technical & Support",
    },
  ]

  const categories = Array.from(new Set(faqItems.map((item) => item.category)))

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  const toggleQuestion = (question: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }))
  }

  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === null || item.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden py-20 md:py-24 pb-8 md:pb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-900/20 to-black"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              className="mx-auto max-w-3xl space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400"
              >
                <HelpCircle className="mr-1 h-3 w-3" /> KNOWLEDGE BASE
              </motion.div>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Frequently
                </span>{" "}
                Asked Questions
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="mt-6 text-xl text-zinc-400"
              >
                Find answers to common questions about Shorts Rev programs and services
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        <section className="pt-0 pb-12 md:pb-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <Input
                  type="search"
                  placeholder="Search for questions..."
                  className="pl-10 bg-zinc-800/50 border-zinc-700 focus:border-red-500 focus:ring-red-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                <Button
                  variant={activeCategory === null ? "default" : "outline"}
                  className={
                    activeCategory === null
                      ? "bg-red-500 hover:bg-red-600"
                      : "border-zinc-700 text-zinc-300 hover:border-red-500/50"
                  }
                  onClick={() => setActiveCategory(null)}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={
                      activeCategory === category
                        ? "bg-red-500 hover:bg-red-600"
                        : "border-zinc-700 text-zinc-300 hover:border-red-500/50"
                    }
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-6">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-500/50"
                    >
                      <button
                        className="flex justify-between items-center w-full p-4 text-left"
                        onClick={() => toggleQuestion(faq.question)}
                      >
                        <h3 className="font-medium text-lg">{faq.question}</h3>
                        {expandedQuestions[faq.question] ? (
                          <ChevronUp className="h-5 w-5 text-red-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-red-400" />
                        )}
                      </button>
                      {expandedQuestions[faq.question] && (
                        <div className="p-4 pt-6 border-t border-zinc-800">
                          <p className="text-zinc-300" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-zinc-400">No results found for "{searchQuery}"</p>
                    <Button className="mt-4 bg-red-500 hover:bg-red-600" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  </div>
                )}
              </div>

              {/* Contact Support */}
              <div className="mt-16 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-red-500/70 p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-zinc-400 mb-6">
                    Our support team is ready to help you with any questions or issues you might have.
                  </p>
                  <Button className="bg-red-500 hover:bg-red-600" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
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
