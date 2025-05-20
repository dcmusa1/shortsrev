"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, DollarSign, TrendingUp, Eye, Award, AlertCircle, ArrowRight } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { formatNumber } from "@/utils/format-numbers"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"

// Function to format numbers with k, M suffix
// const formatNumber = (num) => {
//   if (num >= 1000000) {
//     return (num / 1000000).toFixed(1) + "M";
//   }
//   if (num >= 1000) {
//     return (num / 1000).toFixed(1) + "k";
//   }
//   return num.toString();
// };

// Function to format date to "Jan 1st" format
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const month = date.toLocaleString("default", { month: "short" })
  const day = date.getDate()

  // Add suffix to day
  let suffix = "th"
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st"
  } else if (day === 2 || day === 22) {
    suffix = "nd"
  } else if (day === 3 || day === 23) {
    suffix = "rd"
  }

  return `${month} ${day}${suffix}`
}

const activeCampaigns = [
  {
    id: "1",
    campaign: "Summer Style",
    brand: "FashionForward",
    status: "Active",
    deadline: "2024-07-15",
    payment: "$500",
    requirements: "Showcase our summer collection in a creative short.",
    logoUrl: "/placeholder.svg?height=80&width=80",
    viewsRequired: 500000,
  },
  {
    id: "2",
    campaign: "Tech Trends",
    brand: "GadgetGuru",
    status: "Active",
    deadline: "2024-07-20",
    payment: "$600",
    requirements: "Review our latest tech gadget in a short.",
    logoUrl: "/placeholder.svg?height=80&width=80",
    viewsRequired: 750000,
  },
]

const availableCampaigns = [
  {
    id: "3",
    campaign: "Healthy Habits",
    brand: "WellnessWave",
    status: "Available",
    deadline: "2024-08-01",
    payment: "$450",
    requirements: "Promote our wellness products in a short.",
    logoUrl: "/placeholder.svg?height=80&width=80",
    estimatedViews: "100K-200K",
    targetAudience: "Health-conscious individuals",
    logoPlacement: "Beginning of the video",
    campaignGoals: "Increase brand awareness",
    additionalInfo: "Must be family-friendly content",
    viewsRequired: 600000,
  },
  {
    id: "4",
    campaign: "Eco-Friendly Living",
    brand: "GreenLife",
    status: "Available",
    deadline: "2024-08-05",
    payment: "$550",
    requirements: "Create a short about sustainable living.",
    logoUrl: "/placeholder.svg?height=80&width=80",
    viewsRequired: 800000,
    estimatedViews: "150K-250K",
    targetAudience: "Eco-conscious individuals",
    logoPlacement: "End of the video",
    campaignGoals: "Promote eco-friendly practices",
    additionalInfo: "Focus on practical tips",
  },
]

const completedCampaigns = [
  {
    id: "5",
    campaign: "Winter Warmth",
    brand: "CozyComfort",
    status: "Completed",
    completedDate: "2024-06-20",
    payment: "$520",
    views: "250000",
    engagement: "4.5%",
    videoUrl: "https://youtube.com/watch?v=example",
    logoUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "6",
    campaign: "Spring Bloom",
    brand: "FloralFresh",
    status: "Completed",
    completedDate: "2024-06-25",
    payment: "$480",
    views: "180000",
    engagement: "3.8%",
    videoUrl: "https://youtube.com/watch?v=sample",
    logoUrl: "/placeholder.svg?height=80&width=80",
  },
]

const dailyViewsData = [
  { date: "07/01", views: 24000 },
  { date: "07/02", views: 13980 },
  { date: "07/03", views: 9800 },
  { date: "07/04", views: 39080 },
  { date: "07/05", views: 48000 },
  { date: "07/06", views: 38000 },
  { date: "07/07", views: 43000 },
  { date: "07/08", views: 24000 },
  { date: "07/09", views: 33980 },
  { date: "07/10", views: 29800 },
  { date: "07/11", views: 39080 },
  { date: "07/12", views: 48000 },
  { date: "07/13", views: 58000 },
  { date: "07/14", views: 63000 },
]

const shortsList = [
  {
    id: "1",
    shortsUrl: "https://youtube.com/shorts/abc123",
    campaign: "Summer Style",
    brand: "FashionForward",
    views: 45321,
    status: "approved",
    submittedDate: "2024-06-28",
    payment: "$500",
    notes: "Logo displayed at 0:05-0:10",
  },
  {
    id: "2",
    shortsUrl: "https://youtube.com/shorts/def456",
    campaign: "Tech Trends",
    brand: "GadgetGuru",
    views: 32189,
    status: "pending",
    submittedDate: "2024-07-02",
    payment: "$600",
    notes: "Product review with logo in corner",
  },
  {
    id: "3",
    shortsUrl: "https://youtube.com/shorts/ghi789",
    campaign: "Winter Warmth",
    brand: "CozyComfort",
    views: 78432,
    status: "approved",
    submittedDate: "2024-06-15",
    payment: "$520",
    notes: "Brand featured in intro and outro",
  },
]

function BrandBoostPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false)
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false)
  const [currentCampaignId, setCurrentCampaignId] = useState<string | null>(null)
  const [shortsUrl, setShortsUrl] = useState("")
  const [creatorNotes, setCreatorNotes] = useState("")
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [submittedShorts, setSubmittedShorts] = useState([])
  const [activeTab, setActiveTab] = useState("active")

  // New State Variables
  const [channelLink, setChannelLink] = useState("")
  const [viewsLast28Days, setViewsLast28Days] = useState("")
  const [niche, setNiche] = useState("")
  const [shortsPerMonth, setShortsPerMonth] = useState("")
  const [applicationTermsAgreed, setApplicationTermsAgreed] = useState(false)

  const handleSubmitClick = (campaign) => {
    setSelectedCampaign(campaign)
    setCurrentCampaignId(campaign.id)
    setIsSubmitDialogOpen(true)
  }

  const handleApply = (campaign) => {
    setSelectedCampaign(campaign)
    setIsApplyDialogOpen(true)
  }

  const handleViewDetails = (campaign) => {
    setSelectedCampaign(campaign)
    setIsSubmitDialogOpen(true)
  }

  const handleSubmit = () => {
    if (!shortsUrl) {
      alert("Please enter a Shorts URL")
      return
    }
    if (!termsAgreed) {
      alert("Please acknowledge the terms and conditions")
      return
    }

    // Create a new short object
    const newShort = {
      id: submittedShorts.length + 1,
      shortsUrl: shortsUrl,
      campaign: selectedCampaign.campaign,
      brand: selectedCampaign.brand,
      views: 0,
      status: "pending",
      submittedDate: new Date().toLocaleDateString(),
      payment: selectedCampaign.payment,
      notes: creatorNotes,
    }

    // Update the submittedShorts state
    setSubmittedShorts([...submittedShorts, newShort])

    // Clear the form fields
    setShortsUrl("")
    setCreatorNotes("")
    setTermsAgreed(false)

    // Close the dialog
    setIsSubmitDialogOpen(false)
  }

  const handleAddAnotherShort = () => {
    // Add logic to handle adding another short
    alert("This would add another short submission field")
  }

  const handleApplySubmit = () => {
    // Handle the submission of the application form
    console.log("Channel Link:", channelLink)
    console.log("Views Last 28 Days:", viewsLast28Days)
    console.log("Niche:", niche)
    console.log("Shorts Per Month:", shortsPerMonth)
    console.log("Terms Agreed:", applicationTermsAgreed)

    // Add your application submission logic here
    alert("Application Submitted!")

    // Close the dialog
    setIsApplyDialogOpen(false)
  }

  return (
    <DashboardLayout portalType="creators">
      <div className="p-6 space-y-6 bg-zinc-950">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">BrandBoost</h1>
            <p className="text-zinc-400 mt-1">Monetize your Shorts with brand partnerships</p>
          </div>
          {/* Remove Submit Short button from here */}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Active Campaigns</CardTitle>
                <div className="bg-[#ff3e3e]/20 p-2 rounded-md">
                  <Award className="h-4 w-4 text-[#ff3e3e]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">{activeCampaigns.length}</p>
              <p className="text-xs text-zinc-400 mt-1">Deadline approaching for 1</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Available Opportunities</CardTitle>
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">{availableCampaigns.length}</p>
              <p className="text-xs text-zinc-400 mt-1">New opportunities this week</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Total Views</CardTitle>
                <div className="bg-green-500/20 p-2 rounded-md">
                  <Eye className="h-4 w-4 text-green-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">554K</p>
              <p className="text-xs text-green-500 mt-1">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Total Earnings</CardTitle>
                <div className="bg-[#ff3e3e]/20 p-2 rounded-md">
                  <DollarSign className="h-4 w-4 text-[#ff3e3e]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">$12,000</p>
              <p className="text-xs text-green-500 mt-1">+$3,500 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-zinc-400">Potential Payouts</CardTitle>
                <div className="bg-green-500/20 p-2 rounded-md">
                  <DollarSign className="h-4 w-4 text-green-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-500">
                $
                {(
                  activeCampaigns.reduce((sum, campaign) => sum + Number(campaign.payment.slice(1)), 0) +
                  availableCampaigns.reduce((sum, campaign) => sum + Number(campaign.payment.slice(1)), 0)
                ).toFixed(2)}
              </p>
              <p className="text-xs text-green-500 mt-1 flex items-center">From available and active campaigns</p>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Management */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Campaign Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full md:w-auto grid-cols-3 bg-zinc-800 border-zinc-700">
                <TabsTrigger value="active" className="data-[state=active]:bg-[#ff3e3e] data-[state=active]:text-white">
                  Active ({activeCampaigns.length})
                </TabsTrigger>
                <TabsTrigger
                  value="available"
                  className="data-[state=active]:bg-[#ff3e3e] data-[state=active]:text-white"
                >
                  Available ({availableCampaigns.length})
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className="data-[state=active]:bg-[#ff3e3e] data-[state=active]:text-white"
                >
                  Completed ({completedCampaigns.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-4">
                <div className="space-y-4">
                  {activeCampaigns.map((campaign) => (
                    <Card key={campaign.id} className="overflow-hidden border-zinc-800 bg-zinc-800/30">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-md bg-zinc-800 flex items-center justify-center overflow-hidden">
                                <Image
                                  src={campaign.logoUrl || "/placeholder.svg"}
                                  alt={`${campaign.brand} logo`}
                                  className="h-10 w-10 object-contain"
                                />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-white">{campaign.campaign}</h3>
                                <p className="text-zinc-400">{campaign.brand}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                              <Calendar className="h-4 w-4 text-zinc-500" />
                              <span className="font-medium text-zinc-300">Deadline:</span>{" "}
                              {formatDate(campaign.deadline)}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                              <DollarSign className="h-4 w-4 text-zinc-500" />
                              <span className="font-medium text-zinc-300">Potential Payout:</span> {campaign.payment}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                              <Eye className="h-4 w-4 text-zinc-500" />
                              <span className="font-medium text-zinc-300">Views Required:</span>{" "}
                              {formatNumber(campaign.viewsRequired || 1000000)}
                            </div>
                            <div className="text-sm text-zinc-300">
                              <span className="font-medium text-zinc-300">Requirements:</span> {campaign.requirements}
                            </div>
                          </div>
                        </div>
                        <div className="bg-zinc-950 p-6 flex flex-col justify-center items-center md:w-64">
                          <Button
                            className="w-full bg-[#ff3e3e] hover:bg-[#ff3e3e]/90 text-white mb-2"
                            onClick={() => handleSubmitClick(campaign)}
                          >
                            Submit Short
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="available" className="mt-4">
                <div className="space-y-4">
                  {availableCampaigns.map((campaign) => (
                    <Card key={campaign.id} className="overflow-hidden border-zinc-800 bg-zinc-800/30">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-md bg-zinc-800 flex items-center justify-center overflow-hidden">
                                <img
                                  src={campaign.logoUrl || "/placeholder.svg"}
                                  alt={`${campaign.brand} logo`}
                                  className="h-10 w-10 object-contain"
                                />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-white">{campaign.campaign}</h3>
                                <p className="text-zinc-400">{campaign.brand}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-zinc-300">
                                <Calendar className="h-4 w-4 text-zinc-500" />
                                <span className="font-medium text-zinc-300">Deadline:</span>{" "}
                                {formatDate(campaign.deadline)}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-zinc-300">
                                <DollarSign className="h-4 w-4 text-zinc-500" />
                                <span className="font-medium text-zinc-300">Potential Payout:</span> {campaign.payment}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-zinc-300">
                                <Eye className="h-4 w-4 text-zinc-500" />
                                <span className="font-medium text-zinc-300">Views Required:</span>{" "}
                                {formatNumber(campaign.viewsRequired || 1000000)}
                              </div>
                              <div className="text-sm text-zinc-300">
                                <span className="font-medium">Estimated Views:</span> {campaign.estimatedViews}
                              </div>
                              <div className="text-sm text-zinc-300">
                                <span className="font-medium">Target Audience:</span> {campaign.targetAudience}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="text-sm text-zinc-300">
                                <span className="font-medium">Logo Placement:</span> {campaign.logoPlacement}
                              </div>
                              <div className="text-sm text-zinc-300">
                                <span className="font-medium">Campaign Goals:</span> {campaign.campaignGoals}
                              </div>
                              <div className="text-sm text-zinc-300">
                                <span className="font-medium">Additional Info:</span> {campaign.additionalInfo}
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 text-sm text-zinc-300">
                            <span className="font-medium text-zinc-300">Requirements:</span> {campaign.requirements}
                          </div>
                        </div>
                        <div className="bg-zinc-950 p-6 flex flex-col justify-center items-center md:w-64">
                          <Button
                            className="w-full bg-[#ff3e3e] hover:bg-[#ff3e3e]/90 text-white mb-2"
                            onClick={() => handleApply(campaign)}
                          >
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-4">
                <div className="space-y-4">
                  {completedCampaigns.map((campaign) => (
                    <Card key={campaign.id} className="overflow-hidden border-zinc-800 bg-zinc-800/30">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-md bg-zinc-800 flex items-center justify-center overflow-hidden">
                                <img
                                  src={campaign.logoUrl || "/placeholder.svg"}
                                  alt={`${campaign.brand} logo`}
                                  className="h-10 w-10 object-contain"
                                />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-white">{campaign.campaign}</h3>
                                <p className="text-zinc-400">{campaign.brand}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                              <Calendar className="h-4 w-4 text-zinc-500" />
                              <span className="font-medium">Completed Date:</span> {formatDate(campaign.completedDate)}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                              <DollarSign className="h-4 w-4 text-zinc-500" />
                              <span className="font-medium text-green-500">Payout:</span> {campaign.payment}
                            </div>
                          </div>
                          <div className="mt-4 flex items-center space-x-6">
                            <div>
                              <p className="text-xs text-zinc-400">Views</p>
                              <p className="font-semibold text-white">
                                {formatNumber(Number.parseInt(campaign.views))}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-zinc-400">Engagement</p>
                              <p className="font-semibold text-white">{campaign.engagement}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-zinc-950 p-6 flex flex-col justify-center items-center md:w-64">
                          <div className="text-center">
                            <p className="text-xs text-zinc-300 mb-3">Want to participate in more campaigns?</p>
                            <Button
                              className="w-full bg-[#ff3e3e] hover:bg-[#ff3e3e]/90 text-white mb-2 text-xs"
                              onClick={() => setActiveTab("available")}
                            >
                              Check out available campaigns
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Apply to Campaign Dialog */}
      <Dialog open={isApplyDialogOpen} onOpenChange={() => setIsApplyDialogOpen(false)}>
        <DialogContent className="sm:max-w-[700px] bg-zinc-900 border-zinc-700 max-h-[70vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">Apply to {selectedCampaign?.campaign}</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Please provide the following information to apply for this campaign.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="channel-link" className="text-zinc-400">
                Channel Link
              </Label>
              <Input
                id="channel-link"
                placeholder="https://youtube.com/channel/..."
                className="bg-zinc-800 border-zinc-700 text-zinc-300"
                value={channelLink}
                onChange={(e) => setChannelLink(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="views-last-28-days" className="text-zinc-400">
                Views in Last 28 Days
              </Label>
              <Input
                type="number"
                id="views-last-28-days"
                placeholder="e.g., 10000"
                className="bg-zinc-800 border-zinc-700 text-zinc-300"
                value={viewsLast28Days}
                onChange={(e) => setViewsLast28Days(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="niche" className="text-zinc-400">
                Niche
              </Label>
              <Select onValueChange={setNiche}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-300">
                  <SelectValue placeholder="Select a niche" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-300">
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="beauty">Beauty</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="shorts-per-month" className="text-zinc-400">
                How many Shorts do you upload a month?
              </Label>
              <Select onValueChange={setShortsPerMonth}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-300">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-300">
                  <SelectItem value="1-5">1-5</SelectItem>
                  <SelectItem value="6-10">6-10</SelectItem>
                  <SelectItem value="11-20">11-20</SelectItem>
                  <SelectItem value="20+">20+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-start space-x-2 py-2">
            <div className="flex items-center h-5 mt-1">
              <input
                type="checkbox"
                id="application-terms-agreement"
                checked={applicationTermsAgreed}
                onChange={(e) => setApplicationTermsAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-[#ff3e3e] focus:ring-[#ff3e3e] focus:ring-offset-zinc-900"
              />
            </div>
            <div className="ml-2">
              <label htmlFor="application-terms-agreement" className="text-sm text-zinc-300">
                I agree to the{" "}
                <Link href="/terms" className="text-[#ff3e3e] hover:underline" target="_blank">
                  Terms and Conditions
                </Link>
                .
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsApplyDialogOpen(false)}
              className="border-zinc-700 text-zinc-300"
            >
              Cancel
            </Button>
            <Button
              className="bg-[#ff3e3e] hover:bg-[#ff3e3e]/90 text-white"
              onClick={handleApplySubmit}
              disabled={!applicationTermsAgreed}
            >
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Submit Short Dialog */}
      <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
        <DialogContent className="sm:max-w-[700px] bg-zinc-900 border-zinc-700 max-h-[70vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">Submit Short for {selectedCampaign?.campaign}</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Please provide the YouTube Shorts URL and details about your submission.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            {/* Campaign Details Section */}
            {selectedCampaign && (
              <div className="bg-zinc-800/50 p-4 rounded-md border border-zinc-700 mb-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-md bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src={selectedCampaign.logoUrl || "/placeholder.svg"}
                      alt={`${selectedCampaign.brand} logo`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{selectedCampaign.campaign}</h4>
                    <p className="text-sm text-zinc-400">{selectedCampaign.brand}</p>
                  </div>
                </div>
                <div className="text-sm text-zinc-300">
                  <span className="font-medium text-red-500">Requirements:</span> {selectedCampaign.requirements}
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-zinc-500" />
                    <span className="font-medium text-red-500">Deadline:</span> {formatDate(selectedCampaign.deadline)}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-zinc-500" />
                    <span className="font-medium text-green-500">Potential Payout:</span> {selectedCampaign.payment}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-zinc-500" />
                    <span className="font-medium text-red-500">Views Required:</span>
                    {formatNumber(selectedCampaign.viewsRequired || 1000000)}
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="shorts-url" className="text-zinc-400">
                  Shorts URL
                </Label>
                <Input
                  id="shorts-url"
                  placeholder="https://youtube.com/shorts/..."
                  className="bg-zinc-800 border-zinc-700 text-zinc-300"
                  value={shortsUrl}
                  onChange={(e) => setShortsUrl(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="creator-notes" className="text-zinc-400">
                  Creator Notes
                </Label>
                <Textarea
                  id="creator-notes"
                  placeholder="Add any details about your content..."
                  className="bg-zinc-800 border-zinc-700 text-zinc-300 min-h-[100px]"
                  value={creatorNotes}
                  onChange={(e) => setCreatorNotes(e.target.value)}
                />
              </div>
            </div>

            <div className="text-sm text-zinc-400 bg-zinc-800/50 p-3 rounded-md border border-zinc-700">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <span className="font-medium text-white">Submission Guidelines:</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-sm text-zinc-400">
                <li>Brand logo must be visible throughout the entire short</li>
                <li>Content must comply with YouTube's community guidelines</li>
                <li>Do not modify or distort the brand elements</li>
                <li>Submissions are typically reviewed within 24-48 hours</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start space-x-2 py-2">
            <div className="flex items-center h-5 mt-1">
              <input
                type="checkbox"
                id="terms-agreement"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-[#ff3e3e] focus:ring-[#ff3e3e] focus:ring-offset-zinc-900"
              />
            </div>
            <div className="ml-2">
              <label htmlFor="terms-agreement" className="text-sm text-zinc-300">
                I acknowledge that my submission complies with{" "}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff3e3e] hover:underline"
                >
                  YouTube's Terms of Service
                </a>
                ,{" "}
                <a
                  href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff3e3e] hover:underline"
                >
                  Community Guidelines
                </a>
                , and{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff3e3e] hover:underline"
                >
                  Shorts Rev's Terms and Conditions
                </Link>
                .
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsSubmitDialogOpen(false)}
              className="border-zinc-700 text-zinc-300"
            >
              Cancel
            </Button>
            <Button
              className="bg-[#ff3e3e] hover:bg-[#ff3e3e]/90 text-white"
              onClick={handleSubmit}
              disabled={!termsAgreed}
            >
              Submit for Review
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}

export default BrandBoostPage
