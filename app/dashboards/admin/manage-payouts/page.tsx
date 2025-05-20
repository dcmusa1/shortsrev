"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import {
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Download,
  Eye,
  CreditCard,
  Wallet,
  AlertCircle,
  X,
} from "lucide-react"

export default function ManagePayouts() {
  const [activeTab, setActiveTab] = useState<"pending" | "completed" | "early-payouts" | "auto-withdrawals">("pending")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [selectedPayout, setSelectedPayout] = useState<any>(null)

  // Sample data for pending payouts
  const pendingPayouts = [
    {
      id: "PO-78945",
      user: {
        name: "Alex Johnson",
        email: "alex@example.com",
        id: "USR-12345",
        balance: 2450.75,
        taxStatus: "W-9",
        taxRate: 0,
      },
      amount: 1245.32,
      requestDate: "2024-05-10T14:30:00Z",
      method: "Bank Transfer",
      status: "pending_review",
      details: {
        accountName: "Alex Johnson",
        accountNumber: "****6789",
        bankName: "Chase Bank",
      },
    },
    {
      id: "PO-78946",
      user: {
        name: "Sarah Williams",
        email: "sarah@example.com",
        id: "USR-12346",
        balance: 1750.5,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      amount: 876.5,
      requestDate: "2024-05-10T15:45:00Z",
      method: "PayPal",
      status: "pending_review",
      details: {
        email: "sarah@example.com",
      },
    },
    {
      id: "PO-78947",
      user: {
        name: "Michael Brown",
        email: "michael@example.com",
        id: "USR-12347",
        balance: 3250.8,
        taxStatus: "W-9",
        taxRate: 0,
      },
      amount: 1532.75,
      requestDate: "2024-05-09T11:20:00Z",
      method: "Bank Transfer",
      status: "processing",
      details: {
        accountName: "Michael Brown",
        accountNumber: "****4321",
        bankName: "Bank of America",
      },
    },
    {
      id: "PO-78948",
      user: {
        name: "Emily Davis",
        email: "emily@example.com",
        id: "USR-12348",
        balance: 1845.2,
        taxStatus: "No Form",
        taxRate: 24,
      },
      amount: 945.2,
      requestDate: "2024-05-09T09:15:00Z",
      method: "Venmo",
      status: "pending_review",
      details: {
        username: "@emilydavis",
      },
    },
    {
      id: "PO-78949",
      user: {
        name: "David Wilson",
        email: "david@example.com",
        id: "USR-12349",
        balance: 4250.0,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      amount: 2150.0,
      requestDate: "2024-05-08T16:30:00Z",
      method: "Cryptocurrency",
      status: "processing",
      details: {
        currency: "Bitcoin",
        address: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
        network: "Bitcoin",
      },
    },
  ]

  // Sample data for completed payouts
  const completedPayouts = [
    {
      id: "PO-78940",
      user: {
        name: "Jessica Miller",
        email: "jessica@example.com",
        id: "USR-12340",
        balance: 3250.45,
        taxStatus: "W-9",
        taxRate: 0,
      },
      amount: 1875.45,
      requestDate: "2024-05-05T10:30:00Z",
      processedDate: "2024-05-06T14:20:00Z",
      method: "Bank Transfer",
      status: "completed",
      transactionId: "TRX-987654",
      details: {
        accountName: "Jessica Miller",
        accountNumber: "****5678",
        bankName: "Wells Fargo",
      },
      taxWithheld: 0,
    },
    {
      id: "PO-78941",
      user: {
        name: "Robert Taylor",
        email: "robert@example.com",
        id: "USR-12341",
        balance: 1850.25,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      amount: 950.25,
      requestDate: "2024-05-04T09:45:00Z",
      processedDate: "2024-05-05T11:30:00Z",
      method: "PayPal",
      status: "completed",
      transactionId: "TRX-987655",
      details: {
        email: "robert@example.com",
      },
      taxWithheld: 285.08, // 30% of amount
    },
    {
      id: "PO-78942",
      user: {
        name: "Amanda Clark",
        email: "amanda@example.com",
        id: "USR-12342",
        balance: 4250.0,
        taxStatus: "W-9",
        taxRate: 0,
      },
      amount: 2250.0,
      requestDate: "2024-05-03T14:20:00Z",
      processedDate: "2024-05-04T16:15:00Z",
      method: "Bank Transfer",
      status: "completed",
      transactionId: "TRX-987656",
      details: {
        accountName: "Amanda Clark",
        accountNumber: "****9012",
        bankName: "Citibank",
      },
      taxWithheld: 0,
    },
    {
      id: "PO-78943",
      user: {
        name: "Daniel Lee",
        email: "daniel@example.com",
        id: "USR-12343",
        balance: 2150.75,
        taxStatus: "No Form",
        taxRate: 24,
      },
      amount: 1150.75,
      requestDate: "2024-05-02T11:10:00Z",
      processedDate: "2024-05-03T13:45:00Z",
      method: "Venmo",
      status: "completed",
      transactionId: "TRX-987657",
      details: {
        username: "@daniellee",
      },
      taxWithheld: 276.18, // 24% of amount
    },
    {
      id: "PO-78944",
      user: {
        name: "Olivia Martinez",
        email: "olivia@example.com",
        id: "USR-12344",
        balance: 5150.5,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      amount: 3150.5,
      requestDate: "2024-05-01T15:30:00Z",
      processedDate: "2024-05-02T17:20:00Z",
      method: "Cryptocurrency",
      status: "completed",
      transactionId: "TRX-987658",
      details: {
        currency: "Ethereum",
        address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        network: "Ethereum",
      },
      taxWithheld: 945.15, // 30% of amount
    },
  ]

  // Sample data for early payouts
  const earlyPayouts = [
    {
      id: "EP-12345",
      user: {
        name: "Chris Anderson",
        email: "chris@example.com",
        id: "USR-23456",
        balance: 3245.75,
        taxStatus: "W-9",
        taxRate: 0,
      },
      originalAmount: 1500.0,
      earlyAmount: 1395.0,
      fee: 105.0,
      originalDate: "2024-06-15T00:00:00Z",
      processedDate: "2024-05-15T14:30:00Z",
      status: "processed",
      method: "Bank Transfer", // Changed from "Shorts Rev Balance" to actual payment method
      sourceOfFunds: "Shorts Rev Balance",
    },
    {
      id: "EP-12346",
      user: {
        name: "Sophia Rodriguez",
        email: "sophia@example.com",
        id: "USR-23457",
        balance: 4520.3,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      originalAmount: 2200.0,
      earlyAmount: 2046.0,
      fee: 154.0,
      originalDate: "2024-06-15T00:00:00Z",
      processedDate: "2024-05-15T15:45:00Z",
      status: "processed",
      method: "Bank Transfer",
      sourceOfFunds: "Shorts Rev Balance",
    },
    {
      id: "EP-12347",
      user: {
        name: "James Wilson",
        email: "james@example.com",
        id: "USR-23458",
        balance: 2850.45,
        taxStatus: "W-9",
        taxRate: 0,
      },
      originalAmount: 1850.0,
      earlyAmount: 1720.5,
      fee: 129.5,
      originalDate: "2024-06-15T00:00:00Z",
      processedDate: "2024-05-16T10:20:00Z",
      status: "pending",
      method: "PayPal",
      sourceOfFunds: "Shorts Rev Balance",
    },
    {
      id: "EP-12348",
      user: {
        name: "Emma Thompson",
        email: "emma@example.com",
        id: "USR-23459",
        balance: 5125.6,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      originalAmount: 3100.0,
      earlyAmount: 2883.0,
      fee: 217.0,
      originalDate: "2024-06-15T00:00:00Z",
      processedDate: "2024-05-16T11:30:00Z",
      status: "processed",
      method: "PayPal",
      sourceOfFunds: "Shorts Rev Balance",
    },
    {
      id: "EP-12349",
      user: {
        name: "Noah Garcia",
        email: "noah@example.com",
        id: "USR-23460",
        balance: 1875.2,
        taxStatus: "No Form",
        taxRate: 24,
      },
      originalAmount: 1250.0,
      earlyAmount: 1162.5,
      fee: 87.5,
      originalDate: "2024-06-15T00:00:00Z",
      processedDate: "2024-05-17T09:15:00Z",
      status: "pending",
      method: "Bank Transfer",
      sourceOfFunds: "Shorts Rev Balance",
    },
  ]

  // Sample data for auto withdrawals
  const autoWithdrawals = [
    {
      id: "AW-56789",
      user: {
        name: "Liam Johnson",
        email: "liam@example.com",
        id: "USR-34567",
        balance: 2950.0,
        taxStatus: "W-9",
        taxRate: 0,
      },
      amount: 1450.0,
      processedDate: "2024-05-15T00:00:00Z",
      method: "Bank Transfer",
      status: "completed",
      details: {
        accountName: "Liam Johnson",
        accountNumber: "****7890",
        bankName: "TD Bank",
      },
      schedule: "immediate",
      taxWithheld: 0,
    },
    {
      id: "AW-56790",
      user: {
        name: "Ava Martinez",
        email: "ava@example.com",
        id: "USR-34568",
        balance: 4100.0,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      amount: 2100.0,
      processedDate: "2024-05-15T00:00:00Z",
      method: "PayPal",
      status: "completed",
      details: {
        email: "ava@example.com",
      },
      schedule: "immediate",
      taxWithheld: 630.0, // 30% of amount
    },
    {
      id: "AW-56791",
      user: {
        name: "William Davis",
        email: "william@example.com",
        id: "USR-34569",
        balance: 3750.0,
        taxStatus: "W-9",
        taxRate: 0,
      },
      amount: 1750.0,
      processedDate: "2024-05-15T00:00:00Z",
      method: "Bank Transfer",
      status: "failed",
      details: {
        accountName: "William Davis",
        accountNumber: "****2345",
        bankName: "Chase Bank",
        errorMessage: "Insufficient funds in receiving account",
      },
      schedule: "weekly",
      taxWithheld: 0,
    },
    {
      id: "AW-56792",
      user: {
        name: "Isabella Smith",
        email: "isabella@example.com",
        id: "USR-34570",
        balance: 3950.0,
        taxStatus: "No Form",
        taxRate: 24,
      },
      amount: 1950.0,
      processedDate: "2024-05-15T00:00:00Z",
      method: "Venmo",
      status: "completed",
      details: {
        username: "@isabellasmith",
      },
      schedule: "immediate",
      taxWithheld: 468.0, // 24% of amount
    },
    {
      id: "AW-56793",
      user: {
        name: "Mason Brown",
        email: "mason@example.com",
        id: "USR-34571",
        balance: 5850.0,
        taxStatus: "W-8BEN",
        taxRate: 30,
      },
      amount: 2850.0,
      processedDate: "2024-05-15T00:00:00Z",
      method: "Cryptocurrency",
      status: "pending",
      details: {
        currency: "Bitcoin",
        address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        network: "Bitcoin",
      },
      schedule: "weekly",
      taxWithheld: 855.0, // 30% of amount
    },
  ]

  // Filter payouts based on search query and status
  const filterPayouts = (payouts) => {
    return payouts.filter((payout) => {
      const matchesSearch =
        searchQuery === "" ||
        payout.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payout.user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payout.id.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStatus = filterStatus === "all" || payout.status === filterStatus

      return matchesSearch && matchesStatus
    })
  }

  // Get active payouts based on selected tab
  const getActivePayouts = () => {
    switch (activeTab) {
      case "pending":
        return filterPayouts(pendingPayouts)
      case "completed":
        return filterPayouts(completedPayouts)
      case "early-payouts":
        return filterPayouts(earlyPayouts)
      case "auto-withdrawals":
        return filterPayouts(autoWithdrawals)
      default:
        return []
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // Handle payout approval
  const handleApprove = (payout) => {
    // In a real application, this would make an API call
    const updatedPayouts = [...pendingPayouts]
    const index = updatedPayouts.findIndex((p) => p.id === payout.id)

    if (index !== -1) {
      updatedPayouts[index] = {
        ...updatedPayouts[index],
        status: "processing",
      }

      // Show a success notification
      alert(`Payout ${payout.id} for ${payout.user.name} has been approved and will be processed within 24 hours.`)

      // In a real app, this would update state and make an API call
      // For demo purposes, we'll simulate a status change after a delay
      setTimeout(() => {
        alert(`Payout ${payout.id} status has been updated to "Processing"`)
      }, 1500)
    }
  }

  // Handle payout rejection
  const handleReject = (payout) => {
    // Prompt for rejection reason
    const reason = prompt("Please provide a reason for rejecting this payout:", "Insufficient documentation")

    if (reason) {
      // In a real application, this would make an API call
      const updatedPayouts = [...pendingPayouts]
      const index = updatedPayouts.findIndex((p) => p.id === payout.id)

      if (index !== -1) {
        updatedPayouts[index] = {
          ...updatedPayouts[index],
          status: "rejected",
          rejectionReason: reason,
        }

        // Show a confirmation notification
        alert(
          `Payout ${payout.id} has been rejected. An email notification will be sent to ${payout.user.email} with the provided reason.`,
        )

        // In a real app, this would update state and make an API call
      }
    }
  }

  // Download reports
  const downloadReport = () => {
    const reportType = prompt(
      "Select report type (enter number):\n1. All Payouts\n2. Pending Payouts\n3. Completed Payouts\n4. Tax Summary",
      "1",
    )

    if (reportType) {
      const reportTypeMap = {
        "1": "All Payouts",
        "2": "Pending Payouts",
        "3": "Completed Payouts",
        "4": "Tax Summary",
      }

      const selectedReportType = reportTypeMap[reportType] || "All Payouts"

      alert(`Generating ${selectedReportType} report. The download will begin shortly.`)

      // In a real app, this would trigger an actual download
      setTimeout(() => {
        alert(`${selectedReportType} report has been downloaded successfully.`)
      }, 1500)
    }
  }

  // Enhance the handleRevenueSave function:
  const [userData, setUserData] = useState({
    user: {
      name: "Test User",
    },
    analytics: {
      totalRevenue: 1000,
      monthlyRevenue: 100,
    },
  })
  const [editedUser, setEditedUser] = useState(null)
  const [editedRevenue, setEditedRevenue] = useState(null)
  const [isEditingRevenue, setIsEditingRevenue] = useState(false)

  const handleRevenueSave = () => {
    if (editedRevenue) {
      // Update the userData with the new revenue values
      const updatedUserData = {
        ...userData,
        analytics: {
          ...userData.analytics,
          totalRevenue: editedRevenue.totalRevenue,
          monthlyRevenue: editedRevenue.monthlyRevenue,
        },
      }

      setUserData(updatedUserData)

      // Also update editedUser to keep them in sync
      if (editedUser) {
        setEditedUser({
          ...editedUser,
          analytics: {
            ...editedUser.analytics,
            totalRevenue: editedRevenue.totalRevenue,
            monthlyRevenue: editedRevenue.monthlyRevenue,
          },
        })
      }

      // In a real app, this would trigger an API call to sync with user's dashboard
      alert(
        `Revenue updated for ${userData.user.name}. Total: $${editedRevenue.totalRevenue.toFixed(2)}, Monthly: $${editedRevenue.monthlyRevenue.toFixed(2)}`,
      )

      // Show confirmation of sync
      setTimeout(() => {
        alert("Revenue changes have been synced with user's dashboard and accounting system.")
      }, 1000)

      // Exit edit mode
      setIsEditingRevenue(false)
      setEditedRevenue(null)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manage Payouts</h1>
          <button
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
            onClick={downloadReport}
          >
            <Download className="h-4 w-4" />
            Download Report
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Pending Payouts</p>
                <p className="text-2xl font-bold mt-1">{pendingPayouts.length}</p>
              </div>
              <div className="bg-amber-500/20 p-2 rounded-md">
                <Clock className="h-5 w-5 text-amber-500" />
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-2">
              Total: ${pendingPayouts.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Completed Payouts (30d)</p>
                <p className="text-2xl font-bold mt-1">{completedPayouts.length}</p>
              </div>
              <div className="bg-green-500/20 p-2 rounded-md">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-2">
              Total: ${completedPayouts.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Early Payouts (30d)</p>
                <p className="text-2xl font-bold mt-1">{earlyPayouts.length}</p>
              </div>
              <div className="bg-blue-500/20 p-2 rounded-md">
                <DollarSign className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-2">
              Total: ${earlyPayouts.reduce((sum, p) => sum + p.earlyAmount, 0).toFixed(2)}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Auto Withdrawals (30d)</p>
                <p className="text-2xl font-bold mt-1">{autoWithdrawals.length}</p>
              </div>
              <div className="bg-purple-500/20 p-2 rounded-md">
                <Wallet className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-2">
              Total: ${autoWithdrawals.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-zinc-800">
          <div className="flex flex-wrap -mb-px">
            <button
              className={`mr-2 inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "pending"
                  ? "text-red-500 border-red-500"
                  : "border-transparent hover:text-zinc-400 hover:border-zinc-400"
              }`}
              onClick={() => setActiveTab("pending")}
            >
              Pending Payouts
            </button>
            <button
              className={`mr-2 inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "completed"
                  ? "text-red-500 border-red-500"
                  : "border-transparent hover:text-zinc-400 hover:border-zinc-400"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed Payouts
            </button>
            <button
              className={`mr-2 inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "early-payouts"
                  ? "text-red-500 border-red-500"
                  : "border-transparent hover:text-zinc-400 hover:border-zinc-400"
              }`}
              onClick={() => setActiveTab("early-payouts")}
            >
              Early Payouts
            </button>
            <button
              className={`mr-2 inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "auto-withdrawals"
                  ? "text-red-500 border-red-500"
                  : "border-transparent hover:text-zinc-400 hover:border-zinc-400"
              }`}
              onClick={() => setActiveTab("auto-withdrawals")}
            >
              Auto Withdrawals
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by name, email, or ID..."
              className="w-full md:w-80 bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="h-4 w-4 text-zinc-500" />
            <select
              className="bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending_review">Pending Review</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="rejected">Rejected</option>
              <option value="pending">Pending</option>
              <option value="processed">Processed</option>
            </select>
          </div>
        </div>

        {/* Payouts Table */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Method</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {getActivePayouts().map((payout) => (
                  <tr key={payout.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{payout.id}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium">{payout.user.name}</p>
                        <p className="text-sm text-zinc-500">{payout.user.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {activeTab === "early-payouts" ? (
                        <div>
                          <p className="font-medium">${payout.earlyAmount.toFixed(2)}</p>
                          <p className="text-xs text-zinc-500">
                            Original: ${payout.originalAmount.toFixed(2)}
                            <br />
                            Fee: ${payout.fee.toFixed(2)}
                          </p>
                        </div>
                      ) : (
                        <p className="font-medium">${payout.amount.toFixed(2)}</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {activeTab === "completed" ? (
                        <div>
                          <p className="text-xs text-zinc-500">Requested:</p>
                          <p className="font-medium">{formatDate(payout.requestDate)}</p>
                          <p className="text-xs text-zinc-500 mt-1">Processed:</p>
                          <p className="font-medium">{formatDate(payout.processedDate)}</p>
                        </div>
                      ) : activeTab === "early-payouts" ? (
                        <div>
                          <p className="text-xs text-zinc-500">Original Date:</p>
                          <p className="font-medium">{formatDate(payout.originalDate)}</p>
                          <p className="text-xs text-zinc-500 mt-1">Processed:</p>
                          <p className="font-medium">{formatDate(payout.processedDate)}</p>
                        </div>
                      ) : activeTab === "auto-withdrawals" ? (
                        <div>
                          <p className="font-medium">{formatDate(payout.processedDate)}</p>
                          <p className="text-xs text-zinc-500">
                            Schedule: {payout.schedule === "immediate" ? "Immediate" : "Weekly"}
                          </p>
                        </div>
                      ) : (
                        <p className="font-medium">{formatDate(payout.requestDate)}</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {payout.method === "Bank Transfer" && (
                          <div className="bg-blue-500/20 p-1.5 rounded-full">
                            <CreditCard className="h-3.5 w-3.5 text-blue-500" />
                          </div>
                        )}
                        {payout.method === "PayPal" && (
                          <div className="bg-indigo-500/20 p-1.5 rounded-full">
                            <Wallet className="h-3.5 w-3.5 text-indigo-500" />
                          </div>
                        )}
                        {payout.method === "Venmo" && (
                          <div className="bg-purple-500/20 p-1.5 rounded-full">
                            <Wallet className="h-3.5 w-3.5 text-purple-500" />
                          </div>
                        )}
                        {payout.method === "Cryptocurrency" && (
                          <div className="bg-amber-500/20 p-1.5 rounded-full">
                            <DollarSign className="h-3.5 w-3.5 text-amber-500" />
                          </div>
                        )}
                        <span>{payout.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {payout.status === "pending_review" && (
                        <span className="px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-400">
                          Pending Review
                        </span>
                      )}
                      {payout.status === "processing" && (
                        <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">Processing</span>
                      )}
                      {payout.status === "completed" && (
                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">Completed</span>
                      )}
                      {payout.status === "failed" && (
                        <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400">Failed</span>
                      )}
                      {payout.status === "rejected" && (
                        <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400">Rejected</span>
                      )}
                      {payout.status === "pending" && (
                        <span className="px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-400">Pending</span>
                      )}
                      {payout.status === "processed" && (
                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">Processed</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
                          onClick={() => setSelectedPayout(payout)}
                        >
                          <Eye className="h-4 w-4 text-zinc-400" />
                        </button>
                        {activeTab === "pending" && payout.status === "pending_review" && (
                          <>
                            <button
                              className="p-1.5 bg-green-500/20 hover:bg-green-500/30 rounded-md transition-colors"
                              onClick={() => handleApprove(payout)}
                            >
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </button>
                            <button
                              className="p-1.5 bg-red-500/20 hover:bg-red-500/30 rounded-md transition-colors"
                              onClick={() => handleReject(payout)}
                            >
                              <XCircle className="h-4 w-4 text-red-500" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {getActivePayouts().length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-zinc-500">
                      No payouts found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Payout Detail Modal */}
      {selectedPayout && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <h2 className="text-lg font-medium">Payout Details: {selectedPayout.id}</h2>
              <button className="text-zinc-400 hover:text-white" onClick={() => setSelectedPayout(null)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 overflow-y-auto">
              {/* User Information */}
              <div className="space-y-4">
                <h3 className="text-md font-medium">User Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">Name</p>
                    <p className="text-xl font-medium">{selectedPayout.user.name}</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="text-xl font-medium">{selectedPayout.user.email}</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">User ID</p>
                    <p className="text-xl font-medium">{selectedPayout.user.id}</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">Available Balance</p>
                    <p className="text-xl font-medium text-green-500">${selectedPayout.user.balance.toFixed(2)}</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">Tax Status</p>
                    <p className="text-xl font-medium">{selectedPayout.user.taxStatus}</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-sm text-zinc-400">Tax Rate</p>
                    <p className="text-xl font-medium">{selectedPayout.user.taxRate}%</p>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4">
                <h3 className="text-md font-medium">Payment Details</h3>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg">
                  <div className="p-3 border-b border-zinc-700 flex justify-between items-center">
                    <h3 className="text-md font-medium">Payment Method</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-400">{selectedPayout.method}</span>
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
                    {selectedPayout.method === "Bank Transfer" && selectedPayout.details && (
                      <>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Bank Name</p>
                          <p className="text-sm font-medium">{selectedPayout.details.bankName}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Account Name</p>
                          <p className="text-sm font-medium">{selectedPayout.details.accountName}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Account Number</p>
                          <p className="text-sm font-medium">{selectedPayout.details.accountNumber}</p>
                        </div>
                      </>
                    )}

                    {selectedPayout.method === "PayPal" && selectedPayout.details && (
                      <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                        <p className="text-sm text-zinc-400">PayPal Email</p>
                        <p className="text-sm font-medium">{selectedPayout.details.email}</p>
                      </div>
                    )}

                    {selectedPayout.method === "Venmo" && selectedPayout.details && (
                      <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                        <p className="text-sm text-zinc-400">Venmo Username</p>
                        <p className="text-sm font-medium">{selectedPayout.details.username}</p>
                      </div>
                    )}

                    {selectedPayout.method === "Cryptocurrency" && selectedPayout.details && (
                      <>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Currency</p>
                          <p className="text-sm font-medium">{selectedPayout.details.currency}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Network</p>
                          <p className="text-sm font-medium">{selectedPayout.details.network}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Wallet Address</p>
                          <p className="text-sm font-mono text-xs">{selectedPayout.details.address}</p>
                        </div>
                      </>
                    )}

                    {activeTab === "early-payouts" ? (
                      <>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Original Amount</p>
                          <p className="text-sm font-medium">${selectedPayout.originalAmount.toFixed(2)}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Early Payout Amount</p>
                          <p className="text-sm font-medium">${selectedPayout.earlyAmount.toFixed(2)}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Fee (7%)</p>
                          <p className="text-sm font-medium text-red-400">-${selectedPayout.fee.toFixed(2)}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Original Payment Date</p>
                          <p className="text-sm font-medium">{formatDate(selectedPayout.originalDate)}</p>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Early Payment Date</p>
                          <p className="text-sm font-medium">{formatDate(selectedPayout.processedDate)}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-zinc-400">Amount</p>
                          <p className="text-sm font-medium">${selectedPayout.amount.toFixed(2)}</p>
                        </div>
                        {activeTab === "completed" && (
                          <>
                            <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                              <p className="text-sm text-zinc-400">Request Date</p>
                              <p className="text-sm font-medium">{formatDate(selectedPayout.requestDate)}</p>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                              <p className="text-sm text-zinc-400">Processed Date</p>
                              <p className="text-sm font-medium">{formatDate(selectedPayout.processedDate)}</p>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                              <p className="text-sm text-zinc-400">Transaction ID</p>
                              <p className="text-sm font-mono">{selectedPayout.transactionId}</p>
                            </div>
                          </>
                        )}
                        {activeTab === "auto-withdrawals" && (
                          <>
                            <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                              <p className="text-sm text-zinc-400">Processed Date</p>
                              <p className="text-sm font-medium">{formatDate(selectedPayout.processedDate)}</p>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                              <p className="text-sm text-zinc-400">Schedule</p>
                              <p className="text-sm font-medium">
                                {selectedPayout.schedule === "immediate" ? "Immediate" : "Weekly"}
                              </p>
                            </div>
                            {selectedPayout.status === "failed" && selectedPayout.details.errorMessage && (
                              <div className="bg-red-500/10 p-3 rounded-lg flex items-start gap-3">
                                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium text-red-400">Error</p>
                                  <p className="text-sm text-zinc-300">{selectedPayout.details.errorMessage}</p>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                        {activeTab === "pending" && (
                          <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                            <p className="text-sm text-zinc-400">Request Date</p>
                            <p className="text-sm font-medium">{formatDate(selectedPayout.requestDate)}</p>
                          </div>
                        )}
                      </>
                    )}

                    {(activeTab === "completed" || activeTab === "auto-withdrawals") &&
                      selectedPayout.taxWithheld > 0 && (
                        <>
                          <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                            <p className="text-sm text-zinc-400">Tax Withheld ({selectedPayout.user.taxRate}%)</p>
                            <p className="text-sm font-medium text-red-400">
                              -${selectedPayout.taxWithheld.toFixed(2)}
                            </p>
                          </div>
                          <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                            <p className="text-sm text-zinc-400">Net Amount</p>
                            <p className="text-sm font-medium">
                              ${(selectedPayout.amount - selectedPayout.taxWithheld).toFixed(2)}
                            </p>
                          </div>
                        </>
                      )}

                    {activeTab === "early-payouts" && (
                      <div className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                        <p className="text-sm text-zinc-400">Source of Funds</p>
                        <div className="flex items-center gap-2">
                          <div className="bg-red-500/20 p-1.5 rounded-full">
                            <Wallet className="h-3.5 w-3.5 text-red-500" />
                          </div>
                          <p className="text-sm font-medium">Shorts Rev Balance</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  onClick={() => setSelectedPayout(null)}
                >
                  Close
                </button>
                {activeTab === "pending" && selectedPayout.status === "pending_review" && (
                  <>
                    <button
                      className="bg-red-500/20 hover:bg-red-500/30 text-red-500 px-4 py-2 rounded-md text-sm font-medium"
                      onClick={() => {
                        handleReject(selectedPayout)
                        setSelectedPayout(null)
                      }}
                    >
                      Reject
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                      onClick={() => {
                        handleApprove(selectedPayout)
                        setSelectedPayout(null)
                      }}
                    >
                      Approve
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
