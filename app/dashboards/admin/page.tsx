"use client"

import Link from "next/link"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import {
  BarChart3,
  Users,
  Video,
  Music2,
  UserPlus,
  Ticket,
  ClipboardList,
  ArrowUpRight,
  TrendingUp,
  DollarSign,
  AlertCircle,
  Play,
  ExternalLink,
} from "lucide-react"
import { CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Line, LineChart } from "recharts"
import { useState } from "react"
import { formatNumber, formatCurrency } from "@/utils/format-numbers"

export default function AdminDashboard() {
  // Sample data for the dashboard
  const stats = [
    { name: "Total Creators", value: "1,284", change: "+12%", icon: Users, color: "bg-blue-500" },
    { name: "Active Channels", value: "876", change: "+8%", icon: Video, color: "bg-green-500" },
    { name: "Shorts Using Tracks", value: "15,492", change: "+24%", icon: Music2, color: "bg-purple-500" },
    { name: "Revenue Generated", value: "$124,582", change: "+18%", icon: DollarSign, color: "bg-amber-500" },
    { name: "Total Affiliates", value: "342", change: "+15%", icon: Users, color: "bg-indigo-500" },
    { name: "Affiliate Channels", value: "528", change: "+11%", icon: Video, color: "bg-teal-500" },
    { name: "Affiliate Views", value: "8.2M", change: "+19%", icon: BarChart3, color: "bg-orange-500" },
    { name: "Affiliate Revenue", value: "$78,945", change: "+22%", icon: DollarSign, color: "bg-pink-500" },
  ]

  const pendingItems = [
    { name: "Channel Reviews", count: 24, icon: Video, href: "/dashboards/admin/channels" },
    { name: "Shorts Reviews", count: 87, icon: Music2, href: "/dashboards/admin/shorts-review" },
    { name: "Form Submissions", count: 12, icon: ClipboardList, href: "/dashboards/admin/submissions" },
  ]

  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d" | "custom">("30d")
  const [topMoversTimeRange, setTopMoversTimeRange] = useState<"7d" | "30d" | "all">("30d")
  const [topContentTimeRange, setTopContentTimeRange] = useState<"7d" | "30d" | "all">("30d")

  // Sample data for analytics graphs with daily data points
  const analyticsData = {
    "7d": [
      { date: "May 1", revenue: 1200, creatorViews: 42000, affiliateViews: 15000 },
      { date: "May 2", revenue: 980, creatorViews: 38000, affiliateViews: 12000 },
      { date: "May 3", revenue: 1450, creatorViews: 55000, affiliateViews: 18000 },
      { date: "May 4", revenue: 1800, creatorViews: 70000, affiliateViews: 25000 },
      { date: "May 5", revenue: 1650, creatorViews: 62000, affiliateViews: 22000 },
      { date: "May 6", revenue: 1100, creatorViews: 43000, affiliateViews: 16000 },
      { date: "May 7", revenue: 1350, creatorViews: 50000, affiliateViews: 19000 },
    ],
    "30d": Array.from({ length: 30 }, (_, i) => {
      const day = i + 1
      const date = day <= 9 ? `Apr ${day}` : day <= 30 ? `Apr ${day}` : `May ${day - 30}`
      return {
        date,
        revenue: Math.floor(800 + Math.random() * 1200),
        creatorViews: Math.floor(30000 + Math.random() * 50000),
        affiliateViews: Math.floor(10000 + Math.random() * 20000),
      }
    }),
    "90d": Array.from({ length: 90 }, (_, i) => {
      const day = i + 1
      let date
      if (day <= 28) date = `Feb ${day}`
      else if (day <= 59) date = `Mar ${day - 28}`
      else if (day <= 89) date = `Apr ${day - 59}`
      else date = `May ${day - 89}`

      return {
        date,
        revenue: Math.floor(700 + Math.random() * 1500),
        creatorViews: Math.floor(25000 + Math.random() * 60000),
        affiliateViews: Math.floor(8000 + Math.random() * 25000),
      }
    }),
    custom: [
      { date: "Apr 15", revenue: 1100, creatorViews: 42000, affiliateViews: 15000 },
      { date: "Apr 16", revenue: 980, creatorViews: 38000, affiliateViews: 12000 },
      { date: "Apr 17", revenue: 1450, creatorViews: 55000, affiliateViews: 18000 },
      { date: "Apr 18", revenue: 1800, creatorViews: 70000, affiliateViews: 25000 },
      { date: "Apr 19", revenue: 1650, creatorViews: 62000, affiliateViews: 22000 },
    ],
  }

  // Sample data for top shorts with YouTube links
  const topShortsByViews = [
    {
      title: "Dance Challenge #243",
      creator: "DanceKing",
      views: "8.7M",
      change: "+42%",
      youtubeLink: "https://youtube.com/shorts/abc123",
    },
    {
      title: "Funny Cat Compilation",
      creator: "PetLover",
      views: "7.2M",
      change: "+38%",
      youtubeLink: "https://youtube.com/shorts/def456",
    },
    {
      title: "How to Make Perfect Pasta",
      creator: "ChefMaster",
      views: "6.9M",
      change: "+35%",
      youtubeLink: "https://youtube.com/shorts/ghi789",
    },
    {
      title: "Morning Routine 2023",
      creator: "LifestyleGuru",
      views: "6.5M",
      change: "+33%",
      youtubeLink: "https://youtube.com/shorts/jkl012",
    },
    {
      title: "Top 10 Movie Scenes",
      creator: "FilmCritic",
      views: "6.1M",
      change: "+31%",
      youtubeLink: "https://youtube.com/shorts/mno345",
    },
    {
      title: "DIY Home Decor Ideas",
      creator: "CraftyCreator",
      views: "5.8M",
      change: "+30%",
      youtubeLink: "https://youtube.com/shorts/pqr678",
    },
    {
      title: "Workout Tips for Beginners",
      creator: "FitnessCoach",
      views: "5.5M",
      change: "+28%",
      youtubeLink: "https://youtube.com/shorts/stu901",
    },
    {
      title: "Easy Makeup Tutorial",
      creator: "BeautyGuru",
      views: "5.2M",
      change: "+27%",
      youtubeLink: "https://youtube.com/shorts/vwx234",
    },
    {
      title: "Tech Review: Latest Gadget",
      creator: "TechReviewer",
      views: "4.9M",
      change: "+25%",
      youtubeLink: "https://youtube.com/shorts/yz567",
    },
    {
      title: "Travel Vlog: Hidden Gems",
      creator: "Wanderlust",
      views: "4.7M",
      change: "+24%",
      youtubeLink: "https://youtube.com/shorts/abc890",
    },
    {
      title: "Gaming Highlights Compilation",
      creator: "GamerPro",
      views: "4.5M",
      change: "+23%",
      youtubeLink: "https://youtube.com/shorts/def123",
    },
    {
      title: "Fashion Trends 2023",
      creator: "StyleIcon",
      views: "4.3M",
      change: "+22%",
      youtubeLink: "https://youtube.com/shorts/ghi456",
    },
    {
      title: "Cooking Hacks You Need",
      creator: "KitchenMaster",
      views: "4.1M",
      change: "+21%",
      youtubeLink: "https://youtube.com/shorts/jkl789",
    },
    {
      title: "Pet Training Tips",
      creator: "AnimalWhisperer",
      views: "3.9M",
      change: "+20%",
      youtubeLink: "https://youtube.com/shorts/mno012",
    },
    {
      title: "Relationship Advice",
      creator: "LoveGuru",
      views: "3.7M",
      change: "+19%",
      youtubeLink: "https://youtube.com/shorts/pqr345",
    },
    {
      title: "Gardening for Beginners",
      creator: "PlantLover",
      views: "3.5M",
      change: "+18%",
      youtubeLink: "https://youtube.com/shorts/stu678",
    },
    {
      title: "Financial Tips for 2023",
      creator: "MoneyMaster",
      views: "3.3M",
      change: "+17%",
      youtubeLink: "https://youtube.com/shorts/vwx901",
    },
    {
      title: "Parenting Hacks",
      creator: "SuperParent",
      views: "3.1M",
      change: "+16%",
      youtubeLink: "https://youtube.com/shorts/yz234",
    },
    {
      title: "Home Organization Ideas",
      creator: "CleanFreak",
      views: "2.9M",
      change: "+15%",
      youtubeLink: "https://youtube.com/shorts/abc567",
    },
    {
      title: "Language Learning Tips",
      creator: "PolyglotPro",
      views: "2.7M",
      change: "+14%",
      youtubeLink: "https://youtube.com/shorts/def890",
    },
    {
      title: "Photography Tutorial",
      creator: "PhotoMaster",
      views: "2.5M",
      change: "+13%",
      youtubeLink: "https://youtube.com/shorts/ghi123",
    },
    {
      title: "Meditation for Beginners",
      creator: "ZenMaster",
      views: "2.3M",
      change: "+12%",
      youtubeLink: "https://youtube.com/shorts/jkl456",
    },
    {
      title: "Car Maintenance Tips",
      creator: "AutoExpert",
      views: "2.1M",
      change: "+11%",
      youtubeLink: "https://youtube.com/shorts/mno789",
    },
    {
      title: "Study Hacks for Students",
      creator: "AcademicPro",
      views: "1.9M",
      change: "+10%",
      youtubeLink: "https://youtube.com/shorts/pqr012",
    },
    {
      title: "Healthy Meal Prep Ideas",
      creator: "NutritionExpert",
      views: "1.7M",
      change: "+9%",
      youtubeLink: "https://youtube.com/shorts/stu345",
    },
    {
      title: "Digital Art Tutorial",
      creator: "ArtistPro",
      views: "1.5M",
      change: "+8%",
      youtubeLink: "https://youtube.com/shorts/vwx678",
    },
    {
      title: "Productivity Tips",
      creator: "EfficiencyGuru",
      views: "1.3M",
      change: "+7%",
      youtubeLink: "https://youtube.com/shorts/yz901",
    },
    {
      title: "Mental Health Awareness",
      creator: "WellnessCoach",
      views: "1.1M",
      change: "+6%",
      youtubeLink: "https://youtube.com/shorts/abc234",
    },
    {
      title: "DIY Gift Ideas",
      creator: "CraftMaster",
      views: "900K",
      change: "+5%",
      youtubeLink: "https://youtube.com/shorts/def567",
    },
    {
      title: "Public Speaking Tips",
      creator: "SpeechPro",
      views: "700K",
      change: "+4%",
      youtubeLink: "https://youtube.com/shorts/ghi890",
    },
  ]

  const topShortsByRevenue = [
    { title: "Product Review - Gadget", creator: "TechInfluencer", revenue: "$42,500", change: "+45%" },
    { title: "Skincare Routine 2023", creator: "BeautyMogul", revenue: "$38,200", change: "+42%" },
    { title: "Fitness Challenge #87", creator: "FitnessStar", revenue: "$35,700", change: "+39%" },
    { title: "Home Renovation Tips", creator: "DIYMaster", revenue: "$32,900", change: "+36%" },
    { title: "Fashion Trends 2023", creator: "StyleQueen", revenue: "$30,500", change: "+34%" },
  ]

  // Create time-range specific data for top shorts
  const getTopShortsByTimeRange = (timeRange) => {
    // Apply a multiplier to views/revenue based on time range
    const multiplier = timeRange === "7d" ? 0.3 : timeRange === "30d" ? 0.6 : 1

    // Filter and modify the views data
    const viewsData = topShortsByViews.map((item) => {
      const viewValue =
        Number.parseFloat(item.views.replace(/[KM]/g, "")) * (item.views.includes("M") ? 1 : 0.001) * multiplier
      let formattedViews

      // Format views: use K for values under 1M, and M for values 1M and above
      if (viewValue >= 1) {
        formattedViews = `${viewValue.toFixed(1)}M`
      } else {
        formattedViews = `${(viewValue * 1000).toFixed(0)}K`
      }

      return {
        ...item,
        views: formattedViews,
        change: `+${Math.floor(Number.parseInt(item.change) * multiplier)}%`,
      }
    })

    // Filter and modify the revenue data
    const revenueData = topShortsByRevenue.map((item) => ({
      ...item,
      revenue: `${(Number.parseInt(item.revenue.replace(/[^0-9]/g, "")) * multiplier).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      change: `+${Math.floor(Number.parseInt(item.change) * multiplier)}%`,
    }))

    return {
      viewsData: viewsData.slice(0, 30), // Show top 30 shorts by views
      revenueData: revenueData.slice(0, 50), // Show top 50 shorts by revenue
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-zinc-400 text-sm">{stat.name}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-2 rounded-md`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                <span className="text-green-400">{stat.change}</span>
                <span className="text-zinc-500 ml-1">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pending Items */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              Pending Items Requiring Attention
            </h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pendingItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500 p-2 rounded-md">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-zinc-400">{item.count} pending</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-zinc-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="font-medium">Quick Actions</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/dashboards/admin/affiliates"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <UserPlus className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="font-medium">Manage Affiliates</p>
                  <p className="text-sm text-zinc-400">Add or remove affiliate users</p>
                </div>
              </Link>
              <Link
                href="/dashboards/admin/invite-codes"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <Ticket className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-medium">Generate Invite Codes</p>
                  <p className="text-sm text-zinc-400">Create new invite codes with custom splits</p>
                </div>
              </Link>
              <Link
                href="/dashboards/admin/signups"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <BarChart3 className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="font-medium">View Signup Analytics</p>
                  <p className="text-sm text-zinc-400">Track invite code usage and conversions</p>
                </div>
              </Link>
              <Link
                href="/dashboards/admin/manage-payouts"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <DollarSign className="h-5 w-5 text-amber-400" />
                <div>
                  <p className="font-medium">Manage Payouts</p>
                  <p className="text-sm text-zinc-400">Review and process creator payments</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Analytics Graph */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="font-medium flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-zinc-400" />
              Platform Analytics
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-zinc-800 rounded-md">
                <button
                  className={`px-3 py-1 text-sm rounded-md ${timeRange === "7d" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTimeRange("7d")}
                >
                  7D
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${timeRange === "30d" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTimeRange("30d")}
                >
                  30D
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${timeRange === "90d" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTimeRange("90d")}
                >
                  90D
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData[timeRange]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={{ stroke: "#3f3f46" }}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={{ stroke: "#3f3f46" }}
                    tickFormatter={(value) => {
                      if (value === undefined || value === null || value === "") return ""
                      if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
                      return `$${value}`
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={{ stroke: "#3f3f46" }}
                    tickFormatter={(value) => {
                      if (value === undefined || value === null || value === "") return ""
                      if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
                      if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                      return `${value}`
                    }}
                  />
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#3f3f46", borderRadius: "0.375rem" }}
                    labelStyle={{ color: "#ffffff" }}
                    formatter={(value, name) => {
                      if (value === undefined || value === null || value === "") {
                        return ["N/A", name]
                      }

                      if (name === "revenue") {
                        return [formatCurrency(value), "Revenue"]
                      } else {
                        const formattedValue = formatNumber(value)
                        return [
                          `${formattedValue} views`,
                          name === "creatorViews" ? "Creator Views" : "Affiliate Views",
                        ]
                      }
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    formatter={(value) => {
                      if (value === "revenue") return "Revenue"
                      if (value === "creatorViews") return "Creator Views"
                      if (value === "affiliateViews") return "Affiliate Views"
                      return value
                    }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="creatorViews"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="affiliateViews"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Top Movers */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-zinc-400" />
              Top Movers
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-zinc-800 rounded-md">
                <button
                  className={`px-3 py-1 text-sm rounded-md ${topMoversTimeRange === "7d" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTopMoversTimeRange("7d")}
                >
                  7D
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${topMoversTimeRange === "30d" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTopMoversTimeRange("30d")}
                >
                  30D
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${topMoversTimeRange === "all" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTopMoversTimeRange("all")}
                >
                  All Time
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Creators (Revenue) */}
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-3">Top Creators (Revenue)</h3>
                <div className="space-y-2">
                  {[
                    {
                      name: "MusicVibes",
                      value:
                        topMoversTimeRange === "7d" ? "$5,250" : topMoversTimeRange === "30d" ? "$14,250" : "$42,750",
                      change: "+28%",
                    },
                    {
                      name: "ShortsCreator123",
                      value:
                        topMoversTimeRange === "7d" ? "$4,870" : topMoversTimeRange === "30d" ? "$11,870" : "$35,610",
                      change: "+22%",
                    },
                    {
                      name: "CreativeShorts",
                      value:
                        topMoversTimeRange === "7d" ? "$3,940" : topMoversTimeRange === "30d" ? "$9,340" : "$28,020",
                      change: "+19%",
                    },
                    {
                      name: "TrendingNow",
                      value:
                        topMoversTimeRange === "7d" ? "$3,120" : topMoversTimeRange === "30d" ? "$8,120" : "$24,360",
                      change: "+16%",
                    },
                    {
                      name: "ShortsMaster",
                      value:
                        topMoversTimeRange === "7d" ? "$2,980" : topMoversTimeRange === "30d" ? "$7,980" : "$23,940",
                      change: "+14%",
                    },
                    {
                      name: "ViralContent",
                      value:
                        topMoversTimeRange === "7d" ? "$2,750" : topMoversTimeRange === "30d" ? "$7,250" : "$21,750",
                      change: "+13%",
                    },
                    {
                      name: "ShortsExpert",
                      value:
                        topMoversTimeRange === "7d" ? "$2,620" : topMoversTimeRange === "30d" ? "$6,820" : "$20,460",
                      change: "+12%",
                    },
                    {
                      name: "MusicMaster",
                      value:
                        topMoversTimeRange === "7d" ? "$2,480" : topMoversTimeRange === "30d" ? "$6,480" : "$19,440",
                      change: "+11%",
                    },
                    {
                      name: "TopCreator",
                      value:
                        topMoversTimeRange === "7d" ? "$2,350" : topMoversTimeRange === "30d" ? "$6,150" : "$18,450",
                      change: "+10%",
                    },
                    {
                      name: "ContentKing",
                      value:
                        topMoversTimeRange === "7d" ? "$2,220" : topMoversTimeRange === "30d" ? "$5,820" : "$17,460",
                      change: "+9%",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-zinc-800 rounded-md">
                      <div className="flex items-center gap-2">
                        {index < 3 ? (
                          <div
                            className={`px-2 py-0.5 rounded text-xs font-medium ${
                              index === 0
                                ? "bg-amber-500 text-black"
                                : index === 1
                                  ? "bg-zinc-300 text-black"
                                  : "bg-amber-700 text-white"
                            }`}
                          >
                            #{index + 1}
                          </div>
                        ) : (
                          <div className="bg-zinc-700 text-zinc-300 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                        )}
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.value}</span>
                        <span className="text-green-400 text-xs">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Creators (Views) */}
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-3">Top Creators (Views)</h3>
                <div className="space-y-2">
                  {[
                    {
                      name: "TrendingNow",
                      value: topMoversTimeRange === "7d" ? "850K" : topMoversTimeRange === "30d" ? "2.4M" : "7.2M",
                      change: "+32%",
                    },
                    {
                      name: "ViralShorts",
                      value: topMoversTimeRange === "7d" ? "720K" : topMoversTimeRange === "30d" ? "1.8M" : "5.4M",
                      change: "+26%",
                    },
                    {
                      name: "ShortsCreator123",
                      value: topMoversTimeRange === "7d" ? "580K" : topMoversTimeRange === "30d" ? "1.5M" : "4.5M",
                      change: "+21%",
                    },
                    {
                      name: "MusicVibes",
                      value: topMoversTimeRange === "7d" ? "450K" : topMoversTimeRange === "30d" ? "1.2M" : "3.6M",
                      change: "+18%",
                    },
                    {
                      name: "ContentPro",
                      value: topMoversTimeRange === "7d" ? "420K" : topMoversTimeRange === "30d" ? "1.1M" : "3.3M",
                      change: "+17%",
                    },
                    {
                      name: "ShortsMaster",
                      value: topMoversTimeRange === "7d" ? "390K" : topMoversTimeRange === "30d" ? "980K" : "2.9M",
                      change: "+16%",
                    },
                    {
                      name: "CreativeContent",
                      value: topMoversTimeRange === "7d" ? "360K" : topMoversTimeRange === "30d" ? "900K" : "2.7M",
                      change: "+15%",
                    },
                    {
                      name: "TopShorts",
                      value: topMoversTimeRange === "7d" ? "330K" : topMoversTimeRange === "30d" ? "825K" : "2.5M",
                      change: "+14%",
                    },
                    {
                      name: "ViralVideos",
                      value: topMoversTimeRange === "7d" ? "300K" : topMoversTimeRange === "30d" ? "750K" : "2.3M",
                      change: "+13%",
                    },
                    {
                      name: "ShortsExpert",
                      value: topMoversTimeRange === "7d" ? "270K" : topMoversTimeRange === "30d" ? "675K" : "2.0M",
                      change: "+12%",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-zinc-800 rounded-md">
                      <div className="flex items-center gap-2">
                        {index < 3 ? (
                          <div
                            className={`px-2 py-0.5 rounded text-xs font-medium ${
                              index === 0
                                ? "bg-amber-500 text-black"
                                : index === 1
                                  ? "bg-zinc-300 text-black"
                                  : "bg-amber-700 text-white"
                            }`}
                          >
                            #{index + 1}
                          </div>
                        ) : (
                          <div className="bg-zinc-700 text-zinc-300 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                        )}
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.value}</span>
                        <span className="text-green-400 text-xs">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Affiliates (Revenue) */}
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-3">Top Affiliates (Revenue)</h3>
                <div className="space-y-2">
                  {[
                    {
                      name: "AffiliateKing",
                      value:
                        topMoversTimeRange === "7d" ? "$3,850" : topMoversTimeRange === "30d" ? "$9,850" : "$29,550",
                      change: "+29%",
                    },
                    {
                      name: "MusicPromoter",
                      value:
                        topMoversTimeRange === "7d" ? "$3,420" : topMoversTimeRange === "30d" ? "$8,420" : "$25,260",
                      change: "+25%",
                    },
                    {
                      name: "CreatorNetwork",
                      value:
                        topMoversTimeRange === "7d" ? "$2,950" : topMoversTimeRange === "30d" ? "$7,350" : "$22,050",
                      change: "+21%",
                    },
                    {
                      name: "ShortsPartner",
                      value:
                        topMoversTimeRange === "7d" ? "$2,780" : topMoversTimeRange === "30d" ? "$6,780" : "$20,340",
                      change: "+18%",
                    },
                    {
                      name: "MusicAlliance",
                      value:
                        topMoversTimeRange === "7d" ? "$2,580" : topMoversTimeRange === "30d" ? "$6,380" : "$19,140",
                      change: "+17%",
                    },
                    {
                      name: "AffiliateGuru",
                      value:
                        topMoversTimeRange === "7d" ? "$2,380" : topMoversTimeRange === "30d" ? "$5,980" : "$17,940",
                      change: "+16%",
                    },
                    {
                      name: "PartnerPro",
                      value:
                        topMoversTimeRange === "7d" ? "$2,180" : topMoversTimeRange === "30d" ? "$5,580" : "$16,740",
                      change: "+15%",
                    },
                    {
                      name: "MusicPartner",
                      value:
                        topMoversTimeRange === "7d" ? "$1,980" : topMoversTimeRange === "30d" ? "$5,180" : "$15,540",
                      change: "+14%",
                    },
                    {
                      name: "AffiliateExpert",
                      value:
                        topMoversTimeRange === "7d" ? "$1,780" : topMoversTimeRange === "30d" ? "$4,780" : "$14,340",
                      change: "+13%",
                    },
                    {
                      name: "TopAffiliate",
                      value:
                        topMoversTimeRange === "7d" ? "$1,580" : topMoversTimeRange === "30d" ? "$4,380" : "$13,140",
                      change: "+12%",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-zinc-800 rounded-md">
                      <div className="flex items-center gap-2">
                        {index < 3 ? (
                          <div
                            className={`px-2 py-0.5 rounded text-xs font-medium ${
                              index === 0
                                ? "bg-amber-500 text-black"
                                : index === 1
                                  ? "bg-zinc-300 text-black"
                                  : "bg-amber-700 text-white"
                            }`}
                          >
                            #{index + 1}
                          </div>
                        ) : (
                          <div className="bg-zinc-700 text-zinc-300 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                        )}
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.value}</span>
                        <span className="text-green-400 text-xs">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Affiliates by Referrals */}
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-3">Top Affiliates by Referrals</h3>
                <div className="space-y-2">
                  {[
                    { name: "AffiliateKing", referrals: 87, change: "+29%" },
                    { name: "MusicPromoter", referrals: 76, change: "+25%" },
                    { name: "CreatorNetwork", referrals: 65, change: "+21%" },
                    { name: "ShortsPartner", referrals: 58, change: "+18%" },
                    { name: "MusicAlliance", referrals: 52, change: "+17%" },
                    { name: "AffiliateGuru", referrals: 48, change: "+16%" },
                    { name: "PartnerPro", referrals: 43, change: "+15%" },
                    { name: "MusicPartner", referrals: 39, change: "+14%" },
                    { name: "AffiliateExpert", referrals: 35, change: "+13%" },
                    { name: "TopAffiliate", referrals: 31, change: "+12%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-zinc-800 rounded-md">
                      <div className="flex items-center gap-2">
                        {index < 3 ? (
                          <div
                            className={`px-2 py-0.5 rounded text-xs font-medium ${
                              index === 0
                                ? "bg-amber-500 text-black"
                                : index === 1
                                  ? "bg-zinc-300 text-black"
                                  : "bg-amber-700 text-white"
                            }`}
                          >
                            #{index + 1}
                          </div>
                        ) : (
                          <div className="bg-zinc-700 text-zinc-300 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                        )}
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.referrals} creators</span>
                        <span className="text-green-400 text-xs">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Content */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="font-medium flex items-center gap-2">
              <Play className="h-4 w-4 text-zinc-400" />
              Top Content
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-zinc-800 rounded-md">
                <button
                  className={`px-3 py-1 text-sm rounded-md ${topContentTimeRange === "7d" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTopContentTimeRange("7d")}
                >
                  7D
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${topContentTimeRange === "30d" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTopContentTimeRange("30d")}
                >
                  30D
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${topContentTimeRange === "all" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                  onClick={() => setTopContentTimeRange("all")}
                >
                  All Time
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-center">
              {/* Top Shorts (Views) */}
              <div className="max-w-4xl w-full">
                <h3 className="text-sm font-medium text-zinc-400 mb-3 text-center">Top Shorts (Views)</h3>
                <div className="space-y-2">
                  {getTopShortsByTimeRange(topContentTimeRange).viewsData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-zinc-800 rounded-md">
                      <div className="flex items-center gap-2">
                        {index < 3 ? (
                          <div
                            className={`px-2 py-0.5 rounded text-xs font-medium ${
                              index === 0
                                ? "bg-amber-500 text-black"
                                : index === 1
                                  ? "bg-zinc-300 text-black"
                                  : "bg-amber-700 text-white"
                            }`}
                          >
                            #{index + 1}
                          </div>
                        ) : (
                          <div className="bg-zinc-700 text-zinc-300 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                        )}
                        <a
                          href={item.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          {item.title}
                          <ExternalLink className="h-3 w-3 inline-block ml-1" />
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.views}</span>
                        <span className="text-green-400 text-xs">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
