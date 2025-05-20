"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/dashboard/admin-layout"
import { Search, ExternalLink, ThumbsUp, ThumbsDown, X, Check } from "lucide-react"

export default function ChannelReviews() {
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected" | "status_change">("pending")
  const [showRejectModal, setShowRejectModal] = useState(false)
  const [showApproveModal, setShowApproveModal] = useState(false)
  const [rejectionReason, setRejectionReason] = useState("")
  const [currentChannelId, setCurrentChannelId] = useState<number | null>(null)
  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "Gaming Shorts",
      url: "youtube.com/c/gamingshorts",
      subscribers: "245K",
      creator: "John Smith",
      email: "john@example.com",
      dateSubmitted: "Apr 5, 2024",
      status: "pending",
      verificationCode: "SHORTSREV-A7B9C2D4",
    },
    {
      id: 2,
      name: "Music Vibes",
      url: "youtube.com/c/musicvibes",
      subscribers: "1.2M",
      creator: "Sarah Johnson",
      email: "sarah@example.com",
      dateSubmitted: "Apr 4, 2024",
      status: "pending",
      verificationCode: "SHORTSREV-X5Y7Z9A1",
    },
    {
      id: 3,
      name: "Tech Shorts",
      url: "youtube.com/c/techshorts",
      subscribers: "780K",
      creator: "Mike Chen",
      email: "mike@example.com",
      dateSubmitted: "Apr 3, 2024",
      status: "approved",
      verificationCode: "SHORTSREV-B2C4D6E8",
    },
    {
      id: 4,
      name: "Travel Moments",
      url: "youtube.com/c/travelmoments",
      subscribers: "350K",
      creator: "Emma Wilson",
      email: "emma@example.com",
      dateSubmitted: "Apr 2, 2024",
      status: "rejected",
      verificationCode: "SHORTSREV-F8G6H4J2",
      rejectionReason: "Verification code not found in channel description",
    },
    {
      id: 5,
      name: "Fitness Shorts",
      url: "youtube.com/c/fitnessshorts",
      subscribers: "520K",
      creator: "Alex Rodriguez",
      email: "alex@example.com",
      dateSubmitted: "Apr 1, 2024",
      status: "pending",
      verificationCode: "SHORTSREV-K3L5M7N9",
    },
  ])

  const [statusChangeEvents, setStatusChangeEvents] = useState([
    {
      id: 1,
      channelId: 3,
      channelName: "Tech Shorts",
      action: "disconnected",
      timestamp: "Apr 7, 2024 2:32 PM",
      creator: "Mike Chen",
      email: "mike@example.com",
      reason: "Taking a break from content creation for a few weeks",
      reconnectAvailable: true,
    },
    {
      id: 2,
      channelId: 3,
      channelName: "Tech Shorts",
      action: "reconnected",
      timestamp: "Apr 7, 2024 3:45 PM",
      creator: "Mike Chen",
      email: "mike@example.com",
      reason: null,
      reconnectAvailable: false,
    },
    {
      id: 3,
      channelId: 5,
      channelName: "Fitness Shorts",
      action: "disconnected",
      timestamp: "Apr 6, 2024 9:17 AM",
      creator: "Alex Rodriguez",
      email: "alex@example.com",
      reason: "Moving to a new channel with different branding",
      reconnectAvailable: false,
    },
  ])

  const [filteredChannels, setFilteredChannels] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (filter === "status_change") {
      setFilteredChannels(statusChangeEvents)
    } else {
      const filtered = filter === "all" ? channels : channels.filter((channel) => channel.status === filter)

      if (searchQuery) {
        setFilteredChannels(
          filtered.filter(
            (channel) =>
              channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              channel.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
              channel.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
              channel.email.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        )
      } else {
        setFilteredChannels(filtered)
      }
    }
  }, [filter, channels, statusChangeEvents, searchQuery])

  const openApproveModal = (id: number) => {
    setCurrentChannelId(id)
    setShowApproveModal(true)
  }

  const closeApproveModal = () => {
    setShowApproveModal(false)
    setCurrentChannelId(null)
  }

  const submitApproval = () => {
    // Update the channel status to approved
    setChannels(
      channels.map((channel) => (channel.id === currentChannelId ? { ...channel, status: "approved" } : channel)),
    )

    closeApproveModal()
  }

  const openRejectModal = (id: number) => {
    setCurrentChannelId(id)
    setRejectionReason("")
    setShowRejectModal(true)
  }

  const closeRejectModal = () => {
    setShowRejectModal(false)
    setCurrentChannelId(null)
  }

  const submitRejection = () => {
    if (!rejectionReason.trim()) {
      alert("Please provide a reason for rejection")
      return
    }

    // Update the channel status to rejected with the rejection reason
    setChannels(
      channels.map((channel) =>
        channel.id === currentChannelId ? { ...channel, status: "rejected", rejectionReason } : channel,
      ),
    )

    closeRejectModal()
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Channel Reviews</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search channels..."
                className="pl-9 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              />
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex border-b border-zinc-800">
          {["all", "pending", "approved", "rejected", "status_change"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                filter === status
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-zinc-400 hover:text-zinc-300"
              }`}
            >
              {status === "status_change" ? "Status Changes" : status.charAt(0).toUpperCase() + status.slice(1)}
              {status === "pending" && (
                <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                  {channels.filter((c) => c.status === "pending").length}
                </span>
              )}
              {status === "status_change" && statusChangeEvents.length > 0 && (
                <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                  {statusChangeEvents.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {filter === "status_change" ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                    <th className="px-6 py-3">Channel</th>
                    <th className="px-6 py-3">Creator</th>
                    <th className="px-6 py-3">Action</th>
                    <th className="px-6 py-3">Reason</th>
                    <th className="px-6 py-3">Timestamp</th>
                    <th className="px-6 py-3">Reconnection</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredChannels.map((event) => (
                    <tr key={event.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">{event.channelName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div>{event.creator}</div>
                          <div className="text-sm text-zinc-400">{event.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            event.action === "reconnected"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {event.action}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {event.reason ? (
                          <div className="text-sm text-zinc-300">{event.reason}</div>
                        ) : (
                          <div className="text-sm text-zinc-500 italic">No reason provided</div>
                        )}
                      </td>
                      <td className="px-6 py-4">{event.timestamp}</td>
                      <td className="px-6 py-4">
                        {event.action === "disconnected" && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              event.reconnectAvailable ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {event.reconnectAvailable ? "Available" : "Expired"}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          // Keep the existing table for other filters
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm font-medium text-zinc-400 border-b border-zinc-800">
                    <th className="px-6 py-3">Channel</th>
                    <th className="px-6 py-3">Creator</th>
                    <th className="px-6 py-3">Subscribers</th>
                    <th className="px-6 py-3">Verification Code</th>
                    <th className="px-6 py-3">Submitted</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredChannels.map((channel) => (
                    <tr key={channel.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium">{channel.name}</div>
                          <div className="text-sm text-zinc-400 flex items-center gap-1">
                            {channel.url}
                            <a href={`https://${channel.url}`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div>{channel.creator}</div>
                          <div className="text-sm text-zinc-400">{channel.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{channel.subscribers}</td>
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm">{channel.verificationCode}</div>
                      </td>
                      <td className="px-6 py-4">{channel.dateSubmitted}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            channel.status === "approved"
                              ? "bg-green-500/20 text-green-400"
                              : channel.status === "rejected"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-amber-500/20 text-amber-400"
                          }`}
                        >
                          {channel.status}
                        </span>
                        {channel.status === "rejected" && channel.rejectionReason && (
                          <div className="mt-1 text-xs text-zinc-400">{channel.rejectionReason}</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {channel.status === "pending" && (
                            <>
                              <button
                                onClick={() => openApproveModal(channel.id)}
                                className="p-1 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                title="Approve"
                              >
                                <ThumbsUp className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => openRejectModal(channel.id)}
                                className="p-1 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                title="Reject"
                              >
                                <ThumbsDown className="h-4 w-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Approval Modal */}
        {showApproveModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center p-4 border-b border-zinc-800">
                <h3 className="text-lg font-bold">Approve Channel</h3>
                <button className="text-zinc-400 hover:text-white" onClick={closeApproveModal}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-zinc-400 mb-4">
                    Are you sure you want to approve this channel? The creator will be notified and the channel will be
                    connected to their account.
                  </p>
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    onClick={closeApproveModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                    onClick={submitApproval}
                  >
                    Approve Channel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rejection Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center p-4 border-b border-zinc-800">
                <h3 className="text-lg font-bold">Reject Channel</h3>
                <button className="text-zinc-400 hover:text-white" onClick={closeRejectModal}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-zinc-400 mb-4">
                  Please provide a reason for rejecting this channel. This message will be sent to the creator.
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="rejectionReason" className="block text-sm font-medium text-zinc-400 mb-2">
                      Rejection Reason
                    </label>
                    <textarea
                      id="rejectionReason"
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      placeholder="e.g., Verification code not found in channel description"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[100px]"
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      onClick={closeRejectModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                      onClick={submitRejection}
                    >
                      Reject Channel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
