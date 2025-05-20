"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Calendar, Filter, Search, User, ArrowUp, ArrowDown, ChevronDown } from "lucide-react"

// Add imports for the chart components
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function SignupsAnalytics() {
  const [dateRange, setDateRange] = useState<"7days" | "30days" | "90days" | "all" | "custom">("30days")
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest")
  const [filterType, setFilterType] = useState<"all" | "admin" | "premium" | "normal">("all")
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [filteredSignups, setFilteredSignups] = useState<any[]>([])
  const [searchText, setSearchText] = useState("")
  const [customDateActive, setCustomDateActive] = useState(false)

  // Add this after the dateRange state declaration
  const [signupData, setSignupData] = useState<any[]>([])

  // Sample data for signups
  const signups = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      inviteCode: "CREATOR2024",
      creatorSplit: 70,
      affiliateSplit: 11.0,
      platformSplit: 19.0,
      generatedBy: "Admin",
      dateJoined: "Apr 5, 2024",
      type: "creator",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      inviteCode: "PREMIUM50",
      creatorSplit: 50,
      affiliateSplit: 16.0,
      platformSplit: 34.0,
      generatedBy: "Premium Affiliate",
      dateJoined: "Apr 4, 2024",
      type: "creator",
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@example.com",
      inviteCode: "PARTNER80",
      creatorSplit: 80,
      affiliateSplit: 8.6,
      platformSplit: 11.4,
      generatedBy: "Normal Affiliate",
      dateJoined: "Apr 3, 2024",
      type: "creator",
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma@example.com",
      inviteCode: "LAUNCH2024",
      creatorSplit: 75,
      affiliateSplit: 0,
      platformSplit: 25,
      generatedBy: "Admin",
      dateJoined: "Apr 2, 2024",
      type: "artist",
    },
    {
      id: 5,
      name: "Alex Rodriguez",
      email: "alex@example.com",
      inviteCode: "CREATOR2024",
      creatorSplit: 70,
      affiliateSplit: 11.0,
      platformSplit: 19.0,
      generatedBy: "Admin",
      dateJoined: "Apr 1, 2024",
      type: "creator",
    },
    {
      id: 6,
      name: "Lisa Taylor",
      email: "lisa@example.com",
      inviteCode: "PREMIUM50",
      creatorSplit: 50,
      affiliateSplit: 16.0,
      platformSplit: 34.0,
      generatedBy: "Premium Affiliate",
      dateJoined: "Mar 30, 2024",
      type: "artist",
    },
    {
      id: 7,
      name: "David Brown",
      email: "david@example.com",
      inviteCode: "PARTNER80",
      creatorSplit: 80,
      affiliateSplit: 8.6,
      platformSplit: 11.4,
      generatedBy: "Normal Affiliate",
      dateJoined: "Mar 29, 2024",
      type: "creator",
    },
    {
      id: 8,
      name: "Sophia Lee",
      email: "sophia@example.com",
      inviteCode: "LAUNCH2024",
      creatorSplit: 75,
      affiliateSplit: 0,
      platformSplit: 25,
      generatedBy: "Admin",
      dateJoined: "Mar 28, 2024",
      type: "creator",
    },
  ]

  // Sample data for invite code analytics
  const inviteCodeAnalytics = [
    { code: "CREATOR2024", totalSignups: 24, creatorSignups: 20, artistSignups: 4 },
    { code: "PREMIUM50", totalSignups: 12, creatorSignups: 8, artistSignups: 4 },
    { code: "PARTNER80", totalSignups: 8, creatorSignups: 6, artistSignups: 2 },
    { code: "LAUNCH2024", totalSignups: 45, creatorSignups: 35, artistSignups: 10 },
  ]

  const handleDateRangeChange = (range: "7days" | "30days" | "90days" | "all" | "custom") => {
    setDateRange(range)
    if (range !== "custom") {
      setShowDatePicker(false)
      setCustomDateActive(false)
    } else {
      setShowDatePicker(true)
    }
  }

  const handleCustomDateSubmit = () => {
    if (startDate && endDate) {
      // Activate custom date range and hide the picker
      setCustomDateActive(true)
      setShowDatePicker(false)

      // Generate data for the custom date range
      generateCustomDateData(startDate, endDate)
    }
  }

  // Function to generate data for custom date range
  const generateCustomDateData = (start: string, end: string) => {
    const startDateObj = new Date(start)
    const endDateObj = new Date(end)

    // Calculate the number of days between start and end dates
    const diffTime = Math.abs(endDateObj.getTime() - startDateObj.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // +1 to include the end date

    const data = []

    for (let i = 0; i < diffDays; i++) {
      const date = new Date(startDateObj)
      date.setDate(date.getDate() + i)
      const formattedDate = `${date.toLocaleString("default", { month: "short" })} ${date.getDate()}`

      // Generate random but realistic data
      const creatorSignups = Math.floor(Math.random() * 5) + 1
      const artistSignups = Math.floor(Math.random() * 3)

      data.push({
        date: formattedDate,
        creators: creatorSignups,
        artists: artistSignups,
        total: creatorSignups + artistSignups,
      })
    }

    setSignupData(data)
  }

  useEffect(() => {
    // Filter signups based on sort order and filter type
    let filtered = [...signups].filter((signup) => {
      if (filterType === "all") return true
      if (filterType === "admin") return signup.generatedBy === "Admin"
      if (filterType === "premium") return signup.generatedBy === "Premium Affiliate"
      if (filterType === "normal") return signup.generatedBy === "Normal Affiliate"
      return true
    })

    // Apply search filter if there's search text
    if (searchText) {
      filtered = filtered.filter(
        (signup) =>
          signup.name.toLowerCase().includes(searchText.toLowerCase()) ||
          signup.email.toLowerCase().includes(searchText.toLowerCase()) ||
          signup.inviteCode.toLowerCase().includes(searchText.toLowerCase()) ||
          signup.generatedBy.toLowerCase().includes(searchText.toLowerCase()),
      )
    }

    // Apply sort
    filtered.sort((a, b) => {
      const dateA = new Date(a.dateJoined)
      const dateB = new Date(b.dateJoined)
      return sortOrder === "latest" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
    })

    setFilteredSignups(filtered)
  }, [filterType, sortOrder, searchText]) // Only re-run when these dependencies change

  // Add this useEffect after the existing useEffect
  useEffect(() => {
    // Skip if custom date range is active
    if (customDateActive) return

    // Generate signup analytics data based on the selected date range
    const generateSignupData = () => {
      let days = 30
      if (dateRange === "7days") days = 7
      if (dateRange === "90days") days = 90
      if (dateRange === "all") days = 120

      const data = []
      const now = new Date()

      for (let i = days - 1; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(date.getDate() - i)
        const formattedDate = `${date.toLocaleString("default", { month: "short" })} ${date.getDate()}`

        // Generate random but realistic data
        const creatorSignups = Math.floor(Math.random() * 5) + 1
        const artistSignups = Math.floor(Math.random() * 3)

        data.push({
          date: formattedDate,
          creators: creatorSignups,
          artists: artistSignups,
          total: creatorSignups + artistSignups,
        })
      }

      setSignupData(data)
    }

    generateSignupData()
  }, [dateRange, customDateActive])

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Signups & Analytics</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Calendar className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <select
                value={dateRange}
                onChange={(e) => handleDateRangeChange(e.target.value as any)}
                className="pl-9 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="all">All time</option>
                <option value="custom">Custom range</option>
              </select>
            </div>
          </div>
        </div>

        {/* Custom Date Picker */}
        {showDatePicker && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-zinc-400 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-zinc-400 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <button
                onClick={handleCustomDateSubmit}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                disabled={!startDate || !endDate}
              >
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Total Signups</p>
                <p className="text-2xl font-bold mt-1">{signupData.reduce((sum, item) => sum + item.total, 0)}</p>
              </div>
              <div className="bg-blue-500 p-2 rounded-md">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 h-10 bg-zinc-800 rounded-md overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{
                  width: `${Math.min(100, signupData.reduce((sum, item) => sum + item.total, 0) / (dateRange === "7days" ? 0.35 : dateRange === "30days" ? 1.2 : 3))}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Creator Signups</p>
                <p className="text-2xl font-bold mt-1">{signupData.reduce((sum, item) => sum + item.creators, 0)}</p>
              </div>
              <div className="bg-green-500 p-2 rounded-md">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 h-10 bg-zinc-800 rounded-md overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{
                  width: `${Math.min(100, signupData.reduce((sum, item) => sum + item.creators, 0) / (dateRange === "7days" ? 0.25 : dateRange === "30days" ? 0.9 : 2.5))}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Artist Signups</p>
                <p className="text-2xl font-bold mt-1">{signupData.reduce((sum, item) => sum + item.artists, 0)}</p>
              </div>
              <div className="bg-purple-500 p-2 rounded-md">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 h-10 bg-zinc-800 rounded-md overflow-hidden">
              <div
                className="h-full bg-purple-500"
                style={{
                  width: `${Math.min(100, signupData.reduce((sum, item) => sum + item.artists, 0) / (dateRange === "7days" ? 0.1 : dateRange === "30days" ? 0.3 : 0.8))}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Add this after the Analytics Cards section and before the Top Affiliates section */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="font-medium">
              {customDateActive
                ? `Signup Trends (${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()})`
                : `Signup Trends (${dateRange})`}
            </h2>
          </div>
          <div className="p-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={signupData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={{ stroke: "#3f3f46" }}
                  />
                  <YAxis tick={{ fill: "#a1a1aa" }} axisLine={{ stroke: "#3f3f46" }} tickLine={{ stroke: "#3f3f46" }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#3f3f46", borderRadius: "0.375rem" }}
                    labelStyle={{ color: "#ffffff" }}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Line
                    type="monotone"
                    dataKey="creators"
                    name="Creator Signups"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="artists"
                    name="Artist Signups"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="total"
                    name="Total Signups"
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

        {/* Top Affiliates */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="font-medium">Top Affiliates</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">Affiliate</th>
                  <th className="px-6 py-3">Total Signups</th>
                  <th className="px-6 py-3">Codes Generated</th>
                  <th className="px-6 py-3">Conversion Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { email: "john@example.com", totalSignups: 24, codesGenerated: 30, conversionRate: 80 },
                  { email: "sarah@example.com", totalSignups: 12, codesGenerated: 15, conversionRate: 80 },
                  { email: "mike@example.com", totalSignups: 8, codesGenerated: 12, conversionRate: 67 },
                  { email: "emma@example.com", totalSignups: 5, codesGenerated: 10, conversionRate: 50 },
                ].map((affiliate, index) => (
                  <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">{affiliate.email}</td>
                    <td className="px-6 py-4">{affiliate.totalSignups}</td>
                    <td className="px-6 py-4">{affiliate.codesGenerated}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: `${affiliate.conversionRate}%` }}></div>
                        </div>
                        <span>{affiliate.conversionRate}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Signups */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="font-medium">Recent Signups</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-9 pr-4 py-1.5 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-md text-sm"
                  onClick={() => setShowSortMenu(!showSortMenu)}
                >
                  <ArrowDown className="h-4 w-4" />
                  Sort Order
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showSortMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-10">
                    <div className="p-2">
                      <button
                        className={`flex items-center w-full px-2 py-1 text-sm rounded-md ${sortOrder === "latest" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:bg-zinc-700"}`}
                        onClick={() => {
                          setSortOrder("latest")
                          setShowSortMenu(false)
                        }}
                      >
                        <ArrowDown className="h-3 w-3 mr-2" /> Latest
                      </button>
                      <button
                        className={`flex items-center w-full px-2 py-1 text-sm rounded-md ${sortOrder === "oldest" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:bg-zinc-700"}`}
                        onClick={() => {
                          setSortOrder("oldest")
                          setShowSortMenu(false)
                        }}
                      >
                        <ArrowUp className="h-3 w-3 mr-2" /> Oldest
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-md text-sm"
                  onClick={() => setShowFilterMenu(!showFilterMenu)}
                >
                  <Filter className="h-4 w-4" />
                  Filter By
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showFilterMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-10">
                    <div className="p-2">
                      <button
                        className={`w-full px-2 py-1 text-sm text-left rounded-md ${filterType === "all" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:bg-zinc-700"}`}
                        onClick={() => {
                          setFilterType("all")
                          setShowFilterMenu(false)
                        }}
                      >
                        All
                      </button>
                      <button
                        className={`w-full px-2 py-1 text-sm text-left rounded-md ${filterType === "admin" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:bg-zinc-700"}`}
                        onClick={() => {
                          setFilterType("admin")
                          setShowFilterMenu(false)
                        }}
                      >
                        Admin
                      </button>
                      <button
                        className={`w-full px-2 py-1 text-sm text-left rounded-md ${filterType === "premium" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:bg-zinc-700"}`}
                        onClick={() => {
                          setFilterType("premium")
                          setShowFilterMenu(false)
                        }}
                      >
                        Premium Affiliate
                      </button>
                      <button
                        className={`w-full px-2 py-1 text-sm text-left rounded-md ${filterType === "normal" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:bg-zinc-700"}`}
                        onClick={() => {
                          setFilterType("normal")
                          setShowFilterMenu(false)
                        }}
                      >
                        Normal Affiliate
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Invite Code</th>
                  <th className="px-6 py-3">Split Ratio</th>
                  <th className="px-6 py-3">Generated By</th>
                  <th className="px-6 py-3">Date Joined</th>
                </tr>
              </thead>
              <tbody>
                {filteredSignups.map((signup) => (
                  <tr key={signup.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">{signup.name}</div>
                        <div className="text-sm text-zinc-400">{signup.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          signup.type === "creator"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {signup.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono">{signup.inviteCode}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2 items-center">
                        <div className="w-24 h-2 bg-zinc-700 rounded-full overflow-hidden flex">
                          <div className="h-full bg-red-500" style={{ width: `${signup.creatorSplit}%` }}></div>
                          {signup.affiliateSplit > 0 && (
                            <div className="h-full bg-amber-500" style={{ width: `${signup.affiliateSplit}%` }}></div>
                          )}
                          <div className="h-full bg-blue-500" style={{ width: `${signup.platformSplit}%` }}></div>
                        </div>
                        <div className="text-xs text-center">
                          {signup.affiliateSplit > 0
                            ? `${signup.creatorSplit}/${signup.affiliateSplit.toFixed(1)}/${signup.platformSplit.toFixed(1)}`
                            : `${signup.creatorSplit}/${signup.platformSplit}`}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{signup.generatedBy}</td>
                    <td className="px-6 py-4">{signup.dateJoined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
