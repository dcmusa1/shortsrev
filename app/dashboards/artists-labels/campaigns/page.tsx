"use client"

import { useState } from "react"
import { BarChart, Calendar, Filter, Music, Plus, Search, Users, Video } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function ArtistsLabelsCampaigns() {
  const [activeTab, setActiveTab] = useState<string>("active")

  // Sample campaigns data
  const campaigns = [
    {
      id: 1,
      title: "Summer Hits Promotion",
      track: "Summer Nights",
      artist: "DJ Horizon",
      status: "active",
      budget: "$5,000",
      spent: "$2,345",
      creators: 24,
      views: "1.2M",
      startDate: "May 1, 2024",
      endDate: "June 30, 2024",
    },
    {
      id: 2,
      title: "New Artist Launch",
      track: "First Light",
      artist: "Aurora",
      status: "active",
      budget: "$3,500",
      spent: "$1,200",
      creators: 15,
      views: "458K",
      startDate: "May 10, 2024",
      endDate: "June 10, 2024",
    },
    {
      id: 3,
      title: "Dance Challenge",
      track: "Move Your Body",
      artist: "Rhythm Collective",
      status: "active",
      budget: "$4,200",
      spent: "$3,800",
      creators: 32,
      views: "2.4M",
      startDate: "April 15, 2024",
      endDate: "May 15, 2024",
    },
    {
      id: 4,
      title: "Album Promotion",
      track: "Multiple Tracks",
      artist: "The Waves",
      status: "scheduled",
      budget: "$8,000",
      spent: "$0",
      creators: 0,
      views: "0",
      startDate: "June 1, 2024",
      endDate: "July 31, 2024",
    },
    {
      id: 5,
      title: "Viral Sound Campaign",
      track: "Catchy Hook",
      artist: "Trend Setter",
      status: "completed",
      budget: "$3,000",
      spent: "$3,000",
      creators: 18,
      views: "5.2M",
      startDate: "March 1, 2024",
      endDate: "April 15, 2024",
    },
  ]

  // Filter campaigns based on active tab
  const filteredCampaigns =
    activeTab === "all" ? campaigns : campaigns.filter((campaign) => campaign.status === activeTab)

  return (
    <DashboardLayout portalType="artists-labels">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Promotion Campaigns</h1>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Campaign
          </button>
        </div>

        {/* Tabs and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex gap-2">
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "all" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setActiveTab("all")}
            >
              All Campaigns
            </button>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "active" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setActiveTab("active")}
            >
              Active
            </button>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "scheduled" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setActiveTab("scheduled")}
            >
              Scheduled
            </button>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === "completed" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
          </div>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <button className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>

        {/* Campaigns List */}
        <div className="space-y-4">
          {filteredCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-colors"
            >
              <div className="p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-white">{campaign.title}</h3>
                      <div
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          campaign.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : campaign.status === "scheduled"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-zinc-500/20 text-zinc-400"
                        }`}
                      >
                        {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                      <Music className="h-4 w-4" />
                      <span>
                        {campaign.track} • {campaign.artist}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {campaign.startDate} - {campaign.endDate}
                      </span>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                      {campaign.status === "completed" ? "View Report" : "Manage"}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-xs text-zinc-500 mb-1">Budget</div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{campaign.budget}</div>
                      <BarChart className="h-4 w-4 text-zinc-400" />
                    </div>
                    {campaign.status !== "scheduled" && (
                      <div className="mt-2 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500 rounded-full"
                          style={{
                            width: `${(Number.parseInt(campaign.spent.replace(/\$|,/g, "")) / Number.parseInt(campaign.budget.replace(/\$|,/g, ""))) * 100}%`,
                          }}
                        ></div>
                      </div>
                    )}
                    {campaign.status !== "scheduled" && (
                      <div className="text-xs text-zinc-500 mt-1">{campaign.spent} spent</div>
                    )}
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-xs text-zinc-500 mb-1">Creators</div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{campaign.creators}</div>
                      <Users className="h-4 w-4 text-zinc-400" />
                    </div>
                    {campaign.status === "active" && <div className="text-xs text-green-500 mt-1">+3 this week</div>}
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-xs text-zinc-500 mb-1">Views</div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{campaign.views}</div>
                      <Video className="h-4 w-4 text-zinc-400" />
                    </div>
                    {campaign.status === "active" && <div className="text-xs text-green-500 mt-1">+125K this week</div>}
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-xs text-zinc-500 mb-1">Cost per View</div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">
                        {campaign.status !== "scheduled"
                          ? `$${((Number.parseInt(campaign.spent.replace(/\$|,/g, "")) / Number.parseInt(campaign.views.replace(/M|K/g, ""))) * (campaign.views.includes("M") ? 0.000001 : campaign.views.includes("K") ? 0.001 : 1)).toFixed(4)}`
                          : "N/A"}
                      </div>
                      <BarChart className="h-4 w-4 text-zinc-400" />
                    </div>
                    {campaign.status === "active" && (
                      <div className="text-xs text-green-500 mt-1">-$0.0002 from last week</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
