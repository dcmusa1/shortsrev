"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Check, Search, UserPlus, X } from "lucide-react"

export default function AffiliateManagement() {
  const [email, setEmail] = useState("")
  const [affiliateType, setAffiliateType] = useState<"normal" | "premium">("normal")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [affiliates, setAffiliates] = useState([
    { email: "demo@example.com", type: "normal", dateAdded: "Apr 2, 2024" },
    { email: "creator@example.com", type: "premium", dateAdded: "Apr 5, 2024" },
    { email: "spyx20088@gmail.com", type: "premium", dateAdded: "Apr 6, 2024" },
  ])

  const [filteredAffiliates, setFilteredAffiliates] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (searchQuery) {
      setFilteredAffiliates(
        affiliates.filter(
          (affiliate) =>
            affiliate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            affiliate.type.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      )
    } else {
      setFilteredAffiliates(affiliates)
    }
  }, [affiliates, searchQuery])

  const handleAddAffiliate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      // In a real app, this would be an API call to your backend
      // await fetch('/api/affiliates/add', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, affiliateType }),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if affiliate already exists
      const existingIndex = affiliates.findIndex((a) => a.email === email)

      if (existingIndex >= 0) {
        // Update existing affiliate
        const updatedAffiliates = [...affiliates]
        updatedAffiliates[existingIndex] = {
          ...updatedAffiliates[existingIndex],
          type: affiliateType,
        }
        setAffiliates(updatedAffiliates)
        setSuccessMessage(`Updated ${email} to ${affiliateType} affiliate status`)
      } else {
        // Add new affiliate
        setAffiliates([
          ...affiliates,
          {
            email,
            type: affiliateType,
            dateAdded: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
          },
        ])
        setSuccessMessage(`Added ${email} as ${affiliateType} affiliate`)
      }

      setEmail("")
    } catch (error) {
      console.error("Error adding affiliate:", error)
      setErrorMessage("Failed to add affiliate. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeAffiliate = (emailToRemove: string) => {
    setAffiliates(affiliates.filter((a) => a.email !== emailToRemove))
    setSuccessMessage(`Removed ${emailToRemove} from affiliates`)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Affiliate Management</h1>
        </div>

        {/* Add Affiliate Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Add or Update Affiliate</h2>
          <form onSubmit={handleAddAffiliate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="user@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="affiliateType" className="block text-sm font-medium text-zinc-400 mb-2">
                  Affiliate Type
                </label>
                <select
                  id="affiliateType"
                  value={affiliateType}
                  onChange={(e) => setAffiliateType(e.target.value as "normal" | "premium")}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="normal">Normal</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2 disabled:opacity-50"
              >
                <UserPlus className="h-4 w-4" />
                {isSubmitting ? "Processing..." : "Add Affiliate"}
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

        {/* Affiliate List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="font-medium">Current Affiliates</h2>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search affiliates..."
                className="pl-9 pr-4 py-1.5 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Date Added</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAffiliates.map((affiliate, index) => (
                  <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">{affiliate.email}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          affiliate.type === "premium"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {affiliate.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">{affiliate.dateAdded}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeAffiliate(affiliate.email)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
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
