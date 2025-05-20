"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import Link from "next/link"
import { Upload, X } from "lucide-react"

export default function CreatorsGuide() {
  const [showAttachDetails, setShowAttachDetails] = useState(false)
  const [showRequestTrackModal, setShowRequestTrackModal] = useState(false)
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null)
  const voiceOverRef = useRef<HTMLDivElement>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [libraryExplored, setLibraryExplored] = useState<string>("yes")

  useEffect(() => {
    if (highlightedSection) {
      const timer = setTimeout(() => {
        setHighlightedSection(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [highlightedSection])

  const scrollToVoiceOver = () => {
    setHighlightedSection("voice-over")
    setShowAttachDetails(false) // Close the modal when clicking on the relevant guideline
    if (voiceOverRef.current) {
      voiceOverRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // Center the element in the viewport
      })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // In a real app, you would submit the form data to your backend here
    setTimeout(() => {
      setShowRequestTrackModal(false)
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <DashboardLayout portalType="creators">
      <div className="space-y-8 max-w-4xl mx-auto pb-12">
        <h1 className="text-3xl font-bold mb-8">User Guides</h1>
        <h2 className="text-2xl font-bold mb-6">Music Promotions</h2>

        {/* How to work with Shorts Rev */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How to work with Shorts Rev
            </h2>
            <p className="mb-4">
              You earn additional revenue <strong>on top of your existing YT Shorts</strong> monetization by using{" "}
              <Link href="/dashboards/creators/music" className="text-red-500 hover:underline">
                our tracks
              </Link>{" "}
              in YT Shorts under 60 seconds when YouTube recognizes them. To ensure recognition:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Use only one track per video</li>
              <li>
                <button onClick={() => setShowAttachDetails(true)} className="text-red-500 hover:underline">
                  Attach your Shorts to the track via the mobile app
                </button>{" "}
                with the volume above 20%
              </li>
            </ul>
            <p>Follow the guidelines below to make sure you get paid!</p>
          </div>
        </div>

        {/* How to find the right music for your Shorts */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How to find the right music for your Shorts
            </h2>
            <p className="mb-6">
              You can browse and listen to eligible tracks in the <strong>"For YT Shorts"</strong> tab of{" "}
              <Link href="/dashboards/creators/music" className="text-red-500 hover:underline">
                Shorts Rev Music Library
              </Link>
              . The list is regularly updated—some tracks are removed, and new ones are added.
            </p>

            <div className="tm-steps__body mt-6">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-medium">1</span>
                    </div>
                    <div className="text-center">
                      <p>
                        Go to{" "}
                        <Link href="/dashboards/creators/music" className="text-red-500 hover:underline">
                          Shorts Rev Music Library
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-medium">2</span>
                    </div>
                    <div className="text-center">
                      <p>Find tracks that suit your content in the "For YT Shorts" tab</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-medium">3</span>
                    </div>
                    <div className="text-center">
                      <p>
                        Copy the track name and attach your Shorts to the chosen track as described in the next section.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to attach a track to Shorts */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How to attach a track to Shorts
            </h2>
            <p className="mb-4">
              You'll get paid only if YouTube successfully recognizes the track used in your Shorts. To make sure this
              happens, attach Shorts under 60 seconds to the track through the YouTube mobile app.
            </p>

            <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <div className="bg-amber-500 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-black mt-0.5">
                  <span className="font-bold">i</span>
                </div>
                <div>
                  <p>
                    <strong>Before publishing, make sure your chosen track is still available</strong> on Shorts Rev
                    Music Library, as the selection updates regularly.
                  </p>
                  <p className="mt-2">
                    Payment won't be provided for Shorts with tracks that have been removed from the program.
                  </p>
                </div>
              </div>
            </div>

            <div className="tm-steps__body mt-6">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-medium">1</span>
                    </div>
                    <div className="text-center">
                      <p>Upload your Shorts through the YouTube mobile app</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-medium">2</span>
                    </div>
                    <div className="text-center">
                      <p>Find the track you selected earlier and add it to your Shorts</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-medium">3</span>
                    </div>
                    <div className="text-center">
                      <p>Publish your Shorts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowAttachDetails(true)}
                className="px-4 py-2 border border-zinc-600 rounded-md hover:bg-zinc-700 transition-colors"
              >
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Can I participate in the program if my Shorts include Voice Over or SFX effects */}
        <div
          ref={voiceOverRef}
          className={`bg-zinc-900 border ${highlightedSection === "voice-over" ? "border-red-500" : "border-zinc-800"} rounded-lg overflow-hidden transition-colors duration-300`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Can I participate in the program if my Shorts include Voice Over or SFX effects over a Shorts Rev track?
            </h2>
            <p>
              Yes, as long as you follow these publishing guidelines: add your Voice Over or SFX effects during the
              editing stage, and export the video without the Shorts Rev track—your video should not contain any music
              at this point. When{" "}
              <button onClick={() => setShowAttachDetails(true)} className="text-red-500 hover:underline">
                publishing through the YouTube mobile app
              </button>
              , keep the original track volume on and add the Shorts Rev track, setting its volume to at least 20%.
            </p>
          </div>
        </div>

        {/* What should I do if I can't find music in Shorts Rev library that fits my content? */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What should I do if I can't find music in Shorts Rev library that fits my content?
            </h2>
            <p>
              Use{" "}
              <button onClick={() => setShowRequestTrackModal(true)} className="text-red-500 hover:underline">
                this form
              </button>{" "}
              to request tracks that are specifically tailored to your content.
            </p>
          </div>
        </div>

        {/* Can I participate in the program if I publish Shorts using the desktop version */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Can I participate in the program if I publish Shorts using the desktop version of YouTube?
            </h2>
            <p>
              No, because publishing Shorts from a desktop reduces the chances of YouTube recognizing your track. Tracks
              are automatically recognized only when uploaded through the{" "}
              <button onClick={() => setShowAttachDetails(true)} className="text-red-500 hover:underline">
                YouTube mobile app
              </button>
              .
            </p>
          </div>
        </div>

        {/* Will using music in Shorts reduce the video monetization */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Will using music in Shorts reduce the video monetization I already receive?
            </h2>
            <p>
              No, this program offers you additional revenue on top of what you already earn.{" "}
              <strong>Your existing earnings remain unaffected.</strong> Read more about why using music in Shorts
              doesn't impact video monetization in{" "}
              <a
                href="https://support.google.com/youtube/answer/12504220?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                this article from Google
              </a>
              .
            </p>
          </div>
        </div>

        {/* Is there a risk of losing video monetization */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Is there a risk of losing video monetization due to copyright issues when using your music?
            </h2>
            <p>
              Using our music in YT Shorts under 60 seconds is completely safe for your channel, with no risk of losing
              monetization.
            </p>
          </div>
        </div>

        {/* How much can I earn */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How much can I earn by using your music in my YT Shorts?
            </h2>
            <p className="mb-4">
              When you use music in your YT Shorts, the track generates its own revenue, influenced by factors like your
              audience's geographic location, the length of the Shorts, and your video's watch time. For Shorts under 30
              seconds, music revenue is typically 10—30% of the video revenue, while for Shorts lasting 30—60 seconds,
              it can range from 50% to 100%.
            </p>

            <p className="mb-4">
              We take care of everything—from creating music tracks to delivering them directly to YouTube and managing
              the complexities of rights. This allows you to focus on creating great content and increase your
              monetization by 50% of the music revenue generated in your Shorts.
            </p>

            <p>
              If your content using our tracks generates a high volume of views, we're open to discussing an even more
              favorable rate on an individual basis.
            </p>
          </div>
        </div>

        {/* What happens to my earnings if the track I used is removed */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What happens to my earnings if the track I used is removed from the Shorts Rev library after my video is
              published?
            </h2>
            <p className="mb-4">
              If your content meets{" "}
              <a
                href="https://support.google.com/youtube/answer/1311392"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                YouTube's monetization policies
              </a>{" "}
              and earns revenue through standard monetization methods (like ad revenue from the{" "}
              <a
                href="https://support.google.com/youtube/answer/72851"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                YouTube Partner Program
              </a>
              ), you will continue to receive your share of earnings, even if the track is later removed from the Shorts
              Rev library. In other words, as long as your video continues to generate views and revenue, your earnings
              remain unaffected.
            </p>

            <p>
              However, if your content does not comply with YouTube's monetization policies and relies solely on music
              revenue, you will only receive your share of the music earnings accrued up until the point when the track
              was removed from the Shorts Rev library.
            </p>
          </div>
        </div>

        {/* When will I receive my payment */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              When will I receive my payment?
            </h2>
            <p>
              Payments are made on the last day of the month following the month of the video's publication. For
              example, if your video was published in January, you will receive the payment at the end of February. This
              schedule is due to YouTube's reporting cycle, which has a one-month delay.
            </p>
          </div>
        </div>

        {/* Can I track the earnings of each individual video */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Can I track the earnings of each individual video?
            </h2>
            <p>
              Yes, at the end of each month, detailed analytics for all channels participating in Shorts Rev become
              available on your{" "}
              <Link href="/dashboards/creators/dashboard" className="text-red-500 hover:underline">
                Dashboard
              </Link>
              . This allows you to see the revenue for each video separately. Additionally, we are working on adding
              real-time analytics to provide even more up-to-date insights.
            </p>
          </div>
        </div>

        {/* Will I continue to earn revenue from older videos */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Will I continue to earn revenue from older videos, even if I've already received a payout?
            </h2>
            <p>
              Yes, as long as your video continues to gain views and generate revenue, we will keep paying you your
              share. For example, if your video was published in January and you received revenue for views during that
              month, but the video also gained views in February, March, and April, you will receive additional revenue
              share for each of those months as well.
            </p>
          </div>
        </div>

        {/* Can I use the music on Facebook or TikTok */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Can I use the music on Facebook or TikTok and earn money from it?
            </h2>
            <p>
              Currently, the program is available exclusively on YouTube. If we expand the program to other platforms,
              we will notify you accordingly.
            </p>
          </div>
        </div>

        {/* Can I earn a commission by referring other channels */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-800 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Can I earn a commission by referring other channels to join your program?
            </h2>
            <p>
              Here at Shorts Rev, we offer splits to creators interested in affiliating for our program. We grant the
              affiliate a percentage of the creators revenue that which they refered in. This percentage changes
              depending on what split is given. If you are interested in affiliating for Shorts Rev, open a ticket in
              the official{" "}
              <a
                href="https://discord.gg/shortsrev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                Shorts Rev discord
              </a>
              .
            </p>
          </div>
        </div>

        {/* BrandBoost Section */}
        <h2 className="text-2xl font-bold mb-6 mt-12">BrandBoost</h2>

        {/* What is BrandBoost and how can I earn from it? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What is BrandBoost and how can I earn from it?
            </h2>
            <p>
              You earn additional revenue by promoting brands in your YouTube Shorts. BrandBoost connects you with
              advertisers looking to reach your audience through authentic content. You'll be paid for creating Shorts
              that feature products or services according to campaign guidelines.
            </p>
          </div>
        </div>

        {/* How do I get invited to the BrandBoost program? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How do I get invited to the BrandBoost program?
            </h2>
            <p className="mb-4">
              BrandBoost is an invite-only program reserved for top creators who meet strict performance and quality
              standards. Our team regularly reviews creators and handpicks those who:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Consistently produce high-quality, engaging Shorts</li>
              <li>Maintain strong audience engagement and growth</li>
              <li>Have a brand-friendly channel</li>
              <li>Fully comply with YouTube's and Shorts Rev’s content policies</li>
              <li>Have at least 50 million Shorts views in the last 28 days</li>
            </ul>
          </div>
        </div>

        {/* What are the requirements to participate in BrandBoost campaigns? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What are the requirements to participate in BrandBoost campaigns?
            </h2>
            <p className="mb-4">To be eligible for BrandBoost campaigns:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Your channel must be monetized through the YouTube Partner Program</li>
              <li>You need at least 50 million views in the last 28 days</li>
              <li>Your content must comply with YouTube's community guidelines</li>
              <li>Your channel must have consistent Shorts performance with good engagement rates</li>
              <li>You must be able to create authentic content that naturally integrates products</li>
            </ul>
          </div>
        </div>

        {/* How much can I earn from BrandBoost campaigns? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How much can I earn from BrandBoost campaigns?
            </h2>
            <p>
              Earnings vary based on campaign requirements, your audience size, and engagement rates. Typical campaigns
              range from $500 to $5,000 per Short, with higher payouts for channels with larger audiences and proven
              performance. Each campaign listing shows the potential payout range before you apply.
            </p>
          </div>
        </div>

        {/* When and how will I get paid for BrandBoost campaigns? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              When and how will I get paid for BrandBoost campaigns?
            </h2>
            <p>
              Payment is processed within 30 days after your content is approved by the brand. You'll receive payment
              through your preferred payment method set in your account settings. The full amount is paid once,
              regardless of how many views your content continues to receive.
            </p>
          </div>
        </div>

        {/* Can I participate in BrandBoost if I'm already using Shorts Rev music? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Can I participate in BrandBoost if I'm already using Shorts Rev music?
            </h2>
            <p>
              Yes, you can participate in both programs simultaneously. However, when creating BrandBoost content, you
              must follow the specific campaign guidelines, which may include using particular music tracks or sounds
              provided by the brand. If the campaign allows, you can use Shorts Rev music in your BrandBoost content for
              additional revenue.
            </p>
          </div>
        </div>

        {/* What happens if my BrandBoost content doesn't meet the campaign requirements? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What happens if my BrandBoost content doesn't meet the campaign requirements?
            </h2>
            <p>
              If your content doesn't meet the requirements, the brand may request revisions or reject the submission.
              In case of rejection, you won't receive payment for that campaign. To avoid this, carefully review all
              campaign requirements before applying and creating content.
            </p>
          </div>
        </div>

        {/* ClipsRev Section */}
        <h2 className="text-2xl font-bold mb-6 mt-12">ClipsRev</h2>

        {/* What is ClipsRev and how does it work? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What is ClipsRev and how does it work?
            </h2>
            <p>
              ClipsRev is a program for content clippers who create viral clips from streamers, celebrities,
              influencers, and brand content. You'll clip content provided in ClipsRev campaigns and earn revenue based
              on the views your clips generate. The program pays a competitive RPM (revenue per thousand views), with
              campaign goals typically set at reaching 1 million views.
            </p>
          </div>
        </div>

        {/* How do I join the ClipsRev program? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How do I join the ClipsRev program?
            </h2>
            <p className="mb-4">ClipsRev is an application-based program. To apply:</p>
            <ol className="list-decimal pl-8 mb-4 space-y-2">
              <li>
                Go to the{" "}
                <a href="/dashboards/creators/clipsrev" className="text-red-500 hover:underline">
                  ClipsRev dashboard
                </a>{" "}
                page
              </li>
              <li>Complete the application form detailing your clipping experience and channel metrics</li>
              <li>Submit examples of your previous clipping work</li>
              <li>Our team will review your application and notify you if you're accepted</li>
              <li>Once approved, you'll gain access to available clipping campaigns</li>
            </ol>
          </div>
        </div>

        {/* What are the requirements for ClipsRev campaigns? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What are the requirements for ClipsRev campaigns?
            </h2>
            <p className="mb-4">Each ClipsRev campaign has specific requirements, including:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>View targets (typically 1 million views)</li>
              <li>Content guidelines for how to clip the provided material</li>
              <li>Proper attribution of the original content creator</li>
            </ul>
            <p>You must meet these requirements to receive the full campaign payout.</p>
          </div>
        </div>

        {/* How much can I earn through ClipsRev? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How much can I earn through ClipsRev?
            </h2>
            <p>
              Earnings are calculated based on the RPM (revenue per thousand views) specified in each campaign. For
              example, if a campaign offers an RPM of $1.25 and your clip reaches the typical goal of 1 million views,
              you would earn $1,250. High-performing clippers who consistently reach or exceed view targets across
              multiple campaigns can earn several thousand dollars monthly.
            </p>
          </div>
        </div>

        {/* Affiliate Program Section */}
        <h2 className="text-2xl font-bold mb-6 mt-12">Affiliate Program</h2>

        {/* What is the Shorts Rev Affiliate Program? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What is the Shorts Rev Affiliate Program?
            </h2>
            <p>
              The Affiliate Program allows you to earn commission by referring other creators to join Shorts Rev
              programs. When creators you refer join and start earning, you receive a percentage of their revenue as
              commission, creating an additional passive income stream for you.
            </p>
          </div>
        </div>

        {/* How do I apply for the Affiliate Program? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How do I apply for the Affiliate Program?
            </h2>
            <p className="mb-4">The Affiliate Program is application-based. To apply:</p>
            <ol className="list-decimal pl-8 mb-4 space-y-2">
              <li>
                Go to the{" "}
                <a href="/dashboards/creators/affiliate" className="text-red-500 hover:underline">
                  Affiliate Program
                </a>{" "}
                section in your dashboard
              </li>
              <li>Complete the application form with your promotional strategy and audience details</li>
              <li>Our team will review your application and notify you if you're accepted</li>
              <li>Once approved, you'll be able to generate custom invite codes</li>
            </ol>
          </div>
        </div>

        {/* How much commission can I earn as an affiliate? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How much commission can I earn as an affiliate?
            </h2>
            <p>
              As an affiliate, you can earn between 5% to 20% commission from the Shorts Rev pool for creators you refer
              to the platform. Commission rates vary depending on various factors and the program the referred creator
              joins.
            </p>
          </div>
        </div>

        {/* How do I track my affiliate performance? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How do I track my affiliate performance?
            </h2>
            <p>The Affiliate Dashboard provides real-time tracking of:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Conversion rates of referrals to sign-ups</li>
              <li>Revenue generated by your referred creators</li>
              <li>Commission earned and payment history</li>
              <li>Performance metrics to help optimize your referral strategy</li>
            </ul>
          </div>
        </div>

        {/* What promotional materials are available for affiliates? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              What promotional materials are available for affiliates?
            </h2>
            <p>As an approved affiliate:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>You will be able to generate custom invite codes</li>
              <li>You can make videos about Shorts Rev program</li>
              <li>You can email/contact creators to refer them to Shorts Rev</li>
            </ul>
          </div>
        </div>

        {/* Affiliate Compliance & Conduct Agreement */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Affiliate Compliance & Conduct Agreement
            </h2>
            <p className="mb-4">
              As an affiliate, you are required to adhere to our terms and conditions. Non-compliance with these
              provisions may result in corrective action, including but not limited to suspension or forfeiture of any
              earned commissions, immediate termination of affiliate status, and potential legal recourse where
              applicable.
            </p>

            <p className="mb-4">
              All affiliates must maintain professional conduct, provide accurate information, and follow our guidelines
              for referrals and promotional activities. Detailed terms will be provided upon acceptance to the program.
            </p>

            <p className="mt-4">
              By participating in the affiliate program, the affiliate acknowledges, understands, and agrees to comply
              with our terms. The company reserves the right to enforce these provisions and take appropriate action in
              response to any breach.
            </p>
          </div>
        </div>

        {/* Program Integration Section */}
        <h2 className="text-2xl font-bold mb-6 mt-12">Program Integration</h2>

        {/* Can I participate in multiple Shorts Rev programs simultaneously? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Can I participate in multiple Shorts Rev programs simultaneously?
            </h2>
            <p>
              Yes, you can participate in Music Promotions, BrandBoost, and ClipsRev simultaneously. Many creators use
              different programs for different content pieces or combine them strategically. For example, you might use
              Shorts Rev music in your regular content while also accepting occasional BrandBoost campaigns and creating
              ClipsRev content during trending events.
            </p>
          </div>
        </div>

        {/* How should I balance my time between different Shorts Rev programs? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How should I balance my time between different Shorts Rev programs?
            </h2>
            <p>
              We recommend starting with one program and gradually incorporating others as you become comfortable with
              each workflow. Many creators allocate specific days for different programs—for example, creating
              music-based content on weekdays and ClipsRev content on weekends. The dashboard provides a unified view of
              all your program activities to help manage your schedule.
            </p>
          </div>
        </div>

        {/* Will participating in multiple programs affect my channel's performance? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              Will participating in multiple programs affect my channel's performance?
            </h2>
            <p>
              When done strategically, participating in multiple programs can enhance your channel's performance by
              diversifying your content and revenue streams. However, maintain a balance that feels authentic to your
              audience. The analytics section of your dashboard shows how different types of content perform, helping
              you optimize your strategy across programs.
            </p>
          </div>
        </div>

        {/* How do earnings compare between the different programs? */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden mt-4">
          <div className="p-6">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
              <div className="bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              How do earnings compare between the different programs?
            </h2>
            <p className="mb-4">Each program has different earning potential:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Music Promotions: Ongoing revenue based on video performance</li>
              <li>BrandBoost: Higher one-time payments for specific campaigns</li>
              <li>ClipsRev: Quick turnaround with earnings based on clip performance</li>
            </ul>
            <p>
              Many successful creators use a mix of all three to maximize both immediate income (BrandBoost) and
              long-term revenue (Music Promotions and ClipsRev).
            </p>
          </div>
        </div>
      </div>

      {/* Attach Track Details Modal */}
      {showAttachDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-zinc-700">
              <h3 className="text-xl font-bold">How to attach a track to Shorts</h3>
              <button onClick={() => setShowAttachDetails(false)} className="text-zinc-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="p-6">
              <p className="mb-6">
                To ensure track is recognized and you receive payment from ShortsPay+,{" "}
                <strong>use only one track per Shorts, publish through the YouTube mobile app</strong> as described
                below, and <strong>keep the added track's volume above 20%</strong>.
              </p>

              <div className="flex justify-center my-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M12 5v14"></path>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-6">Attaching Shorts under 60 seconds to a track</h4>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-MHwrhApp7iSCmX7dQpuhhYKPDadyfU.jpeg"
                      alt="YouTube app interface"
                      className="rounded-lg border border-zinc-700 w-full"
                    />
                  </div>

                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-9TuxG7o7A1uX81kAPUTBU5u1bAj4pn.jpeg"
                      alt="Choose video screen"
                      className="rounded-lg border border-zinc-700 w-full"
                    />
                  </div>

                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.JPG-8Q6fVDcRoXKTK46E0MX9Bmr9xM4xSY.jpeg"
                      alt="Add sound button"
                      className="rounded-lg border border-zinc-700 w-full"
                    />
                  </div>

                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5661.jpg-aUcOGjlzWmBZZp9NvC0vqAPDTQ6Sms.jpeg"
                      alt="Search for music"
                      className="rounded-lg border border-zinc-700 w-full"
                    />
                  </div>

                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.JPG-XkMUugFjdD68goqnXNQMxE1BWGbeZO.jpeg"
                      alt="Volume adjustment"
                      className="rounded-lg border border-zinc-700 w-full"
                    />
                  </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-4 mt-6">
                  <div className="flex gap-3">
                    <div className="bg-amber-500 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-black mt-0.5">
                      <span className="font-bold">i</span>
                    </div>
                    <p>
                      You can also publish Shorts with SFX effects or a voice-over on top of a ShortsPay+ track. For
                      detailed instructions, please refer to{" "}
                      <button onClick={scrollToVoiceOver} className="text-red-500 hover:underline">
                        the relevant guideline
                      </button>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Request Track Modal */}
      {showRequestTrackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-3xl w-full">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 shrink-0">
              <h2 className="text-lg font-medium">Shorts Rev Music Request Form</h2>
              <button className="text-zinc-400 hover:text-white" onClick={() => setShowRequestTrackModal(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center">
                <div className="mb-4 text-green-500 text-xl">✓</div>
                <h3 className="text-xl font-medium mb-2">Request Submitted</h3>
                <p className="text-zinc-400">
                  Thank you for your request. Our team will review it and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col h-full">
                <div className="overflow-y-auto p-4 space-y-3 flex-grow">
                  <div className="mb-2">
                    <p className="text-zinc-400 text-xs mb-1">
                      Request a track to be added to the Shorts Rev music library. Our team will review your request and
                      add suitable tracks.
                    </p>
                  </div>

                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
                    <div className="h-[450px] overflow-y-auto pr-2 space-y-5">
                      {/* Channel Name */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Channel Name <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Please provide the name of your YouTube Shorts channel that requires the music.
                        </p>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter your channel name"
                        />
                      </div>

                      {/* Channel Link */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Channel Link <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Please provide the URL to your YouTube Shorts channel.
                        </p>
                        <input
                          type="url"
                          required
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="https://youtube.com/@yourchannel"
                        />
                      </div>

                      {/* Last 28 days YT Shorts views */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Last 28 days YT Shorts views <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Enter the total number of views your YouTube Shorts channel has received in the last 28 days
                        </p>
                        <input
                          type="number"
                          required
                          min="0"
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter a number"
                        />
                      </div>

                      {/* Have you thoroughly explored our current library? */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Have you thoroughly explored our current library? <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Before making a request, we want to confirm if you've fully explored our current music library
                        </p>
                        <div className="space-y-2">
                          <label className="flex items-center p-2 border border-zinc-700 rounded-md bg-zinc-900">
                            <input
                              type="radio"
                              name="libraryExplored"
                              value="yes"
                              checked={libraryExplored === "yes"}
                              onChange={() => setLibraryExplored("yes")}
                              className="mr-2"
                              required
                            />
                            <span>Yes, I've searched through the entire music library</span>
                          </label>
                          <label className="flex items-center p-2 border border-zinc-700 rounded-md bg-zinc-900">
                            <input
                              type="radio"
                              name="libraryExplored"
                              value="no"
                              checked={libraryExplored === "no"}
                              onChange={() => setLibraryExplored("no")}
                              className="mr-2"
                            />
                            <span>No, I'd like to request new tracks for my content</span>
                          </label>
                        </div>
                      </div>

                      {/* Number of Tracks Requested */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Number of Tracks Requested <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Please specify the number of tracks you are requesting for.
                        </p>
                        <input
                          type="number"
                          required
                          min="1"
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter a number"
                        />
                      </div>

                      {/* Genre of Tracks */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Genre of Tracks <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Indicate the genre(s) of the tracks. If you're requesting multiple tracks of different genres,
                          please list all relevant genres.
                        </p>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Pop, Hip Hop, Electronic, etc."
                        />
                      </div>

                      {/* Description of Usage */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Description of Usage <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Briefly describe the project or scenario where you plan to use these tracks (you may also
                          include links to sample videos from your project)
                        </p>
                        <textarea
                          required
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[100px]"
                          placeholder="Describe how you'll use the music in your content"
                        ></textarea>
                      </div>

                      {/* Reference Tracks */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Reference Tracks <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Please upload tracks that you've used before in your project and which seem suitable but are
                          missing from Shorts Rev library. This will help us understand the type of music you're looking
                          for.
                        </p>
                        <div className="border border-dashed border-zinc-700 rounded-md p-4 text-center bg-zinc-800/50">
                          <Upload className="h-6 w-6 mx-auto mb-2 text-zinc-500" />
                          <button
                            type="button"
                            className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm hover:bg-zinc-700 transition"
                            onClick={() => document.getElementById("file-upload")?.click()}
                          >
                            Select files...
                          </button>
                          <input id="file-upload" type="file" multiple accept="audio/*" className="hidden" />
                          <p className="mt-2 text-xs text-zinc-500">or drag and drop files here</p>
                        </div>
                      </div>

                      {/* Reference Track Link */}
                      <div>
                        <label className="block text-sm font-medium mb-1">Reference Track Link</label>
                        <p className="text-xs text-zinc-400 mb-1">
                          If you have a link(s) to the track(s) you previously used, please attach it. Otherwise, please
                          leave this field blank
                        </p>
                        <input
                          type="url"
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="https://example.com/track"
                        />
                      </div>

                      {/* Additional Comments */}
                      <div>
                        <label className="block text-sm font-medium mb-1">Additional Comments</label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Include any other details or specific requirements you have for the requested music.
                        </p>
                        <textarea
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[80px]"
                          placeholder="Any additional information"
                        ></textarea>
                      </div>

                      {/* Manager Name */}
                      <div>
                        <label className="block text-sm font-medium mb-1">Manager Name</label>
                        <p className="text-xs text-zinc-400 mb-1">
                          Please provide the name of the manager you discussed participation in the Shorts Rev+ program
                          with.
                        </p>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Manager name (if applicable)"
                        />
                      </div>

                      {/* Email address */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Email address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-zinc-800 flex justify-end gap-3 shrink-0">
                  <button
                    type="button"
                    className="px-4 py-2 border border-zinc-700 rounded-md hover:bg-zinc-800 transition"
                    onClick={() => setShowRequestTrackModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
