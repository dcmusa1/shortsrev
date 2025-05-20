"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Plus, Search, Youtube, X, Check, Copy, ExternalLink, Power, RefreshCw } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

// Interface for channel data
interface Channel {
  id: number
  name: string
  platform: string
  handle: string
  subscribers: string
  videos: number
  isConnected: boolean
  disconnectedAt?: number // Timestamp when channel was disconnected
  disconnectReason?: string // Reason for disconnection
}

export default function CreatorsChannels() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [showAddChannelModal, setShowAddChannelModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [channelUrl, setChannelUrl] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [showDisconnectModal, setShowDisconnectModal] = useState(false)
  const [channelToDisconnect, setChannelToDisconnect] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(Date.now())
  const [disconnectReason, setDisconnectReason] = useState("")

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "channel_approved",
      title: "Channel Approved",
      message: 'Your channel "Gaming Shorts" has been approved!',
      read: false,
      date: "Just now",
    },
    {
      id: 2,
      type: "track_recommendation",
      title: "New track recommendation",
      message: "We found a new track that matches your style",
      read: false,
      date: "2 hours ago",
    },
    {
      id: 3,
      type: "milestone",
      title: "Content milestone reached",
      message: 'Your video "Summer Dance Challenge" hit 1M views!',
      read: false,
      date: "Yesterday",
    },
    {
      id: 4,
      type: "payment",
      title: "Payment processed",
      message: "Your monthly earnings have been processed",
      read: false,
      date: "3 days ago",
    },
  ])
  const [notificationCount, setNotificationCount] = useState(notifications.filter((n) => !n.read).length)
  const [showNotificationsPanel, setShowNotificationsPanel] = useState(false)

  // Sample channels data
  const [channels, setChannels] = useState<Channel[]>([
    {
      id: 1,
      name: "Main Channel",
      platform: "YouTube",
      handle: "@creator_main",
      subscribers: "1.2M",
      videos: 156,
      isConnected: true,
    },
    {
      id: 2,
      name: "Behind the Scenes",
      platform: "YouTube",
      handle: "@creator_bts",
      subscribers: "450K",
      videos: 78,
      isConnected: true,
    },
    {
      id: 3,
      name: "Gaming Channel",
      platform: "YouTube",
      handle: "@creator_gaming",
      subscribers: "320K",
      videos: 92,
      isConnected: true,
    },
    {
      id: 4,
      name: "Vlog Channel",
      platform: "YouTube",
      handle: "@creator_vlogs",
      subscribers: "180K",
      videos: 64,
      isConnected: false,
      disconnectedAt: Date.now() - 25 * 60 * 60 * 1000, // Disconnected 25 hours ago (past the 24h window)
    },
  ])

  // Update current time every minute to check for 24-hour windows
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  // Filter channels based on search query
  const filteredChannels = channels.filter(
    (channel) =>
      searchQuery === "" ||
      channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.handle.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Check if channel is within 24-hour reconnect window
  const isWithinReconnectWindow = (channel: Channel) => {
    if (!channel.disconnectedAt) return false

    // 24 hours in milliseconds
    const reconnectWindow = 24 * 60 * 60 * 1000

    return currentTime - channel.disconnectedAt < reconnectWindow
  }

  // Handle disconnect confirmation
  const handleDisconnectClick = (id: number) => {
    setChannelToDisconnect(id)
    setShowDisconnectModal(true)
  }

  // Confirm disconnect
  const confirmDisconnect = () => {
    if (channelToDisconnect !== null) {
      // Check if reason is provided
      if (!disconnectReason.trim()) {
        alert("Please provide a reason for disconnecting your channel")
        return
      }

      // Get the channel name before updating
      const channelName = getChannelName(channelToDisconnect)

      // Update the channels array
      const updatedChannels = channels.map((channel) =>
        channel.id === channelToDisconnect
          ? { ...channel, isConnected: false, disconnectedAt: Date.now(), disconnectReason }
          : channel,
      )
      setChannels(updatedChannels)

      // Close the modal
      setShowDisconnectModal(false)
      setChannelToDisconnect(null)
      setDisconnectReason("")

      // Create a new disconnection notification
      const newNotification = {
        id: Date.now(),
        type: "channel_disconnected",
        title: "Channel Disconnected",
        message: `Your channel "${channelName}" has been disconnected. You can reconnect within 24 hours.`,
        read: false,
        date: "Just now",
        reason: disconnectReason,
      }

      // Add the notification to the beginning of the array
      const updatedNotifications = [newNotification, ...notifications]
      setNotifications(updatedNotifications)
      setNotificationCount(notificationCount + 1)

      // Prepare notification message but don't show it on this page
      setNotificationMessage(
        `You've successfully disconnected "${channelName}" from Shorts Rev. You can reconnect within 24 hours.`,
      )

      // Send status update to admin panel
      sendChannelStatusToAdmin(channelToDisconnect, "disconnect", channelName, disconnectReason)
    }
  }

  // Reconnect a channel
  const handleReconnect = (id: number) => {
    // Get the channel name
    const channelName = getChannelName(id)

    // Update the channels array
    const updatedChannels = channels.map((channel) =>
      channel.id === id ? { ...channel, isConnected: true, disconnectedAt: undefined } : channel,
    )
    setChannels(updatedChannels)

    // Create a new reconnection notification
    const newNotification = {
      id: Date.now(),
      type: "channel_reconnected",
      title: "Channel Reconnected",
      message: `Your channel "${channelName}" has been reconnected successfully.`,
      read: false,
      date: "Just now",
    }

    // Add the notification to the beginning of the array
    const updatedNotifications = [newNotification, ...notifications]
    setNotifications(updatedNotifications)
    setNotificationCount(notificationCount + 1)

    // Prepare notification message but don't show it on this page
    setNotificationMessage(`You've successfully reconnected "${channelName}" to Shorts Rev.`)
    // Don't show notification on channels page: setShowNotification(true)

    // Send status update to admin panel
    sendChannelStatusToAdmin(id, "reconnect", channelName)
  }

  // Generate a verification code
  const generateVerificationCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = "SHORTSREV-"
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  const isValidYouTubeUrl = (url: string): boolean => {
    if (!url) return false

    try {
      const urlObj = new URL(url)
      const hostname = urlObj.hostname.toLowerCase()
      return (
        hostname === "youtube.com" ||
        hostname === "www.youtube.com" ||
        hostname === "youtu.be" ||
        hostname.endsWith(".youtube.com")
      )
    } catch (e) {
      return false
    }
  }

  // Function to handle channel verification
  const handleVerificationRequest = () => {
    if (!channelUrl) {
      alert("Please enter your YouTube channel URL")
      return
    }

    if (!isValidYouTubeUrl(channelUrl)) {
      alert("Please enter a valid YouTube URL")
      return
    }

    // For demo purposes, show success modal after a short delay
    setTimeout(() => {
      setShowAddChannelModal(false)
      setShowSuccessModal(true)
    }, 1000)
  }

  // Function to copy verification code to clipboard
  const copyVerificationCode = () => {
    navigator.clipboard.writeText(verificationCode)
    alert("Verification code copied to clipboard")
  }

  // Function to open the add channel modal
  const openAddChannelModal = () => {
    // Generate a verification code only once when opening the modal
    if (!verificationCode) {
      setVerificationCode(generateVerificationCode())
    }
    setShowAddChannelModal(true)
  }

  // Function to close the add channel modal
  const closeAddChannelModal = () => {
    setShowAddChannelModal(false)
    setTermsAgreed(false)
    setChannelUrl("")
    // Don't reset the verification code here
  }

  // Function to close the success modal
  const closeSuccessModal = () => {
    setShowSuccessModal(false)
  }

  // Function to open terms in a new window
  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open("/terms", "_blank")
  }

  // No longer showing notifications on the channels page
  // useEffect for notifications has been removed

  const handleNotificationClick = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
    setNotificationCount((prev) => Math.max(0, prev - 1))
  }

  // Get channel name by ID
  const getChannelName = (id: number) => {
    const channel = channels.find((c) => c.id === id)
    return channel ? channel.name : "this channel"
  }

  // Get channel status text and color
  const getChannelStatus = (channel: Channel) => {
    if (channel.isConnected) {
      return { text: "Connected", colorClass: "bg-green-500" }
    } else if (isWithinReconnectWindow(channel)) {
      return { text: "Reconnect Available", colorClass: "bg-yellow-500" }
    } else {
      return { text: "Disconnected", colorClass: "bg-red-500" }
    }
  }

  // Function to send channel status updates to admin panel
  const sendChannelStatusToAdmin = (
    channelId: number,
    action: "disconnect" | "reconnect",
    channelName: string,
    reason?: string,
  ) => {
    // In a real application, this would be an API call to a backend endpoint
    console.log(
      `Admin notification: Channel ${channelId} (${channelName}) was ${action}ed by user. Reason: ${reason || "Not provided"}`,
    )

    // Example of what an API call might look like:
    // fetch('/api/admin/channel-status-update', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     channelId,
    //     action,
    //     channelName,
    //     timestamp: Date.now(),
    //     userId: 'current-user-id', // This would come from auth context
    //     reason
    //   }),
    // });
  }

  return (
    <DashboardLayout portalType="creators">
      {/* Notification Modal - Only shown on dashboard page */}
      {/* Removed from channels page as requested */}

      {/* Disconnect Confirmation Modal */}
      {showDisconnectModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Power className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Disconnect Channel</h3>
              <p className="text-zinc-400 mb-4">
                Are you sure you want to disconnect <strong>{getChannelName(channelToDisconnect || 0)}</strong> from
                Shorts Rev?
                <br />
                <br />
                <span className="text-red-400">
                  By disconnecting, you will no longer receive payments for content on this channel, and all associated
                  data will be archived.
                </span>
                <br />
                <br />
                <span className="text-yellow-400">
                  You will have 24 hours to reconnect this channel. After that, you'll need to apply for verification
                  again.
                </span>
              </p>

              <div className="mb-4">
                <label htmlFor="disconnectReason" className="block text-sm font-medium text-zinc-400 text-left mb-2">
                  Please provide a reason for disconnecting:
                </label>
                <textarea
                  id="disconnectReason"
                  value={disconnectReason}
                  onChange={(e) => setDisconnectReason(e.target.value)}
                  placeholder="e.g., Moving to a different channel, taking a break, etc."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[80px]"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-8 rounded-md"
                  onClick={() => setShowDisconnectModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-8 rounded-md"
                  onClick={confirmDisconnect}
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Channels</h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
            onClick={openAddChannelModal}
          >
            <Plus className="h-4 w-4" />
            Add Channel
          </button>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search channels..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChannels.map((channel) => {
            const status = getChannelStatus(channel)
            return (
              <div
                key={channel.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-colors"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-500 rounded-md flex items-center justify-center">
                        <Youtube className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{channel.name}</h3>
                        <p className="text-sm text-zinc-400">{channel.handle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-zinc-800 rounded-md p-3">
                      <p className="text-xs text-zinc-500">Subscribers</p>
                      <p className="text-lg font-bold">{channel.subscribers}</p>
                    </div>
                    <div className="bg-zinc-800 rounded-md p-3">
                      <p className="text-xs text-zinc-500">Videos</p>
                      <p className="text-lg font-bold">{channel.videos}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${status.colorClass}`}></span>
                    <span
                      className={`text-xs ${!channel.isConnected && !isWithinReconnectWindow(channel) ? "text-red-400 font-medium" : "text-zinc-400"}`}
                    >
                      {status.text}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {channel.isConnected && (
                      <button
                        className="bg-zinc-800 hover:bg-zinc-700 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1"
                        onClick={() => handleDisconnectClick(channel.id)}
                      >
                        <Power className="h-3 w-3" />
                        Disconnect
                      </button>
                    )}
                    {!channel.isConnected && isWithinReconnectWindow(channel) && (
                      <button
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1"
                        onClick={() => handleReconnect(channel.id)}
                      >
                        <RefreshCw className="h-3 w-3" />
                        Reconnect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Add Channel Card */}
          <div
            className="bg-zinc-900 border border-zinc-800 border-dashed rounded-lg overflow-hidden hover:bg-zinc-800/30 transition-colors cursor-pointer flex items-center justify-center"
            onClick={openAddChannelModal}
          >
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <Plus className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="font-medium text-zinc-400">Add New Channel</h3>
              <p className="text-sm text-zinc-500 mt-1">Connect another YouTube channel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Channel Modal */}
      {showAddChannelModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-lgunded-lg max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold">Verify Your YouTube Channel</h3>
              <button className="text-zinc-400 hover:text-white" onClick={closeAddChannelModal}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-medium mb-2">Channel Verification</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  To verify your YouTube channel ownership, please add the following code to your channel's About
                  section or description.
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-md mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-zinc-400">Your verification code:</span>
                  <button
                    onClick={copyVerificationCode}
                    className="text-zinc-400 hover:text-white"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="font-mono text-lg text-center p-2 bg-zinc-700 rounded-md">{verificationCode}</div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h5 className="text-sm font-medium">How to add the verification code:</h5>
                  <ol className="text-sm text-zinc-400 space-y-2 list-decimal pl-5">
                    <li>Go to your YouTube channel</li>
                    <li>Click on "Customize Channel"</li>
                    <li>Go to the "About" tab</li>
                    <li>Add the verification code to your channel description</li>
                    <li>Save your changes</li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <label htmlFor="channelUrl" className="block text-sm font-medium text-zinc-400">
                    Your YouTube Channel URL
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="channelUrl"
                      placeholder="https://youtube.com/c/yourchannel"
                      value={channelUrl}
                      onChange={(e) => setChannelUrl(e.target.value)}
                      className="flex-1 bg-zinc-800 border border-zinc-700 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <a
                      href={channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-zinc-700 px-2 flex items-center justify-center rounded-r-md ${!channelUrl ? "opacity-50 cursor-not-allowed" : "hover:bg-zinc-600"}`}
                      onClick={(e) => !channelUrl && e.preventDefault()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="text-sm text-zinc-400 bg-zinc-800/50 p-3 rounded-md">
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-400 flex-shrink-0 mt-0.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </span>
                    <span>
                      It may take up to 24 hours for our team to verify your channel ownership. You'll receive a
                      notification once the verification is complete.
                    </span>
                  </p>
                </div>

                <div className="flex items-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="terms-agreement"
                    className="mt-1"
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                  />
                  <label htmlFor="terms-agreement" className="text-sm text-zinc-400">
                    By verifying, you agree to the{" "}
                    <a href="/terms" onClick={openTerms} className="text-red-500 hover:underline inline-block">
                      Shorts Rev terms
                    </a>
                  </label>
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 ${
                    termsAgreed && channelUrl
                      ? "bg-red-500 hover:bg-red-600 text-white font-medium"
                      : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                  }`}
                  onClick={termsAgreed && channelUrl ? handleVerificationRequest : undefined}
                  disabled={!termsAgreed || !channelUrl}
                >
                  Submit for Verification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-lg max-w-md w-full p-6">
            <div className="flex justify-end">
              <button className="text-zinc-400 hover:text-white" onClick={closeSuccessModal}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Verification submitted</h3>
              <p className="text-zinc-400 mb-6">
                We have received your channel verification request. Our team will verify the code in your channel
                description within 24 hours.
              </p>
              <div className="bg-zinc-800 p-4 rounded-md mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-zinc-400">Your verification code:</span>
                  <button
                    onClick={copyVerificationCode}
                    className="text-zinc-400 hover:text-white"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="font-mono text-lg text-center p-2 bg-zinc-700 rounded-md">{verificationCode}</div>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-8 rounded-md"
                onClick={closeSuccessModal}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
