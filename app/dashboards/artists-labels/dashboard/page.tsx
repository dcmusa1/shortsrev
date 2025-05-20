"use client"

import { BarChart, Music, TrendingUp, Users } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function ArtistsLabelsDashboard() {
  return (
    <DashboardLayout portalType="artists-labels">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Artists & Labels Dashboard</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Last updated: Today, 10:45 AM</span>
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 rounded-md text-sm">Refresh</button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Total Track Uses</h3>
              <div className="bg-red-500/20 p-2 rounded-md">
                <Music className="h-4 w-4 text-red-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">3.8M</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +15.2% from last month
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Active Tracks</h3>
              <div className="bg-blue-500/20 p-2 rounded-md">
                <Music className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">42</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +5 new this month
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Creator Partners</h3>
              <div className="bg-purple-500/20 p-2 rounded-md">
                <Users className="h-4 w-4 text-purple-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">156</p>
            <p className="text-xs text-zinc-400 mt-1">Across 12 countries</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/70 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-sm font-medium">Royalties Earned</h3>
              <div className="bg-green-500/20 p-2 rounded-md">
                <BarChart className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <p className="text-2xl font-bold">$24,892.67</p>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +22.5% from last month
            </p>
          </div>
        </div>

        {/* Top Performing Tracks */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Top Performing Tracks</h2>
          <div className="space-y-3">
            {[
              { title: "Summer Nights", artist: "DJ Horizon", uses: "245K", revenue: "$4,325.12" },
              { title: "Midnight Dreams", artist: "Luna", uses: "182K", revenue: "$3,128.45" },
              { title: "Electric Feel", artist: "Neon Pulse", uses: "156K", revenue: "$2,876.33" },
              { title: "Sunset Vibes", artist: "Coastal", uses: "124K", revenue: "$2,245.78" },
              { title: "Urban Flow", artist: "City Beats", uses: "98K", revenue: "$1,876.22" },
            ].map((track, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-md hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-md flex items-center justify-center">
                    <Music className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{track.title}</h3>
                    <p className="text-xs text-zinc-400">{track.artist}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-xs text-zinc-400">Uses</span>
                    <p className="font-medium">{track.uses}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-zinc-400">Revenue</span>
                    <p className="font-medium">{track.revenue}</p>
                  </div>
                  <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-1 rounded-md text-sm">
                    Details
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
