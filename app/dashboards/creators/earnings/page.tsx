"use client"

import { useState, useEffect } from "react"
import { BarChart, Calendar, Download, Search, Wallet, X, Clock, Info } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Line, LineChart } from "recharts"

export default function CreatorsEarnings() {
  const [period, setPeriod] = useState<string>("month")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedEarning, setSelectedEarning] = useState<any>(null)
  const [chartData, setChartData] = useState<any[]>([])
  const [showWithdrawModal, setShowWithdrawModal] = useState<boolean>(false)
  const [withdrawMethod, setWithdrawMethod] = useState<string | null>(null)
  const [showEarlyPayoutModal, setShowEarlyPayoutModal] = useState<boolean>(false)
  const [showSubscriptionActivation, setShowSubscriptionActivation] = useState<boolean>(false)
  const [hasEarlyPayout, setHasEarlyPayout] = useState<boolean>(false)
  const [withdrawalsAvailable, setWithdrawalsAvailable] = useState<boolean>(false)
  const [showAutoWithdrawalModal, setShowAutoWithdrawalModal] = useState<boolean>(false)
  const [autoWithdrawalMethod, setAutoWithdrawalMethod] = useState<string | null>(null)
  const [autoWithdrawalEnabled, setAutoWithdrawalEnabled] = useState<boolean>(false)

  // Sample earnings data with more historical data
  const earningsHistory = [
    // 2024 data
    {
      id: 1,
      date: "May 2024",
      amount: 1245.32,
      status: "Paid",
      videos: 24,
      views: "1.2M",
      quarter: "Q2 2024",
      year: "2024",
      breakdown: [
        { category: "Sponsored Content", amount: 850.0 },
        { category: "Music Promotion", amount: 395.32 },
      ],
      paymentMethod: "Direct Deposit",
    },
    {
      id: 2,
      date: "April 2024",
      amount: 1052.18,
      status: "Paid",
      videos: 22,
      views: "980K",
      quarter: "Q2 2024",
      year: "2024",
      breakdown: [
        { category: "Sponsored Content", amount: 720.0 },
        { category: "Music Promotion", amount: 332.18 },
      ],
      paymentMethod: "PayPal",
    },
    {
      id: 3,
      date: "March 2024",
      amount: 978.45,
      status: "Paid",
      videos: 20,
      views: "890K",
      quarter: "Q1 2024",
      year: "2024",
      breakdown: [
        { category: "Sponsored Content", amount: 650.0 },
        { category: "Music Promotion", amount: 328.45 },
      ],
      paymentMethod: "Direct Deposit",
    },
    {
      id: 4,
      date: "February 2024",
      amount: 864.29,
      status: "Paid",
      videos: 18,
      views: "780K",
      quarter: "Q1 2024",
      year: "2024",
      breakdown: [
        { category: "Sponsored Content", amount: 580.0 },
        { category: "Music Promotion", amount: 284.29 },
      ],
      paymentMethod: "Venmo",
    },
    {
      id: 5,
      date: "January 2024",
      amount: 752.87,
      status: "Paid",
      videos: 15,
      views: "650K",
      quarter: "Q1 2024",
      year: "2024",
      breakdown: [
        { category: "Sponsored Content", amount: 500.0 },
        { category: "Music Promotion", amount: 252.87 },
      ],
      paymentMethod: "Direct Deposit",
    },
    // 2023 data
    {
      id: 6,
      date: "December 2023",
      amount: 720.45,
      status: "Paid",
      videos: 14,
      views: "620K",
      quarter: "Q4 2023",
      year: "2023",
      breakdown: [
        { category: "Sponsored Content", amount: 480.0 },
        { category: "Music Promotion", amount: 240.45 },
      ],
      paymentMethod: "PayPal",
    },
    {
      id: 7,
      date: "November 2023",
      amount: 685.12,
      status: "Paid",
      videos: 13,
      views: "590K",
      quarter: "Q4 2023",
      year: "2023",
      breakdown: [
        { category: "Sponsored Content", amount: 450.0 },
        { category: "Music Promotion", amount: 235.12 },
      ],
      paymentMethod: "Direct Deposit",
    },
    {
      id: 8,
      date: "October 2023",
      amount: 650.78,
      status: "Paid",
      videos: 12,
      views: "560K",
      quarter: "Q4 2023",
      year: "2023",
      breakdown: [
        { category: "Sponsored Content", amount: 430.0 },
        { category: "Music Promotion", amount: 220.78 },
      ],
      paymentMethod: "PayPal",
    },
  ]

  // Update chart data when period changes
  useEffect(() => {
    updateChartData()
  }, [period])

  // Get data based on selected period
  const updateChartData = () => {
    // Monthly data showing earnings for each month
    const data = [
      { date: "January", revenue: 752.87 },
      { date: "February", revenue: 864.29 },
      { date: "March", revenue: 978.45 },
      { date: "April", revenue: 1052.18 },
      { date: "May", revenue: 1245.32 },
    ]

    setChartData(data)
  }

  // Simulate admin approval for withdrawals (for demo purposes)
  useEffect(() => {
    // In a real app, this would be fetched from the backend
    const checkWithdrawalAvailability = () => {
      // Simulate a 50% chance that withdrawals are available
      setWithdrawalsAvailable(Math.random() > 0.5)
    }

    checkWithdrawalAvailability()

    // Check every 30 seconds (for demo purposes)
    const interval = setInterval(checkWithdrawalAvailability, 30000)

    return () => clearInterval(interval)
  }, [])

  // Filter earnings based on search query and period
  const filteredEarnings = earningsHistory.filter((entry) => {
    const matchesSearch = searchQuery === "" || entry.date.toLowerCase().includes(searchQuery.toLowerCase())

    if (period === "month") {
      return matchesSearch
    } else if (period === "quarter") {
      return matchesSearch && entry.quarter.includes("2024") // Only 2024 quarters
    } else {
      return matchesSearch && entry.year === "2024" // Only 2024
    }
  })

  // Calculate total earnings
  const totalEarnings = earningsHistory.reduce((sum, entry) => sum + entry.amount, 0)

  // Download earnings report
  const downloadReport = () => {
    alert("Downloading earnings report...")
  }

  // View details for a specific earning period
  const viewEarningDetails = (entry) => {
    setSelectedEarning(entry)
  }

  // Handle opening the early payout modal
  const handleOpenEarlyPayoutModal = () => {
    setShowWithdrawModal(false) // Close withdraw modal
    setShowEarlyPayoutModal(true) // Open early payout modal
  }

  // Handle activating subscription
  const handleActivateSubscription = () => {
    setShowEarlyPayoutModal(false) // Close early payout modal
    setShowSubscriptionActivation(true) // Show subscription activation confirmation
  }

  // Handle confirming subscription
  const handleConfirmSubscription = () => {
    setShowSubscriptionActivation(false) // Close subscription activation
    setHasEarlyPayout(true) // Set early payout status
  }

  return (
    <DashboardLayout portalType="creators">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Earnings</h1>
          <button
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
            onClick={downloadReport}
          >
            <Download className="h-4 w-4" />
            Download Report
          </button>
        </div>

        {/* Earnings Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Earnings Summary</h2>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-zinc-400">Total Earnings (2024)</p>
                <p className="text-3xl font-bold">${totalEarnings.toFixed(2)}</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-green-500" />
              </div>
            </div>

            {/* Early Payout Status */}
            {hasEarlyPayout && (
              <div className="mb-4 bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-3">
                <Clock className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium">You're receiving Early Payouts</p>
                  <p className="text-xs text-zinc-400">Your earnings are processed 1 month earlier with a 7% fee</p>
                </div>
              </div>
            )}

            {/* Add withdraw button */}
            <button
              onClick={() =>
                withdrawalsAvailable
                  ? setShowWithdrawModal(true)
                  : alert("Withdrawals are not available at this time. Please check back later.")
              }
              className={`w-full ${withdrawalsAvailable ? "bg-red-500 hover:bg-red-600" : "bg-zinc-700 cursor-not-allowed"} text-white py-2.5 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 mb-3`}
            >
              <Wallet className="h-4 w-4" />
              {withdrawalsAvailable ? "Withdraw Funds" : "Withdrawals Unavailable"}
            </button>
            {!withdrawalsAvailable && (
              <p className="text-xs text-zinc-400 text-center mb-3">
                Withdrawals are currently being processed by our team and will be available soon.
              </p>
            )}

            {/* Auto Withdrawal Button */}
            {hasEarlyPayout && (
              <div className="mb-6">
                <button
                  onClick={() => setShowAutoWithdrawalModal(true)}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2.5 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {autoWithdrawalEnabled ? "Auto Withdrawal Enabled" : "Configure Auto Withdrawal"}
                </button>
                <p className="text-xs text-zinc-400 text-center">
                  {autoWithdrawalEnabled
                    ? "Your early payouts will be automatically transferred to your selected payment method"
                    : "Set up automatic transfers to your preferred payment method when early payouts arrive"}
                </p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-zinc-400">Sponsored Content</span>
                  <span className="font-medium">$3,300.00</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-zinc-400">Music Promotion</span>
                  <span className="font-medium">$1,593.11</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
              <h2 className="font-medium flex items-center gap-2">
                <BarChart className="h-4 w-4 text-zinc-400" />
                Monthly Earnings (2024)
              </h2>
            </div>
            <div className="p-6">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
                        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`
                        return `${value}`
                      }}
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#18181b", borderColor: "#3f3f46", borderRadius: "0.375rem" }}
                      labelStyle={{ color: "#ffffff" }}
                      formatter={(value: any) => [`${value}`, "Revenue"]}
                    />
                    <Legend verticalAlign="top" height={36} formatter={() => "Revenue"} />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ r: 6, strokeWidth: 2, fill: "#22c55e", stroke: "#0f172a" }}
                      activeDot={{ r: 8, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings History */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-lg font-bold">Earnings History</h2>

            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search by date..."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium ${period === "month" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
                  onClick={() => setPeriod("month")}
                >
                  Monthly
                </button>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium ${period === "quarter" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
                  onClick={() => setPeriod("quarter")}
                >
                  Quarterly
                </button>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium ${period === "year" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
                  onClick={() => setPeriod("year")}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">Period</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Videos</th>
                  <th className="px-6 py-3">Views</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Payment Method</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEarnings.map((entry) => (
                  <tr key={entry.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-zinc-500" />
                        {entry.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">${entry.amount.toFixed(2)}</td>
                    <td className="px-6 py-4">{entry.videos}</td>
                    <td className="px-6 py-4">{entry.views}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-zinc-300">{entry.paymentMethod}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="text-red-500 hover:text-red-400 font-medium"
                        onClick={() => viewEarningDetails(entry)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredEarnings.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-zinc-500">
                      No earnings found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Earnings Detail Modal */}
      {selectedEarning && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <h2 className="text-lg font-medium">Earnings Details: {selectedEarning.date}</h2>
              <button className="text-zinc-400 hover:text-white" onClick={() => setSelectedEarning(null)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 overflow-y-auto">
              {/* Payment Method Box - Compact */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg">
                <div className="p-3 border-b border-zinc-700 flex justify-between items-center">
                  <h3 className="text-md font-medium">Payment Details</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-400">{selectedEarning.paymentMethod}</span>
                    <div className="bg-red-500/20 p-1.5 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {selectedEarning.paymentMethod === "PayPal" && (
                    <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                      <p className="text-sm text-zinc-400">PayPal Email</p>
                      <p className="text-sm font-medium">creator@shortsrev.com</p>
                    </div>
                  )}

                  <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                    <p className="text-sm text-zinc-400">Gross Amount</p>
                    <p className="text-sm font-medium">${(selectedEarning.amount * 1.05).toFixed(2)}</p>
                  </div>

                  <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                    <p className="text-sm text-zinc-400">Processing Fee</p>
                    <p className="text-sm font-medium text-red-400">-${(selectedEarning.amount * 0.03).toFixed(2)}</p>
                  </div>

                  <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                    <p className="text-sm text-zinc-400">Tax Withheld</p>
                    <p className="text-sm font-medium text-red-400">-${(selectedEarning.amount * 0.02).toFixed(2)}</p>
                  </div>

                  <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                    <p className="text-sm text-zinc-400">Net Amount</p>
                    <p className="text-sm font-medium text-green-500">${selectedEarning.amount.toFixed(2)}</p>
                  </div>

                  <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                    <p className="text-sm text-zinc-400">Transaction ID</p>
                    <p className="text-sm font-mono">{`SR-${selectedEarning.id.toString().padStart(6, "0")}-${Math.floor(
                      Math.random() * 1000000,
                    )
                      .toString()
                      .padStart(6, "0")}`}</p>
                  </div>

                  <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                    <p className="text-sm text-zinc-400">Payment Date</p>
                    <p className="text-sm font-medium">{selectedEarning.date.replace("2024", "2024")} • 10:45 AM UTC</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <p className="text-sm text-zinc-400">Total Earnings</p>
                  <p className="text-2xl font-bold">${selectedEarning.amount.toFixed(2)}</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <p className="text-sm text-zinc-400">Status</p>
                  <p className="text-xl font-medium">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                      {selectedEarning.status}
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-md font-medium">Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">Videos</p>
                    <p className="text-xl font-medium">{selectedEarning.videos}</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">Views</p>
                    <p className="text-xl font-medium">{selectedEarning.views}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-md font-medium">Earnings Breakdown</h3>
                <div className="space-y-3">
                  {selectedEarning.breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-zinc-800 rounded-lg">
                      <span>{item.category}</span>
                      <span className="font-medium">${item.amount.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  onClick={() => setSelectedEarning(null)}
                >
                  Close
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  onClick={() => alert(`Downloading detailed report for ${selectedEarning.date}`)}
                >
                  <Download className="h-4 w-4" />
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <h2 className="text-lg font-medium">Withdraw Funds</h2>
              <button
                className="text-zinc-400 hover:text-white"
                onClick={() => {
                  setShowWithdrawModal(false)
                  setWithdrawMethod(null)
                }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!withdrawMethod ? (
              <div className="p-6">
                <p className="text-zinc-400 mb-4">Choose a withdrawal method:</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => setWithdrawMethod("bank")}
                    className="flex flex-col items-center justify-center bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg transition-colors"
                  >
                    <div className="bg-blue-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9-4 9 4v2H3V6z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M3 14h18M3 18h18"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Bank Transfer</span>
                    <span className="text-xs text-zinc-500 mt-1">USD, EUR</span>
                  </button>

                  <button
                    onClick={() => setWithdrawMethod("card")}
                    className="flex flex-col items-center justify-center bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg transition-colors"
                  >
                    <div className="bg-green-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Card Transfer</span>
                    <span className="text-xs text-zinc-500 mt-1">USD, EUR</span>
                  </button>

                  <button
                    onClick={() => setWithdrawMethod("ewallet")}
                    className="flex flex-col items-center justify-center bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg transition-colors"
                  >
                    <div className="bg-purple-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">E-Wallets</span>
                    <span className="text-xs text-zinc-500 mt-1">USD</span>
                  </button>

                  <button
                    onClick={() => setWithdrawMethod("crypto")}
                    className="flex flex-col items-center justify-center bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg transition-colors"
                  >
                    <div className="bg-red-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Cryptocurrency</span>
                    <span className="text-xs text-zinc-500 mt-1">BTC, ETH, USDT</span>
                  </button>
                </div>

                <div className="bg-zinc-800/50 p-4 rounded-lg mb-4 border border-zinc-700">
                  <h3 className="text-sm font-medium mb-2">Early Payout</h3>
                  <p className="text-xs text-zinc-400 mb-3">
                    Receive your payments up to 1 month earlier with a 7% service fee. Ideal for creators who need
                    immediate access to their earnings.
                  </p>
                  <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
                    onClick={handleOpenEarlyPayoutModal}
                  >
                    Learn More
                  </button>
                </div>

                <p className="text-xs text-zinc-500 text-center">
                  Withdrawal processing times vary by method. Minimum withdrawal amount: $50.
                </p>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => setWithdrawMethod(null)}
                    className="bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span>
                    {withdrawMethod === "bank" && "Bank Transfer"}
                    {withdrawMethod === "card" && "Card Transfer"}
                    {withdrawMethod === "ewallet" && "E-Wallet Transfer"}
                    {withdrawMethod === "crypto" && "Cryptocurrency Transfer"}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Amount (USD)</label>
                    <input
                      type="text"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="Enter amount"
                    />
                    <p className="text-xs text-zinc-500 mt-1">Available: $4,893.11</p>
                  </div>

                  {withdrawMethod === "bank" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Bank Account</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Select bank account</option>
                          <option>Add new account</option>
                        </select>
                      </div>
                    </>
                  )}

                  {withdrawMethod === "card" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Card</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Select card</option>
                          <option>Add new card</option>
                        </select>
                      </div>
                    </>
                  )}

                  {withdrawMethod === "ewallet" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">E-Wallet</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Select e-wallet</option>
                          <option>PayPal</option>
                          <option>Venmo</option>
                          <option>Add new wallet</option>
                        </select>
                      </div>
                    </>
                  )}

                  {withdrawMethod === "crypto" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Cryptocurrency</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Select cryptocurrency</option>
                          <option>Bitcoin (BTC)</option>
                          <option>Ethereum (ETH)</option>
                          <option>USDT</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Wallet Address</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter wallet address"
                        />
                      </div>
                    </>
                  )}
                </div>

                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-md text-sm font-medium"
                  onClick={() => {
                    alert(`Withdrawal request submitted! Your funds will be processed shortly.`)
                    setShowWithdrawModal(false)
                    setWithdrawMethod(null)
                  }}
                >
                  Withdraw Funds
                </button>

                <p className="text-xs text-zinc-500 text-center mt-4">
                  By proceeding, you agree to our withdrawal terms and conditions.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Early Payout Modal */}
      {showEarlyPayoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/20 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-medium">Early payout</h2>
              </div>
              <button className="text-zinc-400 hover:text-white" onClick={() => setShowEarlyPayoutModal(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex gap-4">
                <div className="bg-violet-500/20 p-2 rounded-full h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-violet-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">~a month earlier</h3>
                  <p className="text-sm text-zinc-400">
                    The payout will be credited to your Shorts Rev balance as soon as it becomes available
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Monthly subscription</h3>
                  <p className="text-sm text-zinc-400">
                    Enable a subscription and automatically receive money ahead of schedule
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-500/20 p-2 rounded-full h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Automatic crediting</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">Auto Withdrawal</span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1">
                    Receive your payout immediately to your chosen wallet, account, or card with Auto Withdrawal.
                    Available with an active subscription
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-amber-500/20 p-2 rounded-full h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Flexible settings</h3>
                  <p className="text-sm text-zinc-400">
                    You can disable Auto Withdrawal, select other details, or cancel your subscription at any time
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-md text-sm font-medium mt-4"
                onClick={handleActivateSubscription}
              >
                Activate subscription
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Activation Confirmation */}
      {showSubscriptionActivation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-md w-full">
            <div className="p-8 flex flex-col items-center">
              <div className="bg-red-500/20 p-4 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11l2 2 4-4" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-center">Subscription activation</h2>

              <p className="text-center text-zinc-300 mb-8">
                The payout will be automatically sent to your Shorts Rev balance ~1 month earlier with a 7% fee. You can
                cancel your subscription at any time
              </p>

              <div className="bg-zinc-800/70 p-4 rounded-lg mb-8 w-full flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-zinc-300">
                  After activating the subscription, you can set up Auto Withdrawal by specifying the necessary details
                  to which you want to receive payouts
                </p>
              </div>

              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md text-base font-medium"
                onClick={handleConfirmSubscription}
              >
                Activate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auto Withdrawal Modal */}
      {showAutoWithdrawalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <h2 className="text-lg font-medium">Auto Withdrawal Settings</h2>
              <button
                className="text-zinc-400 hover:text-white"
                onClick={() => {
                  setShowAutoWithdrawalModal(false)
                  setAutoWithdrawalMethod(null)
                }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!autoWithdrawalMethod ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-md font-medium">Auto Withdrawal</h3>
                  <div className="relative inline-block w-12 h-6">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="sr-only"
                      checked={autoWithdrawalEnabled}
                      onChange={() => {
                        if (!autoWithdrawalEnabled) {
                          // If enabling, show payment method selection
                          // If already has a method, just enable
                          setAutoWithdrawalEnabled(true)
                        } else {
                          // If disabling, just disable
                          setAutoWithdrawalEnabled(false)
                        }
                      }}
                    />
                    <label
                      htmlFor="toggle"
                      className={`absolute inset-0 rounded-full transition duration-300 ease-in-out ${
                        autoWithdrawalEnabled ? "bg-red-500" : "bg-zinc-700"
                      }`}
                    >
                      <span
                        className={`absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full transition duration-300 ease-in-out transform ${
                          autoWithdrawalEnabled ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-6">
                  When enabled, your early payouts will be automatically transferred to your selected payment method as
                  soon as they become available.
                </p>

                <h3 className="text-md font-medium mb-4">Select Payment Method</h3>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => setAutoWithdrawalMethod("bank")}
                    className={`flex flex-col items-center justify-center ${
                      autoWithdrawalEnabled && autoWithdrawalMethod === "bank"
                        ? "bg-red-500/20 border-red-500"
                        : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                    } p-4 rounded-lg transition-colors border`}
                  >
                    <div className="bg-blue-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9-4 9 4v2H3V6z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M3 14h18M3 18h18"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Bank Transfer</span>
                    <span className="text-xs text-zinc-500 mt-1">USD, EUR</span>
                  </button>

                  <button
                    onClick={() => setAutoWithdrawalMethod("card")}
                    className={`flex flex-col items-center justify-center ${
                      autoWithdrawalEnabled && autoWithdrawalMethod === "card"
                        ? "bg-red-500/20 border-red-500"
                        : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                    } p-4 rounded-lg transition-colors border`}
                  >
                    <div className="bg-green-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Card Transfer</span>
                    <span className="text-xs text-zinc-500 mt-1">USD, EUR</span>
                  </button>

                  <button
                    onClick={() => setAutoWithdrawalMethod("ewallet")}
                    className={`flex flex-col items-center justify-center ${
                      autoWithdrawalEnabled && autoWithdrawalMethod === "ewallet"
                        ? "bg-red-500/20 border-red-500"
                        : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                    } p-4 rounded-lg transition-colors border`}
                  >
                    <div className="bg-purple-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">E-Wallets</span>
                    <span className="text-xs text-zinc-500 mt-1">USD</span>
                  </button>

                  <button
                    onClick={() => setAutoWithdrawalMethod("crypto")}
                    className={`flex flex-col items-center justify-center ${
                      autoWithdrawalEnabled && autoWithdrawalMethod === "crypto"
                        ? "bg-red-500/20 border-red-500"
                        : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                    } p-4 rounded-lg transition-colors border`}
                  >
                    <div className="bg-red-500/20 p-3 rounded-full mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Cryptocurrency</span>
                    <span className="text-xs text-zinc-500 mt-1">BTC, ETH, USDT</span>
                  </button>
                </div>

                <div className="bg-zinc-800/50 p-4 rounded-lg mb-6 border border-zinc-700">
                  <h3 className="text-sm font-medium mb-2">Auto Withdrawal Schedule</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <input type="radio" id="immediate" name="schedule" className="text-red-500" defaultChecked />
                    <label htmlFor="immediate" className="text-sm">
                      Immediately when available
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" id="weekly" name="schedule" className="text-red-500" />
                    <label htmlFor="weekly" className="text-sm">
                      Weekly (every Monday)
                    </label>
                  </div>
                </div>

                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-md text-sm font-medium"
                  onClick={() => {
                    setAutoWithdrawalEnabled(true)
                    setShowAutoWithdrawalModal(false)
                    alert("Auto Withdrawal settings saved!")
                  }}
                >
                  Save Settings
                </button>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => setAutoWithdrawalMethod(null)}
                    className="bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span>
                    {autoWithdrawalMethod === "bank" && "Bank Transfer Details"}
                    {autoWithdrawalMethod === "card" && "Card Details"}
                    {autoWithdrawalMethod === "ewallet" && "E-Wallet Details"}
                    {autoWithdrawalMethod === "crypto" && "Cryptocurrency Details"}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  {autoWithdrawalMethod === "bank" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Bank Account</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Select bank account</option>
                          <option>Add new account</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Account Name</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter account name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Account Number</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter account number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Routing Number</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter routing number"
                        />
                      </div>
                    </>
                  )}

                  {autoWithdrawalMethod === "card" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Card Type</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Visa</option>
                          <option>Mastercard</option>
                          <option>American Express</option>
                          <option>Discover</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Card Number</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter card number"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zinc-400 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-400 mb-1">CVV</label>
                          <input
                            type="text"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter cardholder name"
                        />
                      </div>
                    </>
                  )}

                  {autoWithdrawalMethod === "ewallet" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">E-Wallet Provider</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>PayPal</option>
                          <option>Venmo</option>
                          <option>Cash App</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Email/Username</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter email or username"
                        />
                      </div>
                    </>
                  )}

                  {autoWithdrawalMethod === "crypto" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Cryptocurrency</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Bitcoin (BTC)</option>
                          <option>Ethereum (ETH)</option>
                          <option>USDT</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Wallet Address</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Enter wallet address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Network</label>
                        <select className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-red-500">
                          <option>Bitcoin</option>
                          <option>Ethereum</option>
                          <option>Tron</option>
                          <option>Binance Smart Chain</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>

                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-md text-sm font-medium"
                  onClick={() => {
                    setAutoWithdrawalEnabled(true)
                    setShowAutoWithdrawalModal(false)
                    alert("Auto Withdrawal settings saved!")
                  }}
                >
                  Save Payment Method
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
