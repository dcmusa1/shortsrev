"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye, CheckCircle, DollarSign, Calendar, Users, Award } from "lucide-react"
import Image from "next/image"
import { CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Line, LineChart } from "recharts"
import { formatNumber, formatCurrency } from "@/utils/format-numbers"

// Sample data for brand campaigns
const brandCampaigns = [
  {
    id: 1,
    brand: "Gaming Brand",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Feature this gaming brand logo in your YouTube Shorts",
    viewsRequired: 1000000,
    reward: 1000,
    duration: "30 days",
    status: "active",
    category: "Gaming",
    createdAt: "2023-10-01",
    applicants: 24,
    active: 8,
    completed: 3,
    budget: 5000,
  },
  {
    id: 2,
    brand: "FitLife",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Promote FitLife supplements in fitness-related Shorts",
    viewsRequired: 500000,
    reward: 750,
    duration: "45 days",
    status: "active",
    category: "Fitness",
    createdAt: "2023-09-15",
    applicants: 18,
    active: 6,
    completed: 2,
    budget: 3500,
  },
  {
    id: 3,
    brand: "TechGadget",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Showcase TechGadget products in your tech review Shorts",
    viewsRequired: 750000,
    reward: 1200,
    duration: "60 days",
    status: "active",
    category: "Technology",
    createdAt: "2023-09-10",
    applicants: 32,
    active: 12,
    completed: 5,
    budget: 6000,
  },
  {
    id: 4,
    brand: "FashionNow",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Include FashionNow logo in style and fashion Shorts",
    viewsRequired: 300000,
    reward: 500,
    duration: "30 days",
    status: "active",
    category: "Fashion",
    createdAt: "2023-10-05",
    applicants: 15,
    active: 4,
    completed: 0,
    budget: 2500,
  },
  {
    id: 5,
    brand: "TravelPlus",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Feature TravelPlus in your travel adventure Shorts",
    viewsRequired: 600000,
    reward: 900,
    duration: "45 days",
    status: "active",
    category: "Travel",
    createdAt: "2023-09-20",
    applicants: 21,
    active: 7,
    completed: 1,
    budget: 4000,
  },
]

// Sample data for active campaigns
const activeCampaigns = [
  {
    id: 201,
    creatorName: "Alex Gaming",
    creatorId: "AG123",
    campaignId: 1,
    campaignName: "Gaming Brand",
    startDate: "2023-10-10",
    endDate: "2023-11-10",
    currentViews: 450000,
    targetViews: 1000000,
    progress: 45,
    videoUrl: "https://youtube.com/shorts/abc123",
  },
  {
    id: 202,
    creatorName: "TechReviewer",
    creatorId: "TR789",
    campaignId: 3,
    campaignName: "TechGadget",
    startDate: "2023-09-15",
    endDate: "2023-11-15",
    currentViews: 520000,
    targetViews: 750000,
    progress: 69,
    videoUrl: "https://youtube.com/shorts/def456",
  },
]

// Analytics data with daily points
const analyticsData = [
  { date: "Apr 1", campaigns: 3, applications: 12, views: 120000, revenue: 1200 },
  { date: "Apr 2", campaigns: 3, applications: 13, views: 125000, revenue: 1250 },
  { date: "Apr 3", campaigns: 3, applications: 14, views: 130000, revenue: 1300 },
  { date: "Apr 4", campaigns: 3, applications: 15, views: 140000, revenue: 1400 },
  { date: "Apr 5", campaigns: 3, applications: 16, views: 145000, revenue: 1450 },
  { date: "Apr 6", campaigns: 4, applications: 17, views: 150000, revenue: 1500 },
  { date: "Apr 7", campaigns: 4, applications: 18, views: 160000, revenue: 1600 },
  { date: "Apr 8", campaigns: 4, applications: 19, views: 170000, revenue: 1700 },
  { date: "Apr 9", campaigns: 4, applications: 20, views: 180000, revenue: 1800 },
  { date: "Apr 10", campaigns: 4, applications: 21, views: 190000, revenue: 1900 },
  { date: "Apr 11", campaigns: 4, applications: 22, views: 200000, revenue: 2000 },
  { date: "Apr 12", campaigns: 4, applications: 23, views: 210000, revenue: 2100 },
  { date: "Apr 13", campaigns: 5, applications: 24, views: 220000, revenue: 2200 },
  { date: "Apr 14", campaigns: 5, applications: 25, views: 230000, revenue: 2300 },
  { date: "Apr 15", campaigns: 5, applications: 26, views: 240000, revenue: 2400 },
  { date: "Apr 16", campaigns: 5, applications: 27, views: 250000, revenue: 2500 },
  { date: "Apr 17", campaigns: 5, applications: 28, views: 260000, revenue: 2600 },
]

export default function AdminBrandCampaignsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [timeRange, setTimeRange] = useState("30d")
  const [currentData, setCurrentData] = useState(analyticsData)
  const [timeFilter, setTimeFilter] = useState("7d")

  const filteredCampaigns = brandCampaigns.filter((campaign) => {
    const matchesSearch =
      campaign.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchTerm.toLowerCase())

    if (statusFilter === "all") return matchesSearch
    return matchesSearch && campaign.status === statusFilter
  })

  // Calculate total stats
  const totalCampaigns = brandCampaigns.length
  const totalApplications = brandCampaigns.reduce((sum, campaign) => sum + campaign.applicants, 0)
  const totalActive = brandCampaigns.reduce((sum, campaign) => sum + campaign.active, 0)
  const totalCompleted = brandCampaigns.reduce((sum, campaign) => sum + campaign.completed, 0)
  const totalRevenue = brandCampaigns.reduce((sum, campaign) => sum + campaign.reward * campaign.completed, 0)

  // Handle time range change
  const handleTimeRangeChange = (range) => {
    setTimeRange(range)
    // In a real app, this would fetch data for the selected time range
    // For now, we'll just simulate different data lengths
    if (range === "7d") {
      setCurrentData(analyticsData.slice(-7))
    } else if (range === "30d") {
      setCurrentData(analyticsData)
    } else if (range === "90d") {
      // In a real app, this would be 90 days of data
      setCurrentData(analyticsData)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">BrandBoost Management</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Last updated: Today, 10:45 AM</span>
            <button
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
              onClick={() => alert("Dashboard refreshed")}
            >
              Refresh
            </button>
          </div>
        </div>
        <p className="text-zinc-400">Create and manage brand promotion campaigns for YouTube Shorts creators.</p>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Total Campaigns</h3>
              <div className="bg-red-500/20 p-2 rounded-md">
                <Award className="h-4 w-4 text-red-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{totalCampaigns}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <Plus className="h-3 w-3 mr-1" /> 2 new this month
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Applications</h3>
              <div className="bg-blue-500/20 p-2 rounded-md">
                <Users className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{totalApplications}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <Plus className="h-3 w-3 mr-1" /> 8 new this week
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Active</h3>
              <div className="bg-yellow-500/20 p-2 rounded-md">
                <Eye className="h-4 w-4 text-yellow-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{totalActive}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <Plus className="h-3 w-3 mr-1" /> 3 new this month
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Completed</h3>
              <div className="bg-green-500/20 p-2 rounded-md">
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{totalCompleted}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <Plus className="h-3 w-3 mr-1" /> 2 this month
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Total Revenue</h3>
              <div className="bg-red-500/20 p-2 rounded-md">
                <DollarSign className="h-4 w-4 text-red-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{formatCurrency(totalRevenue)}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <Plus className="h-3 w-3 mr-1" /> {formatCurrency(1800)} this month
            </p>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-medium">Campaign Performance</h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className={timeRange === "7d" ? "bg-red-600 text-white" : "border-zinc-700 text-zinc-400"}
                  onClick={() => handleTimeRangeChange("7d")}
                >
                  7D
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={timeRange === "30d" ? "bg-red-600 text-white" : "border-zinc-700 text-zinc-400"}
                  onClick={() => handleTimeRangeChange("30d")}
                >
                  30D
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={timeRange === "90d" ? "bg-red-600 text-white" : "border-zinc-700 text-zinc-400"}
                  onClick={() => handleTimeRangeChange("90d")}
                >
                  90D
                </Button>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                  <XAxis dataKey="date" tick={{ fill: "#a1a1aa" }} />
                  <YAxis tick={{ fill: "#a1a1aa" }} tickFormatter={(value) => formatNumber(value)} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#3f3f46" }}
                    labelStyle={{ color: "#ffffff" }}
                    formatter={(value, name) => {
                      if (name === "views") return [formatNumber(value), "Views"]
                      if (name === "revenue") return [formatCurrency(value), "Revenue"]
                      return [value, name]
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="views" name="Views" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 w-1/3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border-zinc-700 text-zinc-300 pl-10"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-700 text-zinc-300">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-700">
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Plus className="h-4 w-4 mr-2" /> Create Campaign
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-700">
                <DialogHeader>
                  <DialogTitle>Create New Brand Campaign</DialogTitle>
                  <DialogDescription className="text-zinc-400">
                    Set up a new brand promotion campaign for creators.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="brand-name" className="text-right text-zinc-400">
                      Brand Name
                    </Label>
                    <Input id="brand-name" className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-300" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="brand-logo" className="text-right text-zinc-400">
                      Brand Logo URL
                    </Label>
                    <Input id="brand-logo" className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-300" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right text-zinc-400">
                      Description
                    </Label>
                    <Textarea id="description" className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-300" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="views-required" className="text-right text-zinc-400">
                      Views Required
                    </Label>
                    <Input
                      id="views-required"
                      type="number"
                      className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-300"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="reward" className="text-right text-zinc-400">
                      Reward ($)
                    </Label>
                    <Input id="reward" type="number" className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-300" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration" className="text-right text-zinc-400">
                      Duration (days)
                    </Label>
                    <Input
                      id="duration"
                      type="number"
                      className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-300"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="is-active" className="text-right text-zinc-400">
                      Active
                    </Label>
                    <div className="flex items-center space-x-2 col-span-3">
                      <Switch id="is-active" />
                      <Label htmlFor="is-active" className="text-zinc-300">
                        Make campaign active immediately
                      </Label>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsCreateDialogOpen(false)}
                    className="border-zinc-700 text-zinc-300"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => {
                      alert("Campaign created successfully!")
                      setIsCreateDialogOpen(false)
                    }}
                  >
                    Create Campaign
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="bg-zinc-800 border border-zinc-700">
            <TabsTrigger value="campaigns" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              All Campaigns
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Active Campaigns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-4 mt-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-zinc-800">
                <thead className="bg-zinc-900">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
                    >
                      Views Required
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
                    >
                      Reward
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
                    >
                      Stats
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-zinc-900 divide-y divide-zinc-800">
                  {filteredCampaigns.map((campaign) => (
                    <tr key={campaign.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center">
                            <Image
                              src={campaign.logo || "/placeholder.svg"}
                              alt={`${campaign.brand} logo`}
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-zinc-300">{campaign.brand}</div>
                            <div className="text-sm text-zinc-500">
                              Created {new Date(campaign.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                        {formatNumber(campaign.viewsRequired)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                        {formatCurrency(campaign.reward)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">{campaign.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          className={
                            campaign.status === "active"
                              ? "bg-green-600 text-white"
                              : campaign.status === "paused"
                                ? "bg-yellow-600 text-white"
                                : "bg-blue-600 text-white"
                          }
                        >
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                        <div className="flex flex-col">
                          <span>{campaign.applicants} applicants</span>
                          <span>{campaign.active} active</span>
                          <span>{campaign.completed} completed</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 text-zinc-300"
                            onClick={() => alert(`Edit campaign: ${campaign.brand}`)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 text-red-500"
                            onClick={() => alert(`Delete campaign: ${campaign.brand}`)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-800/70 transition-colors"
                >
                  <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <h3 className="font-medium">{campaign.campaignName}</h3>
                      </div>
                    </div>
                    <Badge className="bg-blue-600 text-white">In Progress</Badge>
                  </div>
                  <div className="p-4">
                    <div className="w-full bg-zinc-800 rounded-full h-2.5 mb-2">
                      <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                    </div>

                    <div className="flex justify-between text-sm mb-4">
                      <span className="text-zinc-400">{formatNumber(campaign.currentViews)} views</span>
                      <span className="text-zinc-400">{formatNumber(campaign.targetViews)} views goal</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-zinc-500" />
                        <span className="text-zinc-400">
                          Started: {new Date(campaign.startDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-zinc-500" />
                        <span className="text-zinc-400">Ends: {new Date(campaign.endDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-zinc-500" />
                        <span className="text-zinc-400">Progress: {campaign.progress}%</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-zinc-500" />
                        <span className="text-zinc-400">
                          Budget:{" "}
                          {formatCurrency(brandCampaigns.find((c) => c.id === campaign.campaignId)?.budget || 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {activeCampaigns.length === 0 && (
              <div className="p-8 text-center bg-zinc-900 border border-zinc-800 rounded-lg">
                <p className="text-zinc-400">There are no active brand campaigns at the moment.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
