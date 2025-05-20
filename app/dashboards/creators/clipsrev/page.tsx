"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, X, ChevronDown, Instagram, Youtube, ExternalLink, AlertCircle, Info } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

// Mock data for campaigns
const campaigns = [
  {
    id: "ladder-clips",
    name: "Ladder Clips",
    logo: "/placeholder.svg",
    rate: "$2.50 / 1K",
    description: "REPOST CONTENT, NO EDITS REQUIRED & EARN UP TO $500 PER POST",
    budget: {
      paid: 0,
      total: 29926.28,
      percentage: 0,
    },
    type: "Clipping",
    platforms: ["instagram", "tiktok", "twitter"],
    views: 0,
    category: "Software",
    maxPayout: 500,
    creatorName: "Ladder Fitness",
    requirements: [
      "Post one or more videos from the Google Drive, with no edits or cropping",
      "This link-in-bio at the time of posting/review to be eligible - https://ladder.fit/whop",
      "TikTok users MUST have over 1k followers to add a clickable Link in Bio",
      'This caption: "Try the Ladder App for fr33, 🔗 in bio #ladder #fitnessapp"',
    ],
    assets: [
      {
        type: "google-drive",
        name: "drive.google.com",
        url: "https://drive.google.com/drive/folders/1igImqAjGiJJ-F_1ZkqQuthSkH9VikyEL",
      },
    ],
    timeLeft: "29 days",
    disclaimer:
      "Creator retains the right to deny any submission that does not meet the requirements or quality standards. All submissions grant full usage rights, and must be FTC compliant.",
  },
  {
    id: "viral-clips",
    name: "$$$ - (INSANELY VIRAL CLIPS)",
    logo: "/placeholder.svg",
    rate: "$0.30 / 1K",
    description: "100M VIEWS MONTHLY - UNLIMITED BUDGET - FACELESS - VIRAL CONTENT",
    budget: {
      paid: 386290,
      total: 2277342,
      percentage: 2,
    },
    type: "Clipping",
    platforms: ["instagram", "tiktok", "youtube"],
    views: 1670508,
    category: "Entertainment",
    creatorName: "Viral Media Group",
  },
  {
    id: "goli-nutrition",
    name: "Goli Nutrition",
    logo: "/placeholder.svg",
    rate: "$1.50 / 1K",
    description: "UNLIMITED BUDGET - FACELESS CONTENT - $1.50 PER THOUSAND VIEWS + 25% COMMISSION",
    budget: {
      paid: 4768630,
      total: 24938500,
      percentage: 19,
    },
    type: "UGC",
    platforms: ["instagram"],
    views: 1400371,
    category: "Health",
    creatorName: "Goli Nutrition Inc.",
  },
  {
    id: "claimshero",
    name: "ClaimsHero UGC Creators",
    logo: "/placeholder.svg",
    rate: "$4.00 / 1K",
    description: "GET PAID TO TALK ABOUT GAMING - MEGA HIGH CPM - $4 PER 1,000 VIEWS",
    budget: {
      paid: 5135110,
      total: 25000000,
      percentage: 21,
    },
    type: "UGC",
    platforms: ["instagram", "tiktok", "youtube"],
    views: 930962,
    category: "Gaming",
    creatorName: "ClaimsHero",
  },
  {
    id: "avevius-academy",
    name: "Avevius Academy",
    logo: "/placeholder.svg",
    rate: "$1.00 / 1K",
    description: "Ayehancho Clips",
    budget: {
      paid: 395600,
      total: 16500000,
      percentage: 2,
    },
    type: "Clipping",
    platforms: ["instagram", "tiktok", "youtube"],
    views: 538106,
    category: "Education",
    creatorName: "Avevius LLC",
  },
  {
    id: "louise-carter",
    name: "Louise Carter Organic",
    logo: "/placeholder.svg",
    rate: "$1.00 / 1K",
    description: "Louise Carter AI UGC (1$ Per 1 Thousand views)",
    budget: {
      paid: 4003710,
      total: 19509560,
      percentage: 21,
    },
    type: "UGC",
    platforms: ["instagram", "tiktok", "youtube", "twitter"],
    views: 4668993,
    category: "Fashion",
    creatorName: "Louise Carter",
  },
]

export default function ClipsRevPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)
  const [sortBy, setSortBy] = useState("Highest available budget")
  const [filterType, setFilterType] = useState("All")
  const [filterCategory, setFilterCategory] = useState("All")
  const [postLink, setPostLink] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Add these new state variables
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false)
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)

  // Filter options
  const sortOptions = ["Highest available budget", "Most paid out", "Highest CPM", "Newest"]
  const typeOptions = ["All", "Clipping", "UGC"]
  const categoryOptions = ["All", "Creator", "E-commerce", "Music", "Podcast", "Software", "Stream", "Other"]

  const openCampaignDetails = (campaign: any) => {
    setSelectedCampaign(campaign)
  }

  const closeCampaignDetails = () => {
    setSelectedCampaign(null)
    setShowConfirmation(false)
  }

  const handleSubmitClick = () => {
    setShowConfirmation(true)
  }

  const submitForm = () => {
    // Here you would handle the actual form submission
    alert(`Submitting link: ${postLink}`)
    setPostLink("")
    setShowConfirmation(false)
    closeCampaignDetails()
  }

  const cancelSubmit = () => {
    setShowConfirmation(false)
  }

  // Platform icon mapping
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "tiktok":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.17-1.75V12.2a6.32 6.32 0 005.25 6.19 6.3 6.3 0 007-6.19V7.83a8.17 8.17 0 004.41 1.29v-3.4a4.85 4.85 0 01-4.41-1.03z"></path>
          </svg>
        )
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "twitter":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        )
      default:
        return null
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortDropdownOpen || typeDropdownOpen || categoryDropdownOpen) {
        setSortDropdownOpen(false)
        setTypeDropdownOpen(false)
        setCategoryDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [sortDropdownOpen, typeDropdownOpen, categoryDropdownOpen])

  return (
    <DashboardLayout portalType="creators">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">ClipsRev - Content Rewards</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Sort by:</span>
            <div className="relative">
              <button
                className="flex items-center space-x-1 bg-zinc-800 px-3 py-1.5 rounded-md text-sm"
                onClick={() => {
                  setSortDropdownOpen(!sortDropdownOpen)
                  setTypeDropdownOpen(false)
                  setCategoryDropdownOpen(false)
                }}
              >
                <span>{sortBy}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-zinc-800 rounded-md shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-zinc-700"
                      onClick={() => {
                        setSortBy(option)
                        setSortDropdownOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pb-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Type:</span>
            <div className="relative">
              <button
                className="flex items-center space-x-1 bg-zinc-800 px-3 py-1.5 rounded-md text-sm"
                onClick={() => {
                  setTypeDropdownOpen(!typeDropdownOpen)
                  setCategoryDropdownOpen(false)
                  setSortDropdownOpen(false)
                }}
              >
                <span>{filterType}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {typeDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-zinc-800 rounded-md shadow-lg z-10">
                  {typeOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-zinc-700"
                      onClick={() => {
                        setFilterType(option)
                        setTypeDropdownOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Category:</span>
            <div className="relative">
              <button
                className="flex items-center space-x-1 bg-zinc-800 px-3 py-1.5 rounded-md text-sm"
                onClick={() => {
                  setCategoryDropdownOpen(!categoryDropdownOpen)
                  setTypeDropdownOpen(false)
                  setSortDropdownOpen(false)
                }}
              >
                <span>{filterCategory}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-zinc-800 rounded-md shadow-lg z-10">
                  {categoryOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-zinc-700"
                      onClick={() => {
                        setFilterCategory(option)
                        setCategoryDropdownOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="ml-auto text-sm text-zinc-400">{campaigns.length} results</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className="bg-zinc-900 border-zinc-800 overflow-hidden cursor-pointer hover:border-zinc-700 transition-all"
              onClick={() => openCampaignDetails(campaign)}
            >
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-10 w-10 bg-zinc-800 rounded-md flex items-center justify-center">
                    {campaign.logo ? (
                      <Image
                        src={campaign.logo || "/placeholder.svg"}
                        alt={campaign.name}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                    ) : (
                      <span className="font-bold text-lg">{campaign.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{campaign.name}</h3>
                    <div className="flex items-center">
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">{campaign.rate}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 mb-3 font-medium">{campaign.description}</p>

                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-400">
                      ${campaign.budget.paid.toLocaleString()} of ${campaign.budget.total.toLocaleString()} paid out
                    </span>
                    <span className="font-medium">{campaign.budget.percentage}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5">
                    <div
                      className="bg-red-500 h-1.5 rounded-full"
                      style={{ width: `${campaign.budget.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="text-zinc-400">Type</p>
                    <p>{campaign.type}</p>
                  </div>
                  <div>
                    <p className="text-zinc-400">Platforms</p>
                    <div className="flex space-x-1 mt-1">
                      {campaign.platforms.map((platform, index) => (
                        <span key={index} className="text-zinc-300">
                          {getPlatformIcon(platform)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-zinc-400">Views</p>
                    <p>{campaign.views.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Campaign Details Modal */}
      {selectedCampaign && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeCampaignDetails} // Close when clicking the backdrop
        >
          <div
            className="bg-zinc-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
          >
            <div className="flex justify-between items-center p-4 border-b border-zinc-800">
              <button onClick={closeCampaignDetails} className="flex items-center text-zinc-400 hover:text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>All rewards</span>
              </button>
              <button onClick={closeCampaignDetails} className="text-zinc-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              <div className="p-6">
                <div className="bg-zinc-800/50 p-4 rounded-lg mb-6">
                  <div className="flex items-center text-amber-400">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <p className="font-medium">
                      Submit your post for review within 1 hour of publishing to start getting paid.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-4">{selectedCampaign.description}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm text-zinc-400 mb-2">PAID OUT</h4>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>
                          ${selectedCampaign.budget.paid.toLocaleString()} of $
                          {selectedCampaign.budget.total.toLocaleString()} paid out
                        </span>
                        <span className="font-medium">{selectedCampaign.budget.percentage}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${selectedCampaign.budget.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-400 mb-2">TIME LEFT</h4>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{selectedCampaign.timeLeft || "29 days"} left</span>
                        <span className="font-medium">4%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: "4%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm text-zinc-400 mb-1">REWARD</h4>
                    <div className="bg-blue-500 text-white text-sm px-2 py-1 rounded inline-block">
                      {selectedCampaign.rate}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-400 mb-1">CONTENT TYPE</h4>
                    <p>{selectedCampaign.type}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-400 mb-1">MAX PAYOUT</h4>
                    <p>${selectedCampaign.maxPayout || "500"}.00</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-400 mb-1">CATEGORY</h4>
                    <p>{selectedCampaign.category}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-400 mb-1">PLATFORMS</h4>
                    <div className="flex space-x-2 mt-1">
                      {selectedCampaign.platforms.map((platform: string, index: number) => (
                        <span key={index} className="text-zinc-300">
                          {getPlatformIcon(platform)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedCampaign.requirements && (
                  <div className="mb-6">
                    <h4 className="text-sm text-zinc-400 mb-3">REQUIREMENTS</h4>
                    <div className="space-y-2">
                      {selectedCampaign.requirements.map((req: string, index: number) => (
                        <div key={index} className="bg-zinc-800 p-3 rounded-md">
                          <p className="text-sm">
                            <span className="font-medium">REQUIRED</span> - {req}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCampaign.assets && (
                  <div className="mb-6">
                    <h4 className="text-sm text-zinc-400 mb-3">ASSETS</h4>
                    {selectedCampaign.assets.map((asset: any, index: number) => (
                      <div key={index} className="flex items-center space-x-3 bg-zinc-800 p-3 rounded-md">
                        <div className="h-10 w-10 bg-zinc-700 rounded flex items-center justify-center">
                          {asset.type === "google-drive" && (
                            <svg className="h-6 w-6" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                                fill="#0066da"
                              />
                              <path
                                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                                fill="#00ac47"
                              />
                              <path
                                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                                fill="#ea4335"
                              />
                              <path
                                d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                                fill="#00832d"
                              />
                              <path
                                d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                                fill="#2684fc"
                              />
                              <path
                                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                                fill="#ffba00"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{asset.name}</p>
                          <a
                            href={asset.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:underline flex items-center"
                          >
                            {asset.url}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {selectedCampaign.disclaimer && (
                  <div className="mb-6">
                    <h4 className="text-sm text-zinc-400 mb-2">DISCLAIMER</h4>
                    <p className="text-sm text-zinc-300">{selectedCampaign.disclaimer}</p>
                  </div>
                )}

                <div className="mt-8 border-t border-zinc-800 pt-6">
                  <h3 className="font-bold mb-2">Submit your social media post</h3>
                  <p className="text-sm text-zinc-400 mb-6">
                    Share your post's link and the original image or video below. Once approved, you'll start earning
                    rewards based on the views your content generates.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="post-link" className="block text-sm font-medium mb-1">
                        Provide link<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="post-link"
                        type="text"
                        value={postLink}
                        onChange={(e) => setPostLink(e.target.value)}
                        placeholder="https://www.instagram.com/reel/123456789"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="media-upload" className="block text-sm font-medium mb-1">
                        Media<span className="text-red-500">*</span>
                      </label>
                      <div className="border border-dashed border-zinc-700 rounded-md p-8 text-center">
                        <p className="text-sm text-zinc-400 mb-4">
                          Upload the original media file you posted (not a screenshot). For videos, upload the video
                          file. For posts with multiple files, upload the first file.
                        </p>
                        <button className="flex items-center justify-center space-x-2 mx-auto bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Upload media</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 p-4 flex justify-end items-center">
              <button
                onClick={handleSubmitClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {selectedCampaign && showConfirmation && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4" onClick={cancelSubmit}>
          <div className="bg-zinc-900 rounded-lg w-full max-w-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Info className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold">Confirm Submission</h3>
              </div>

              <p className="text-sm text-zinc-300 mb-6">
                By submitting, you agree to {selectedCampaign.creatorName}'s "{selectedCampaign.name}" and Shorts Rev's
                terms.
              </p>

              <div className="flex space-x-3 justify-end">
                <button
                  onClick={cancelSubmit}
                  className="px-4 py-2 border border-zinc-700 rounded-md text-sm hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  onClick={submitForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  I Agree & Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
