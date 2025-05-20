"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Copy, DollarSign, Users, AlertCircle, Check, Trash2 } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useRouter } from "next/navigation"

// Define the affiliate rate structures based on the provided rates.txt file
const PREMIUM_AFFILIATE_RATES = {
  90: 5.0,
  89: 5.5,
  88: 6.0,
  87: 6.5,
  86: 7.0,
  85: 7.5,
  84: 7.7,
  83: 7.9,
  82: 8.1,
  81: 8.4,
  80: 8.6,
  79: 8.9,
  78: 9.1,
  77: 9.3,
  76: 9.6,
  75: 9.8,
  74: 10.1,
  73: 10.3,
  72: 10.5,
  71: 10.8,
  70: 11.0,
  69: 11.3,
  68: 11.5,
  67: 11.7,
  66: 12.0,
  65: 12.2,
  64: 12.5,
  63: 12.7,
  62: 12.9,
  61: 13.2,
  60: 13.4,
  59: 13.7,
  58: 13.9,
  57: 14.1,
  56: 14.4,
  55: 14.6,
  54: 14.9,
  53: 15.1,
  52: 15.3,
  51: 15.6,
  50: 16.0,
}

const NORMAL_AFFILIATE_RATES = {
  80: 6.3,
  79: 6.5,
  78: 6.8,
  77: 7.0,
  76: 7.0,
  75: 7.3,
  74: 7.5,
  73: 7.8,
  72: 8.0,
  71: 8.3,
  70: 8.5,
  69: 8.8,
  68: 9.0,
  67: 9.0,
  66: 9.8,
  65: 9.0,
  64: 9.3,
  63: 9.5,
  62: 9.8,
  61: 10.0,
  60: 10.3,
  59: 10.5,
  58: 10.8,
  57: 11.0,
  56: 11.3,
  55: 11.5,
  54: 11.8,
  53: 12.0,
  52: 12.3,
  51: 12.3,
  50: 12.5,
}

export default function CreatorsAffiliate() {
  const [copied, setCopied] = useState(false)
  const [creatorPercentageInput, setCreatorPercentageInput] = useState("60")
  const [creatorPercentage, setCreatorPercentage] = useState(60)
  const [affiliatePercentage, setAffiliatePercentage] = useState(0)
  const [platformPercentage, setPlatformPercentage] = useState(0)
  const [isValidPercentage, setIsValidPercentage] = useState(true)
  const [agreesToTerms, setAgreesToTerms] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [generatedCodes, setGeneratedCodes] = useState<
    Array<{
      code: string
      creatorPercentage: number
      affiliatePercentage: number
      platformPercentage: number
      date: string
    }>
  >([])

  // Add this state at the top of the component
  const [isAffiliate, setIsAffiliate] = useState(true) // In a real app, this would be fetched from your backend
  const router = useRouter()

  // In a real app, this would be handled by the middleware
  useEffect(() => {
    // Always set isAffiliate to true to prevent redirects
    setIsAffiliate(true)
  }, [])

  // This would be fetched from the user's profile in a real application
  // For this example, we'll assume the user is a premium affiliate
  const userAffiliateType = "premium" // or "normal"

  // Sample affiliate data
  const affiliateData = {
    referrals: 12,
    pendingReferrals: 3,
    earnings: 240,
    pendingEarnings: 60,
  }

  // Get the applicable rates based on user's affiliate type
  const applicableRates = userAffiliateType === "premium" ? PREMIUM_AFFILIATE_RATES : NORMAL_AFFILIATE_RATES

  // Update affiliate percentage based on creator percentage
  useEffect(() => {
    const rate = applicableRates[creatorPercentage as keyof typeof applicableRates]
    if (rate !== undefined) {
      setAffiliatePercentage(rate)
      setPlatformPercentage(Math.round((100 - creatorPercentage - rate) * 10) / 10)
    }
  }, [creatorPercentage, applicableRates])

  // Handle creator percentage input change
  const handleCreatorPercentageChange = (value: string) => {
    setCreatorPercentageInput(value)

    const numValue = Number.parseInt(value)
    if (!isNaN(numValue)) {
      // Check if the percentage is valid in our rate table
      const isValid = applicableRates[numValue as keyof typeof applicableRates] !== undefined
      setIsValidPercentage(isValid)

      if (isValid) {
        setCreatorPercentage(numValue)
        const rate = applicableRates[numValue as keyof typeof applicableRates]
        setAffiliatePercentage(rate)
        setPlatformPercentage(Math.round((100 - numValue - rate) * 10) / 10)
      }
    } else {
      setIsValidPercentage(false)
    }
  }

  // Generate a random code
  const generateRandomCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  // Update the generateInviteCode function to check for the 15 code limit
  const generateInviteCode = () => {
    if (!isValidPercentage || !agreesToTerms) return

    // Check if the user already has 15 active codes
    const activeCodesCount = generatedCodes.length
    if (activeCodesCount >= 15) {
      alert(
        "You've reached the maximum limit of 15 invite codes. Please delete some existing codes before generating new ones.",
      )
      return
    }

    const newCode = {
      code: generateRandomCode(),
      creatorPercentage,
      affiliatePercentage,
      platformPercentage,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    }

    setGeneratedCodes([newCode, ...generatedCodes])
  }

  // Add a delete function for codes
  const deleteCode = (codeToDelete: string) => {
    setGeneratedCodes(generatedCodes.filter((code) => code.code !== codeToDelete))
  }

  // Copy code to clipboard
  const copyCodeToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Helper function to determine if text should be visible based on percentage
  const shouldShowText = (percentage: number) => {
    return percentage >= 5 // Only show text if percentage is at least 5%
  }

  let pageContent = null

  if (isAffiliate) {
    pageContent = (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Affiliate Program</h1>
        </div>

        {/* Program Overview */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Program Overview</h2>
          <p className="text-zinc-400 mb-4">
            Earn a percentage of royalties by referring other creators to Shorts Rev. When creators you refer use our
            music in their content, you'll earn a percentage of Shorts Rev's share of the royalties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-zinc-400 text-sm font-medium">Total Referrals</h3>
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
              </div>
              <p className="text-2xl font-bold">{affiliateData.referrals}</p>
              <p className="text-xs text-zinc-500 mt-1">{affiliateData.pendingReferrals} pending verification</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-zinc-400 text-sm font-medium">Total Earnings</h3>
                <div className="bg-green-500/20 p-2 rounded-md">
                  <DollarSign className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <p className="text-2xl font-bold">${affiliateData.earnings}</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-zinc-400 text-sm font-medium">Affiliate Status</h3>
                <div className="bg-purple-500/20 p-2 rounded-md">
                  <DollarSign className="h-4 w-4 text-purple-500" />
                </div>
              </div>
              <p className="text-2xl font-bold capitalize">{userAffiliateType}</p>
              <p className="text-xs text-zinc-500 mt-1">
                {userAffiliateType === "premium" ? "Higher commission rates" : "Standard commission rates"}
              </p>
            </div>
          </div>
        </div>

        {/* Generate Invite Code */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Generate Invite Code</h2>
          <p className="text-zinc-400 mb-4">
            Set a creator percentage and generate a unique invite code. The creator percentage determines how much of
            the royalties the creator will receive, and your affiliate cut is calculated based on Shorts Rev's share.
          </p>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="bg-zinc-700 p-4 rounded-lg mb-4">
              <h3 className="text-sm font-medium text-zinc-300 mb-2 text-center">Split Ratio Breakdown</h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-8 bg-zinc-800 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-red-500 flex items-center justify-center"
                    style={{ width: `${creatorPercentage}%` }}
                  >
                    <span className="text-xs font-medium text-white">{creatorPercentage}%</span>
                  </div>
                  <div
                    className="h-full bg-amber-500 flex items-center justify-center"
                    style={{ width: `${100 - creatorPercentage}%` }}
                  >
                    <span className="text-xs font-medium text-white">{affiliatePercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex space-x-4">
                  <div className="text-center text-xs text-zinc-400 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>Creator
                  </div>
                  <div className="text-center text-xs text-zinc-400 flex items-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>Affiliate
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mb-4">
              <label className="block text-sm font-medium text-zinc-400 mb-2">Drag to Set Creator Percentage</label>
              <div className="relative w-full h-6 bg-zinc-700 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-red-500 rounded-l-full"
                  style={{ width: `${creatorPercentage}%` }}
                ></div>
                <div
                  className="absolute top-0 left-0 h-full w-full"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.preventDefault()
                    const slider = e.currentTarget
                    const rect = slider.getBoundingClientRect()

                    // Calculate percentage based on click position
                    const updatePercentageFromPosition = (clientX: number) => {
                      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
                      const rawPercentage = Math.round((x / rect.width) * 100)

                      // Find the closest valid percentage in our rate table
                      const validPercentages = Object.keys(applicableRates).map(Number)
                      const closestValidPercentage = validPercentages.reduce((prev, curr) => {
                        return Math.abs(curr - rawPercentage) < Math.abs(prev - rawPercentage) ? curr : prev
                      })

                      if (applicableRates[closestValidPercentage as keyof typeof applicableRates] !== undefined) {
                        setCreatorPercentageInput(closestValidPercentage.toString())
                        setCreatorPercentage(closestValidPercentage)
                        const rate = applicableRates[closestValidPercentage as keyof typeof applicableRates]
                        setAffiliatePercentage(rate)
                        setPlatformPercentage(Math.round((100 - closestValidPercentage - rate) * 10) / 10)
                        setIsValidPercentage(true)
                      }
                    }

                    // Initial update based on click position
                    updatePercentageFromPosition(e.clientX)

                    // Mouse move handler
                    const handleMouseMove = (moveEvent: MouseEvent) => {
                      updatePercentageFromPosition(moveEvent.clientX)
                    }

                    // Mouse up handler
                    const handleMouseUp = () => {
                      document.removeEventListener("mousemove", handleMouseMove)
                      document.removeEventListener("mouseup", handleMouseUp)
                    }

                    // Add event listeners
                    document.addEventListener("mousemove", handleMouseMove)
                    document.addEventListener("mouseup", handleMouseUp)
                  }}
                  onTouchStart={(e: React.TouchEvent) => {
                    e.preventDefault()
                    const slider = e.currentTarget
                    const rect = slider.getBoundingClientRect()

                    // Calculate percentage based on touch position
                    const updatePercentageFromTouch = (touch: Touch) => {
                      const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width))
                      const rawPercentage = Math.round((x / rect.width) * 100)

                      // Find the closest valid percentage in our rate table
                      const validPercentages = Object.keys(applicableRates).map(Number)
                      const closestValidPercentage = validPercentages.reduce((prev, curr) => {
                        return Math.abs(curr - rawPercentage) < Math.abs(prev - rawPercentage) ? curr : prev
                      })

                      if (applicableRates[closestValidPercentage as keyof typeof applicableRates] !== undefined) {
                        setCreatorPercentageInput(closestValidPercentage.toString())
                        setCreatorPercentage(closestValidPercentage)
                        const rate = applicableRates[closestValidPercentage as keyof typeof applicableRates]
                        setAffiliatePercentage(rate)
                        setPlatformPercentage(Math.round((100 - closestValidPercentage - rate) * 10) / 10)
                        setIsValidPercentage(true)
                      }
                    }

                    // Initial update based on touch position
                    if (e.touches.length > 0) {
                      updatePercentageFromTouch(e.touches[0])
                    }

                    // Touch move handler
                    const handleTouchMove = (moveEvent: TouchEvent) => {
                      if (moveEvent.touches.length > 0) {
                        updatePercentageFromTouch(moveEvent.touches[0])
                      }
                    }

                    // Touch end handler
                    const handleTouchEnd = () => {
                      document.removeEventListener("touchmove", handleTouchMove)
                      document.removeEventListener("touchend", handleTouchEnd)
                    }

                    // Add event listeners
                    document.addEventListener("touchmove", handleTouchMove, { passive: false })
                    document.addEventListener("touchend", handleTouchEnd)
                  }}
                  style={{ cursor: "ew-resize" }}
                >
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-6 w-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg border-2 border-white flex items-center justify-center"
                    style={{
                      left: `calc(${creatorPercentage}% - 12px)`,
                      transition: "none",
                    }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-white opacity-80"></div>
                  </div>
                </div>
                <div className="absolute top-full mt-1 left-0 text-xs text-zinc-400">
                  {Math.min(...Object.keys(applicableRates).map(Number))}%
                </div>
                <div className="absolute top-full mt-1 right-0 text-xs text-zinc-400">
                  {Math.max(...Object.keys(applicableRates).map(Number))}%
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 mt-8">
              <div className="w-full max-w-xs">
                <label className="block text-sm font-medium text-zinc-400 mb-2 text-center">
                  Fine-tune Creator Percentage
                </label>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative">
                    <input
                      type="text"
                      className={`bg-zinc-700 border ${isValidPercentage ? "border-zinc-600" : "border-red-500"} rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 w-20`}
                      value={creatorPercentageInput}
                      onChange={(e) => handleCreatorPercentageChange(e.target.value)}
                    />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-400">%</span>
                  </div>

                  {/* Fixed height container for error message to prevent layout shifts */}
                  <div className="h-5 mt-1">
                    {!isValidPercentage && (
                      <div className="flex items-center text-red-500 text-xs">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Invalid percentage
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-1 text-center">
                  Valid range: {Math.min(...Object.keys(applicableRates).map(Number))}% -{" "}
                  {Math.max(...Object.keys(applicableRates).map(Number))}%
                </p>
              </div>

              <div className="w-full max-w-xs">
                <label className="block text-sm font-medium text-zinc-400 mb-2 text-center">Your Affiliate Cut</label>
                <div className="bg-zinc-700 rounded-md py-2 px-4 text-center">
                  <span className="text-lg font-bold text-red-400">
                    {isValidPercentage ? `${affiliatePercentage.toFixed(1)}%` : "—"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-zinc-600 text-red-500 focus:ring-red-500"
                  checked={agreesToTerms}
                  onChange={(e) => setAgreesToTerms(e.target.checked)}
                />
                <span className="text-sm text-zinc-400">
                  I agree to the{" "}
                  <button type="button" className="text-red-400 hover:underline" onClick={() => setShowTerms(true)}>
                    Affiliate Compliance & Conduct Agreement
                  </button>
                </span>
              </label>
            </div>

            <div className="mt-4 flex items-center">
              <div className="text-xs text-zinc-500 mr-4">
                <p>You can generate up to 15 active invite codes. Currently using {generatedCodes.length}/15.</p>
              </div>

              <button
                className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium ${!isValidPercentage || !agreesToTerms ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={generateInviteCode}
                disabled={!isValidPercentage || !agreesToTerms}
              >
                Generate Code
              </button>
            </div>
          </div>
        </div>

        {/* Generated Invite Codes */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="font-medium">Your Generated Invite Codes</h2>
          </div>

          {generatedCodes.length === 0 ? (
            <div className="p-8 text-center text-zinc-500">You haven't generated any invite codes yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                    <th className="px-6 py-3">Code</th>
                    <th className="px-6 py-3 text-center">Split Ratio</th>
                    <th className="px-6 py-3">Date Created</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedCodes.map((code, index) => (
                    <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium">{code.code}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <div className="w-80 h-8 bg-zinc-700 rounded-full overflow-hidden flex">
                            <div
                              className="h-full bg-red-500 flex items-center justify-center"
                              style={{ width: `${code.creatorPercentage}%` }}
                            >
                              <span className="text-xs font-medium text-white">{code.creatorPercentage}%</span>
                            </div>
                            <div
                              className="h-full bg-amber-500 flex items-center justify-center"
                              style={{ width: `${Math.max(code.affiliatePercentage, 10)}%` }}
                            >
                              <span className="text-xs font-medium text-white">
                                {code.affiliatePercentage.toFixed(1)}%
                              </span>
                            </div>
                            <div
                              className="h-full bg-blue-500 flex items-center justify-center"
                              style={{ width: `${Math.max(code.platformPercentage, 10)}%` }}
                            >
                              <span className="text-xs font-medium text-white">
                                {code.platformPercentage.toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{code.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            className="bg-zinc-800 hover:bg-zinc-700 text-white p-1.5 rounded-md"
                            onClick={() => copyCodeToClipboard(code.code)}
                            title="Copy code"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                          <button
                            className="bg-zinc-800 hover:bg-zinc-700 text-white p-1.5 rounded-md"
                            onClick={() => deleteCode(code.code)}
                            title="Delete code"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Referred Creators */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="font-medium">Your Referred Creators</h2>
          </div>

          <div className="p-4 text-zinc-400 text-sm">
            <p>These are the creators you have referred using your invite codes.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">Creator</th>
                  <th className="px-6 py-3">Join Date</th>
                  <th className="px-6 py-3 text-center">Split Ratio</th>
                  <th className="px-6 py-3">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    user: "creator_jane",
                    date: "May 15, 2024",
                    creatorPercent: 70,
                    affiliatePercent: 11.0,
                    platformPercent: 19.0,
                    earnings: "$120",
                  },
                  {
                    user: "shorts_master",
                    date: "May 12, 2024",
                    creatorPercent: 80,
                    affiliatePercent: 8.6,
                    platformPercent: 11.4,
                    earnings: "$85",
                  },
                  {
                    user: "video_pro",
                    date: "May 10, 2024",
                    creatorPercent: 75,
                    affiliatePercent: 9.8,
                    platformPercent: 15.2,
                    earnings: "$35",
                  },
                ].map((referral, index) => (
                  <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{referral.user}</td>
                    <td className="px-6 py-4">{referral.date}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-80 h-8 bg-zinc-700 rounded-full overflow-hidden flex">
                          <div
                            className="h-full bg-red-500 flex items-center justify-center"
                            style={{ width: `${referral.creatorPercent}%` }}
                          >
                            <span className="text-xs font-medium text-white">{referral.creatorPercent}%</span>
                          </div>
                          <div
                            className="h-full bg-amber-500 flex items-center justify-center"
                            style={{ width: `${Math.max(referral.affiliatePercent, 10)}%` }}
                          >
                            <span className="text-xs font-medium text-white">{referral.affiliatePercent}%</span>
                          </div>
                          <div
                            className="h-full bg-blue-500 flex items-center justify-center"
                            style={{ width: `${Math.max(referral.platformPercent, 10)}%` }}
                          >
                            <span className="text-xs font-medium text-white">{referral.platformPercent}%</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{referral.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Terms Modal */}
        {showTerms && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 rounded-lg max-w-3xl max-h-[80vh] overflow-auto">
              <div className="sticky top-0 bg-zinc-900 p-4 border-b border-zinc-800 flex justify-between items-center">
                <h3 className="text-lg font-bold">Affiliate Compliance & Conduct Agreement</h3>
                <button className="text-zinc-400 hover:text-white" onClick={() => setShowTerms(false)}>
                  ✕
                </button>
              </div>
              <div className="p-6 text-zinc-300 space-y-4">
                <p>
                  As an affiliate, you are required to adhere to the following terms and conditions. Non-compliance with
                  these provisions may result in corrective action, including but not limited to suspension or
                  forfeiture of any earned commissions, immediate termination of affiliate status, and potential legal
                  recourse where applicable.
                </p>

                <div>
                  <h4 className="font-bold mb-2">1. Referral Restrictions</h4>
                  <p>
                    Affiliates shall engage in referral activities exclusively through private, direct communications.
                    The dissemination of referral or affiliate links in public domains, including but not limited to
                    social media platforms, online forums, or group discussions, is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">2. Referral Eligibility</h4>
                  <p>
                    Affiliates shall not solicit or refer individuals who are already enrolled, registered, or active
                    users of the company's services. Any attempt to register existing users for the purpose of
                    generating commissions shall be deemed fraudulent conduct.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">3. Accuracy and Transparency of Information</h4>
                  <p>
                    Affiliates shall provide accurate, truthful, and non-misleading information when promoting the
                    company's services. Any false, deceptive, or unsubstantiated claims regarding the company, its
                    offerings, or potential earnings shall constitute a material breach of this Agreement.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">4. Representation & Affiliation</h4>
                  <p>
                    Affiliates must clearly disclose their independent status and shall not, under any circumstances,
                    present themselves as employees, representatives, agents, or authorized spokespeople of the company.
                    Any misrepresentation of affiliation shall be grounds for immediate termination.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">5. Standards of Professional Conduct</h4>
                  <p>
                    Affiliates shall conduct themselves with professionalism, integrity, and respect in all
                    interactions, including but not limited to communications with prospective referrals, company
                    representatives, and the general public. Any conduct deemed inappropriate, abusive, or unethical
                    shall be subject to disciplinary action.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">6. Prohibited Manipulation & Exploitation</h4>
                  <p>
                    Affiliates shall not engage in any form of system manipulation, fraudulent activity, or abuse of the
                    affiliate program, including but not limited to self-referrals, artificially inflating referral
                    statistics, or using unauthorized promotional methods. Any attempt to exploit the program for unfair
                    advantage shall result in immediate disqualification.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">7. Non-Disparagement Clause</h4>
                  <p>
                    Affiliates shall not engage in any action, conduct, or communication—whether verbal, written, or
                    electronic—that disparages, defames, or otherwise harms the reputation, goodwill, or business
                    interests of the company. This includes but is not limited to public statements, social media posts,
                  </p>
                </div>

                <p>
                  By participating in the affiliate program, the affiliate acknowledges, understands, and agrees to
                  comply with the aforementioned terms. The company reserves the right to enforce these provisions and
                  take appropriate action in response to any breach.
                </p>
              </div>
              <div className="sticky bottom-0 bg-zinc-900 p-4 border-t border-zinc-800 flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  onClick={() => {
                    setAgreesToTerms(true)
                    setShowTerms(false)
                  }}
                >
                  <Check className="h-4 w-4" />I Agree
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  } else {
    pageContent = null
  }

  return <DashboardLayout portalType="creators">{pageContent}</DashboardLayout>
}
