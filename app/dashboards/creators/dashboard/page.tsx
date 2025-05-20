"use client"

import type React from "react"

import { useState, useRef } from "react"
import { BarChartIcon, Calendar, TrendingUp, Video, X, Users, Eye } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, Legend } from "recharts"
import { formatNumber, formatCurrency } from "@/utils/format-numbers"

export default function CreatorsDashboard() {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d" | "custom">("30d")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")
  const datePickerRef = useRef<HTMLDivElement>(null)

  // Sample analytics data
  const analyticsData = {
    "7d": [
      { date: "May 1", views: 42000, affiliatedViews: 15000 },
      { date: "May 2", views: 38000, affiliatedViews: 12000 },
      { date: "May 3", views: 55000, affiliatedViews: 18000 },
      { date: "May 4", views: 70000, affiliatedViews: 25000 },
      { date: "May 5", views: 62000, affiliatedViews: 22000 },
      { date: "May 6", views: 43000, affiliatedViews: 16000 },
      { date: "May 7", views: 50000, affiliatedViews: 19000 },
    ],
    "30d": [
      { date: "Apr 8", views: 30000, affiliatedViews: 10000 },
      { date: "Apr 12", views: 35000, affiliatedViews: 12000 },
      { date: "Apr 16", views: 42000, affiliatedViews: 15000 },
      { date: "Apr 20", views: 38000, affiliatedViews: 13000 },
      { date: "Apr 24", views: 55000, affiliatedViews: 18000 },
      { date: "Apr 28", views: 70000, affiliatedViews: 25000 },
      { date: "May 2", views: 62000, affiliatedViews: 22000 },
      { date: "May 6", views: 43000, affiliatedViews: 16000 },
    ],
    "90d": [
      { date: "Feb", views: 320000, affiliatedViews: 110000 },
      { date: "Mar", views: 450000, affiliatedViews: 160000 },
      { date: "Apr", views: 580000, affiliatedViews: 210000 },
      { date: "May", views: 320000, affiliatedViews: 120000 },
    ],
    custom: [
      { date: "Apr 15", views: 42000, affiliatedViews: 15000 },
      { date: "Apr 16", views: 38000, affiliatedViews: 12000 },
      { date: "Apr 17", views: 55000, affiliatedViews: 18000 },
      { date: "Apr 18", views: 70000, affiliatedViews: 25000 },
      { date: "Apr 19", views: 62000, affiliatedViews: 22000 },
    ],
  }

  const totalViews = 1200000
  const totalRevenue = 1245.32
  const totalAffiliateRevenue = 187.45
  const totalAffiliateViews = 245000

  const handleCalendarClick = () => {
    setShowDatePicker(!showDatePicker)
  }

  const handleCustomDateSubmit = () => {
    if (startDate && endDate) {
      setTimeRange("custom")
      setShowDatePicker(false)
      // In a real app, you would fetch data for this date range
    }
  }

  const handleClickOutside = (e: React.MouseEvent) => {
    if (datePickerRef.current && !datePickerRef.current.contains(e.target as Node)) {
      setShowDatePicker(false)
    }
  }

  return (
    <DashboardLayout portalType="creators">
      <div className="space-y-6" onClick={handleClickOutside}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Creator Dashboard</h1>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Total Views</h3>
              <div className="bg-red-500/20 p-2 rounded-md">
                <TrendingUp className="h-4 w-4 text-red-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{formatNumber(totalViews)}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +12.5% from last month
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Active Videos</h3>
              <div className="bg-blue-500/20 p-2 rounded-md">
                <Video className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">24</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +3 new this month
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Estimated Earnings</h3>
              <div className="bg-green-500/20 p-2 rounded-md">
                <BarChartIcon className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{formatCurrency(totalRevenue)}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +18.2% from last month
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Affiliate Channels</h3>
              <div className="bg-purple-500/20 p-2 rounded-md">
                <Users className="h-4 w-4 text-purple-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +1 new this month
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Affiliate Views</h3>
              <div className="bg-blue-500/20 p-2 rounded-md">
                <Eye className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">{formatNumber(totalAffiliateViews)}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +18.7% from last month
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Affiliate Revenue</h3>
              <div className="bg-amber-500/20 p-2 rounded-md">
                <BarChartIcon className="h-4 w-4 text-amber-500" />
              </div>
            </div>
            <p className="text-2xl font-bold text-amber-500">{formatCurrency(totalAffiliateRevenue)}</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +22.3% from last month
            </p>
          </div>
        </div>

        {/* Analytics Graph */}
        <Card className="bg-zinc-900 border border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">Views Analytics</h2>
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
                  <button
                    className={`px-3 py-1 text-sm rounded-md ${timeRange === "custom" ? "bg-red-500 text-white" : "text-zinc-400"}`}
                    onClick={() => setTimeRange("custom")}
                  >
                    Custom
                  </button>
                </div>
                <div className="relative">
                  <button
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 p-1.5 rounded-md"
                    onClick={handleCalendarClick}
                  >
                    <Calendar className="h-4 w-4" />
                  </button>

                  {showDatePicker && (
                    <div
                      ref={datePickerRef}
                      className="absolute right-0 top-10 z-10 bg-zinc-900 border border-zinc-800 rounded-lg p-4 w-72 shadow-lg"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-medium">Select Date Range</h3>
                        <button className="text-zinc-500 hover:text-zinc-300" onClick={() => setShowDatePicker(false)}>
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-zinc-500 mb-1">Start Date</label>
                          <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-1 px-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-zinc-500 mb-1">End Date</label>
                          <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-1 px-2 text-sm"
                          />
                        </div>
                        <button
                          onClick={handleCustomDateSubmit}
                          disabled={!startDate || !endDate}
                          className="w-full bg-red-500 hover:bg-red-600 text-white py-1.5 rounded-md text-sm disabled:opacity-50"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData[timeRange]} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAffiliatedViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={{ stroke: "#3f3f46" }}
                  />
                  <YAxis
                    tick={{ fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={{ stroke: "#3f3f46" }}
                    tickFormatter={(value) => {
                      if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
                      if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                      return value
                    }}
                  />
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#3f3f46", borderRadius: "0.375rem" }}
                    labelStyle={{ color: "#ffffff" }}
                    formatter={(value: any, name: string) => {
                      const formattedValue =
                        value >= 1000000
                          ? `${(value / 1000000).toFixed(1)}M`
                          : value >= 1000
                            ? `${(value / 1000).toFixed(0)}K`
                            : value

                      return [
                        `${formatNumber(formattedValue)} views`,
                        name === "views" ? "Your Channel" : "Affiliated Channels",
                      ]
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    formatter={(value) => {
                      return value === "views" ? "Your Channel Views" : "Affiliated Channels Views"
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                    name="views"
                  />
                  <Area
                    type="monotone"
                    dataKey="affiliatedViews"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorAffiliatedViews)"
                    name="affiliatedViews"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Trending Tracks */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Trending Tracks</h2>
          <div className="space-y-3">
            {[
              { title: "Summer Nights", artist: "DJ Horizon", label: "Sony Music", uses: "12.5K" },
              { title: "Midnight Dreams", artist: "Luna", label: "Universal", uses: "8.2K" },
              { title: "Electric Feel", artist: "Neon Pulse", label: "Warner", uses: "7.8K" },
              { title: "Sunset Vibes", artist: "Coastal", label: "Indie Label", uses: "6.3K" },
              { title: "Urban Flow", artist: "City Beats", label: "Sony Music", uses: "5.9K" },
            ].map((track, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-md hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-md flex items-center justify-center">
                    <Video className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{track.title}</h3>
                    <p className="text-xs text-zinc-400">
                      {track.artist} • {track.label}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-xs text-zinc-400">Uses</span>
                    <p className="font-medium">{track.uses}</p>
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    onClick={() => alert(`Using track: ${track.title}`)}
                  >
                    Use
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
