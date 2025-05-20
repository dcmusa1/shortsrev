"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Instagram,
  Youtube,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react"

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
    submissions: 0,
    status: "Active",
    category: "Software",
    createdAt: "2023-04-15",
    expiresAt: "2023-05-15",
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
    submissions: 124,
    status: "Active",
    category: "Entertainment",
    createdAt: "2023-03-10",
    expiresAt: "2023-06-10",
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
    submissions: 87,
    status: "Active",
    category: "Health",
    createdAt: "2023-02-20",
    expiresAt: "2023-05-20",
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
    submissions: 56,
    status: "Active",
    category: "Gaming",
    createdAt: "2023-01-15",
    expiresAt: "2023-04-15",
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
    submissions: 42,
    status: "Paused",
    category: "Education",
    createdAt: "2023-03-05",
    expiresAt: "2023-06-05",
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
    submissions: 215,
    status: "Completed",
    category: "Fashion",
    createdAt: "2022-12-10",
    expiresAt: "2023-03-10",
  },
]

export default function AdminClipsRevPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [filterType, setFilterType] = useState("All")
  const [sortBy, setSortBy] = useState("Newest")

  // Platform icon mapping
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "tiktok":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.17-1.75V12.2a6.32 6.32 0 005.25 6.19 6.3 6.3 0 007-6.19V7.83a8.17 8.17 0 004.41 1.29v-3.4a4.85 4.85 0 01-4.41-1.03z"></path>
          </svg>
        )
      case "youtube":
        return <Youtube className="h-4 w-4" />
      case "twitter":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        )
      default:
        return null
    }
  }

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    let bgColor = "bg-green-500/20 text-green-400"
    if (status === "Paused") bgColor = "bg-amber-500/20 text-amber-400"
    if (status === "Completed") bgColor = "bg-blue-500/20 text-blue-400"
    if (status === "Draft") bgColor = "bg-zinc-500/20 text-zinc-400"

    return <span className={`px-2 py-1 rounded text-xs font-medium ${bgColor}`}>{status}</span>
  }

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">ClipsRev Campaigns</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <button className="flex items-center space-x-1 bg-zinc-800 px-3 py-2 rounded-md text-sm border border-zinc-700">
                <Filter className="h-4 w-4 mr-1" />
                <span>Status: {filterStatus}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <button className="flex items-center space-x-1 bg-zinc-800 px-3 py-2 rounded-md text-sm border border-zinc-700">
                <Filter className="h-4 w-4 mr-1" />
                <span>Type: {filterType}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <button className="flex items-center space-x-1 bg-zinc-800 px-3 py-2 rounded-md text-sm border border-zinc-700">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                <span>Sort: {sortBy}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Rate</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Platforms
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Submissions
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Expires
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-zinc-900/50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
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
                        <p className="font-medium">{campaign.name}</p>
                        <p className="text-xs text-zinc-400 truncate max-w-[200px]">{campaign.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm">{campaign.type}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium">{campaign.rate}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>${campaign.budget.paid.toLocaleString()}</span>
                        <span className="text-zinc-400">${campaign.budget.total.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-red-500 h-1 rounded-full"
                          style={{ width: `${campaign.budget.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex space-x-1">
                      {campaign.platforms.map((platform, index) => (
                        <span key={index} className="text-zinc-300">
                          {getPlatformIcon(platform)}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm">{campaign.submissions}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <StatusBadge status={campaign.status} />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm">{campaign.expiresAt}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 hover:bg-zinc-800 rounded">
                        <Eye className="h-4 w-4 text-zinc-400 hover:text-white" />
                      </button>
                      <button className="p-1 hover:bg-zinc-800 rounded">
                        <Edit className="h-4 w-4 text-zinc-400 hover:text-white" />
                      </button>
                      <button className="p-1 hover:bg-zinc-800 rounded">
                        <Trash2 className="h-4 w-4 text-zinc-400 hover:text-white" />
                      </button>
                      <div className="relative">
                        <button className="p-1 hover:bg-zinc-800 rounded">
                          <MoreHorizontal className="h-4 w-4 text-zinc-400 hover:text-white" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="text-sm text-zinc-400">
            Showing <span className="font-medium">{campaigns.length}</span> of{" "}
            <span className="font-medium">{campaigns.length}</span> campaigns
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-zinc-800 rounded-md text-sm disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 bg-zinc-800 rounded-md text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
