"use client"

import { useState } from "react"
import { Calendar, Music, Search } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function CreatorsContent() {
  // Filter state removed as requested
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Sample video data
  const videos = [
    {
      id: 1,
      title: "Summer Dance Challenge 2024",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: "1.2M",
      likes: "85K",
      status: "active",
      track: "Summer Nights by DJ Horizon",
      date: "May 15, 2024",
    },
    {
      id: 2,
      title: "How to Style Summer Outfits",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: "458K",
      likes: "32K",
      status: "active",
      track: "Fashion Vibes by Style Collective",
      date: "May 10, 2024",
    },
    {
      id: 3,
      title: "Quick Healthy Breakfast Ideas",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: "325K",
      likes: "28K",
      status: "active",
      track: "Morning Energy by Wellness Beats",
      date: "May 5, 2024",
    },
    {
      id: 4,
      title: "Apartment Workout Routine",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: "289K",
      likes: "24K",
      status: "active",
      track: "Fitness Power by Gym Tracks",
      date: "April 28, 2024",
    },
    {
      id: 5,
      title: "DIY Room Decor Ideas",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: "198K",
      likes: "18K",
      status: "pending",
      track: "Creative Flow by Artsy Sounds",
      date: "April 20, 2024",
    },
    {
      id: 6,
      title: "Morning Routine 2024",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: "0",
      likes: "0",
      status: "rejected",
      track: "Sunrise Beats by Morning Vibes",
      date: "April 15, 2024",
    },
  ]

  // Filter videos based on status and search query
  const filteredVideos = videos.filter(
    (video) =>
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.track.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <DashboardLayout portalType="creators">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Content</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search content..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Filter buttons removed as requested */}
        </div>

        {/* Videos List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[120px_1fr_2fr_150px] gap-4 p-4 border-b border-zinc-800 text-sm font-medium text-zinc-400">
            <div>Content</div>
            <div>Title</div>
            <div>Track</div>
            <div className="text-center">Stats</div>
          </div>

          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="grid grid-cols-[120px_1fr_2fr_150px] gap-4 p-4 border-b border-zinc-800 items-center hover:bg-zinc-800/50 transition-colors"
            >
              <div>
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-28 h-20 object-cover rounded-md"
                />
              </div>

              <div>
                <h3 className="font-medium text-white text-base">{video.title}</h3>
                <div className="flex items-center gap-3 text-sm text-zinc-400 mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {video.date}
                  </div>
                  {/* Status indicator removed as requested */}
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-300">
                <Music className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <span className="text-sm">{video.track}</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-zinc-400">Views</div>
                  <div className="font-medium">{video.views}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-zinc-400">Likes</div>
                  <div className="font-medium">{video.likes}</div>
                </div>
              </div>
            </div>
          ))}

          {filteredVideos.length === 0 && (
            <div className="p-8 text-center text-zinc-500">No content found matching your criteria</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
