"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Check, Copy, Search, Ticket, X, Trash2 } from "lucide-react"

export default function InviteCodes() {
  const [creatorSplit, setCreatorSplit] = useState(70)
  const [platformSplit, setPlatformSplit] = useState(30)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "used">("all")
  const [filterCreator, setFilterCreator] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [inviteCodes, setInviteCodes] = useState([
    {
      code: "A7B9C2",
      creatorSplit: 70,
      platformSplit: 30,
      affiliateSplit: 0,
      createdBy: "admin",
      creatorEmail: "admin@shortsrev.com",
      creatorType: "Admin",
      dateCreated: "Apr 6, 2024",
      usedBy: "creator_jane@example.com",
      dateUsed: "Apr 6, 2024",
      status: "used",
    },
    {
      code: "X5Y7Z9",
      creatorSplit: 50,
      platformSplit: 34.0,
      affiliateSplit: 16.0,
      createdBy: "affiliate",
      creatorEmail: "john@example.com",
      creatorType: "Premium Affiliate",
      dateCreated: "Apr 5, 2024",
      usedBy: null,
      dateUsed: null,
      status: "active",
    },
    {
      code: "P3Q5R7",
      creatorSplit: 80,
      platformSplit: 11.4,
      affiliateSplit: 8.6,
      createdBy: "affiliate",
      creatorEmail: "sarah@example.com",
      creatorType: "Normal Affiliate",
      dateCreated: "Apr 4, 2024",
      usedBy: null,
      dateUsed: null,
      status: "active",
    },
    {
      code: "D2E4F6",
      creatorSplit: 75,
      platformSplit: 25,
      affiliateSplit: 0,
      createdBy: "admin",
      creatorEmail: "admin@shortsrev.com",
      creatorType: "Admin",
      dateCreated: "Apr 3, 2024",
      usedBy: "shorts_master@example.com",
      dateUsed: "Apr 3, 2024",
      status: "used",
    },
  ])

  const [filteredCodes, setFilteredCodes] = useState<any[]>([])

  // Get unique creator types for filtering
  const creatorTypes = ["all", "Admin", "Premium Affiliate", "Normal Affiliate"]

  const generateRandomCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  // Check if code is unique
  const isCodeUnique = (code: string) => {
    return !inviteCodes.some((c) => c.code === code)
  }

  // Generate a unique code
  const generateUniqueCode = () => {
    let code = generateRandomCode()
    while (!isCodeUnique(code)) {
      code = generateRandomCode()
    }
    return code
  }

  const handleCreatorSplitChange = (value: number) => {
    setCreatorSplit(value)
    setPlatformSplit(100 - value)
  }

  const handleGenerateCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      // In a real app, this would be an API call to your backend
      // await fetch('/api/invite-codes/generate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ creatorSplit, platformSplit }),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Generate a unique code
      const uniqueCode = generateUniqueCode()

      // Add new invite code at the beginning of the array
      setInviteCodes([
        {
          code: uniqueCode,
          creatorSplit,
          platformSplit,
          affiliateSplit: 0, // Admin codes have no affiliate split
          createdBy: "admin",
          creatorEmail: "admin@shortsrev.com",
          creatorType: "Admin",
          dateCreated: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          usedBy: null,
          dateUsed: null,
          status: "active",
        },
        ...inviteCodes,
      ])
      setSuccessMessage(`Generated unique invite code: ${uniqueCode}`)

      // Reset form
      setCreatorSplit(70)
      setPlatformSplit(30)
    } catch (error) {
      console.error("Error generating invite code:", error)
      setErrorMessage("Failed to generate invite code. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const deleteCode = (codeToDelete: string) => {
    setInviteCodes(inviteCodes.filter((c) => c.code !== codeToDelete))
    setSuccessMessage(`Deleted invite code: ${codeToDelete}`)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setSuccessMessage(`Copied ${text} to clipboard`)
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  useEffect(() => {
    const filtered = inviteCodes.filter((code) => {
      const statusMatch = filterStatus === "all" || code.status === filterStatus
      const creatorMatch = filterCreator === "all" || code.creatorType === filterCreator
      const searchMatch =
        searchQuery === "" ||
        code.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        code.creatorEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (code.usedBy && code.usedBy.toLowerCase().includes(searchQuery.toLowerCase()))

      return statusMatch && creatorMatch && searchMatch
    })

    // Sort codes by date (newest first)
    const sorted = [...filtered].sort((a, b) => {
      const dateA = a.dateUsed ? new Date(a.dateUsed) : new Date(a.dateCreated)
      const dateB = b.dateUsed ? new Date(b.dateUsed) : new Date(b.dateCreated)
      return dateB.getTime() - dateA.getTime()
    })

    setFilteredCodes(sorted)
  }, [inviteCodes, filterStatus, filterCreator, searchQuery])

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Invite Codes</h1>
        </div>

        {/* Generate Invite Code Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Generate New Invite Code</h2>
          <p className="text-zinc-400 mb-4">
            Generate a unique, one-time use invite code. Each code can only be used once for signup.
          </p>
          <form onSubmit={handleGenerateCode} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="creatorSplit" className="block text-sm font-medium text-zinc-400 mb-2">
                  Creator Split: {creatorSplit}%
                </label>
                <input
                  type="range"
                  id="creatorSplit"
                  min="50"
                  max="90"
                  step="1"
                  value={creatorSplit}
                  onChange={(e) => handleCreatorSplitChange(Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="w-full h-2 mt-2 bg-red-500 rounded-lg"></div>
              </div>
              <div>
                <label htmlFor="platformSplit" className="block text-sm font-medium text-zinc-400 mb-2">
                  Platform Split: {platformSplit}%
                </label>
                <input
                  type="range"
                  id="platformSplit"
                  min="10"
                  max="50"
                  step="1"
                  value={platformSplit}
                  disabled
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-not-allowed"
                />
                <div className="w-full h-2 mt-2 bg-blue-500 rounded-lg"></div>
              </div>
            </div>

            <div className="bg-zinc-700 p-4 rounded-lg mt-4">
              <h3 className="text-sm font-medium text-zinc-300 mb-2 text-center">Split Ratio Breakdown</h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden flex">
                  <div className="h-full bg-red-500" style={{ width: `${creatorSplit}%` }}></div>
                  <div className="h-full bg-blue-500" style={{ width: `${platformSplit}%` }}></div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex space-x-4">
                  <div className="text-center text-xs text-zinc-400">{creatorSplit}% Creator</div>
                  <div className="text-center text-xs text-zinc-400">{platformSplit}% Platform</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2 disabled:opacity-50"
              >
                <Ticket className="h-4 w-4" />
                {isSubmitting ? "Generating..." : "Generate Unique Code"}
              </button>
            </div>
          </form>

          {successMessage && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 flex items-center gap-2">
              <Check className="h-4 w-4" />
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400 flex items-center gap-2">
              <X className="h-4 w-4" />
              {errorMessage}
            </div>
          )}
        </div>

        {/* Invite Codes List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h2 className="font-medium">Invite Codes</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search codes or users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                  className="pl-9 pr-4 py-1.5 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as "all" | "active" | "used")}
                className="w-full md:w-auto py-1.5 px-3 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="used">Used</option>
              </select>
              <select
                value={filterCreator}
                onChange={(e) => setFilterCreator(e.target.value)}
                className="w-full md:w-auto py-1.5 px-3 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                {creatorTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type === "all" ? "All Creator Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">Code</th>
                  <th className="px-6 py-3 text-center">Split Ratio</th>
                  <th className="px-6 py-3">Created By</th>
                  <th className="px-6 py-3">Created On</th>
                  <th className="px-6 py-3">Used By</th>
                  <th className="px-6 py-3">Used On</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCodes.map((inviteCode, index) => (
                  <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-mono">
                      <div className="flex items-center gap-2">
                        {inviteCode.code}
                        <button
                          onClick={() => copyToClipboard(inviteCode.code)}
                          className="text-zinc-400 hover:text-white"
                          title="Copy to clipboard"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2 items-center">
                        <div className="w-24 h-2 bg-zinc-700 rounded-full overflow-hidden flex">
                          <div className="h-full bg-red-500" style={{ width: `${inviteCode.creatorSplit}%` }}></div>
                          {inviteCode.affiliateSplit > 0 && (
                            <div
                              className="h-full bg-amber-500"
                              style={{ width: `${inviteCode.affiliateSplit}%` }}
                            ></div>
                          )}
                          <div className="h-full bg-blue-500" style={{ width: `${inviteCode.platformSplit}%` }}></div>
                        </div>
                        <div className="text-xs text-center">
                          {inviteCode.affiliateSplit > 0
                            ? `${inviteCode.creatorSplit}/${inviteCode.affiliateSplit.toFixed(1)}/${inviteCode.platformSplit.toFixed(1)}`
                            : `${inviteCode.creatorSplit}/${inviteCode.platformSplit}`}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="capitalize">{inviteCode.creatorType}</span>
                      <div className="text-xs text-zinc-500">{inviteCode.creatorEmail}</div>
                    </td>
                    <td className="px-6 py-4">{inviteCode.dateCreated}</td>
                    <td className="px-6 py-4">{inviteCode.usedBy || "-"}</td>
                    <td className="px-6 py-4">{inviteCode.dateUsed || "-"}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          inviteCode.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-zinc-500/20 text-zinc-400"
                        }`}
                      >
                        {inviteCode.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {inviteCode.status === "active" && (
                        <button
                          onClick={() => deleteCode(inviteCode.code)}
                          className="text-red-400 hover:text-red-300 flex items-center gap-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      )}
                    </td>
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
