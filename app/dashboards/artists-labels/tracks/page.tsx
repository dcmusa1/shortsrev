"use client"

import { useState } from "react"
import { BarChart, Calendar, Download, Filter, Music, Play, Search, Share2, Upload } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function ArtistsLabelsTracks() {
  const [filterStatus, setFilterStatus] = useState<string>("all")

  // Sample track data
  const tracks = [
    {
      id: 1,
      title: "Summer Nights",
      artist: "DJ Horizon",
      genre: "Dance/Electronic",
      uses: "245K",
      revenue: "$4,325.12",
      status: "active",
      releaseDate: "April 15, 2024",
      duration: "2:45",
    },
    {
      id: 2,
      title: "Midnight Dreams",
      artist: "Luna",
      genre: "Pop",
      uses: "182K",
      revenue: "$3,128.45",
      status: "active",
      releaseDate: "April 2, 2024",
      duration: "3:12",
    },
    {
      id: 3,
      title: "Electric Feel",
      artist: "Neon Pulse",
      genre: "Electronic",
      uses: "156K",
      revenue: "$2,876.33",
      status: "active",
      releaseDate: "March 20, 2024",
      duration: "2:58",
    },
    {
      id: 4,
      title: "Sunset Vibes",
      artist: "Coastal",
      genre: "Chill",
      uses: "124K",
      revenue: "$2,245.78",
      status: "active",
      releaseDate: "March 5, 2024",
      duration: "3:24",
    },
    {
      id: 5,
      title: "Urban Flow",
      artist: "City Beats",
      genre: "Hip Hop",
      uses: "98K",
      revenue: "$1,876.22",
      status: "inactive",
      releaseDate: "February 18, 2024",
      duration: "2:36",
    },
  ]

  // Filter tracks based on status
  const filteredTracks = filterStatus === "all" ? tracks : tracks.filter((track) => track.status === filterStatus)

  return (
    <DashboardLayout portalType="artists-labels">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Tracks</h1>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload New Track
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search tracks..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div className="flex gap-2">
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${filterStatus === "all" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setFilterStatus("all")}
            >
              All Tracks
            </button>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${filterStatus === "active" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setFilterStatus("active")}
            >
              Active
            </button>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${filterStatus === "inactive" ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"}`}
              onClick={() => setFilterStatus("inactive")}
            >
              Inactive
            </button>
            <button className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Filter className="h-4 w-4" />
              More Filters
            </button>
          </div>
        </div>

        {/* Tracks List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_repeat(4,auto)] gap-4 p-4 border-b border-zinc-800 text-sm font-medium text-zinc-400">
            <div></div>
            <div>Track</div>
            <div className="hidden md:block">Genre</div>
            <div className="hidden md:block">Uses</div>
            <div className="hidden md:block">Revenue</div>
            <div>Actions</div>
          </div>

          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_repeat(4,auto)] gap-4 p-4 border-b border-zinc-800 items-center hover:bg-zinc-800/50 transition-colors"
            >
              <div className="w-10 h-10 bg-zinc-800 rounded-md flex items-center justify-center">
                <Play className="h-4 w-4 text-zinc-400" />
              </div>

              <div>
                <h3 className="font-medium text-white">{track.title}</h3>
                <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1">
                  <div>{track.artist}</div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {track.releaseDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Music className="h-3 w-3" />
                    {track.duration}
                  </div>
                  <div
                    className={`px-1.5 py-0.5 rounded text-xs ${track.status === "active" ? "bg-green-500/20 text-green-400" : "bg-zinc-500/20 text-zinc-400"}`}
                  >
                    {track.status === "active" ? "Active" : "Inactive"}
                  </div>
                </div>
              </div>

              <div className="hidden md:block text-zinc-300">{track.genre}</div>

              <div className="hidden md:block text-zinc-300">{track.uses}</div>

              <div className="hidden md:flex items-center gap-1 text-zinc-300">
                <BarChart className="h-4 w-4 text-zinc-500" />
                {track.revenue}
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 rounded-md hover:bg-zinc-700 text-zinc-400 hover:text-white">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-md hover:bg-zinc-700 text-zinc-400 hover:text-white">
                  <Download className="h-4 w-4" />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
