"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Settings,
  User,
  X,
  Youtube,
  Play,
  DollarSign,
  Info,
  BarChart3,
  Video,
  Music,
  Users,
  BookOpen,
  Award,
  MonitorPlay,
} from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
  portalType: "creators" | "artists-labels"
}

export function DashboardLayout({ children, portalType }: DashboardLayoutProps) {
  const isCreator = portalType === "creators"
  const portalName = isCreator ? "Creators Portal" : "Artists & Labels Portal"
  const basePath = isCreator ? "/dashboards/creators" : "/dashboards/artists-labels"

  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "channel_approved",
      title: "Channel Approved",
      message: 'Your channel "Gaming Shorts" has been approved!',
      read: false,
      date: "2 hours ago",
    },
    {
      id: 2,
      type: "track_recommendation",
      title: "New track recommendation",
      message: "We found a new track that matches your style",
      read: false,
      date: "3 hours ago",
    },
    {
      id: 3,
      type: "shorts_rejected",
      title: "Short Rejected",
      message: 'Your short "Summer Dance Challenge" was rejected.',
      feedback:
        "Content violates our music licensing guidelines. Please ensure all music used is properly licensed through our platform.",
      read: false,
      date: "Yesterday",
    },
    {
      id: 4,
      type: "channel_rejected",
      title: "Channel Rejected",
      message: 'Your channel "TechTips Daily" was rejected.',
      feedback:
        "Channel does not meet our content guidelines. Please ensure your channel has at least 5 published shorts and follows our community standards.",
      read: false,
      date: "2 days ago",
    },
    {
      id: 5,
      type: "payment",
      title: "Payment processed",
      message: "Your monthly earnings have been processed",
      read: true,
      date: "3 days ago",
    },
    {
      id: 6,
      type: "shorts_approved",
      title: "Short Approved",
      message: 'Your short "iPhone hidden features" has been approved!',
      read: true,
      date: "4 days ago",
    },
  ])

  const [notificationCount, setNotificationCount] = useState(notifications.filter((n) => !n.read).length)

  const [showFullNotifications, setShowFullNotifications] = useState(false)

  // Toggle notifications panel
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    if (showProfileMenu) setShowProfileMenu(false)
  }

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu)
    if (showNotifications) setShowNotifications(false)
  }

  const markAsRead = (id: number) => {
    const updatedNotifications = notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    setNotifications(updatedNotifications)
    setNotificationCount(updatedNotifications.filter((n) => !n.read).length)
  }

  // Add usePathname hook to track current path
  const pathname = usePathname()

  const creatorNavigation = [
    { name: "Dashboard", href: "/dashboards/creators/dashboard", icon: BarChart3 },
    { name: "Music Library", href: "/dashboards/creators/music", icon: Music },
    { name: "Content Manager", href: "/dashboards/creators/content", icon: Video },
    { name: "Channels", href: "/dashboards/creators/channels", icon: MonitorPlay },
    { name: "BrandBoost", href: "/dashboards/creators/brand-campaigns", icon: Award },
    { name: "Earnings", href: "/dashboards/creators/earnings", icon: DollarSign },
    { name: "Creator Guide", href: "/dashboards/creators/guide", icon: BookOpen },
    { name: "Affiliate Program", href: "/dashboards/creators/affiliate", icon: Users },
  ]

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-zinc-900 border-r border-zinc-800">
        <div className="p-4 border-b border-zinc-800">
          <Link href="/">
            <Image
              src="/color-wordmark-transparent.png"
              alt="Shorts Rev"
              width={180}
              height={54}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="p-4 border-b border-zinc-800">
          <h2 className="font-semibold text-red-400">{portalName}</h2>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {/* Dashboard link with icon */}
          {(() => {
            return (
              <>
                <Link
                  href={`${basePath}/dashboard`}
                  className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                    pathname === `${basePath}/dashboard` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
                {isCreator ? (
                  <>
                    <Link
                      href={`${basePath}/content`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/content` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Content
                    </Link>
                    <Link
                      href={`${basePath}/channels`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/channels` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Channels
                    </Link>
                    <Link
                      href={`${basePath}/music`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/music` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <Music className="h-4 w-4 mr-2" />
                      Music Library
                    </Link>
                    <Link
                      href={`${basePath}/earnings`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/earnings` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <DollarSign className="h-4 w-4 mr-2" />
                      Earnings
                    </Link>
                    <Link
                      href={`${basePath}/affiliate`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/affiliate`
                          ? "bg-red-500 text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Affiliate Program
                    </Link>
                    <Link
                      href={`${basePath}/brand-campaigns`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/brand-campaigns`
                          ? "bg-red-500 text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <Award className="h-4 w-4 mr-2" />
                      BrandBoost
                    </Link>
                    <Link
                      href={`${basePath}/clipsrev`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/clipsrev` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      ClipsRev
                    </Link>
                    <Link
                      href={`${basePath}/guide`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/guide` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      User Guide
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href={`${basePath}/tracks`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/tracks` ? "bg-red-500 text-white" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <Music className="h-4 w-4 mr-2" />
                      My Tracks
                    </Link>
                    <Link
                      href={`${basePath}/campaigns`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/campaigns`
                          ? "bg-red-500 text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Campaigns
                    </Link>
                    <Link
                      href={`${basePath}/royalties`}
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 ${
                        pathname === `${basePath}/royalties`
                          ? "bg-red-500 text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <DollarSign className="h-4 w-4 mr-2" />
                      Royalties
                    </Link>
                  </>
                )}
              </>
            )
          })()}
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <Link
            href="/dashboards"
            className="flex items-center px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-300 hover:text-white"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-zinc-900 border-b border-zinc-800 h-16 flex items-center px-4 justify-between">
          <div className="flex items-center md:hidden">
            <button className="p-2 rounded-md hover:bg-zinc-800">
              <Menu className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-md hover:bg-zinc-800 relative" onClick={toggleNotifications}>
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg z-10">
                  <div className="p-3 border-b border-zinc-800">
                    <h3 className="font-medium">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 border-b border-zinc-800 hover:bg-zinc-800 ${notification.read ? "opacity-70" : ""}`}
                        onClick={() => {
                          markAsRead(notification.id)
                          setShowNotifications(false)
                          setShowFullNotifications(true)
                        }}
                      >
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-xs text-zinc-400 mt-1">{notification.message}</p>
                        {notification.type.includes("rejected") && (
                          <div className="flex items-center mt-1 text-xs text-red-400">
                            <Info className="h-3 w-3 mr-1" />
                            <span>Click to view feedback</span>
                          </div>
                        )}
                        <p className="text-xs text-zinc-500 mt-1">{notification.date}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-zinc-800">
                    <button
                      className="w-full text-center text-xs text-zinc-400 hover:text-white p-1"
                      onClick={() => {
                        setShowNotifications(false)
                        setShowFullNotifications(true)
                      }}
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-zinc-800"
                onClick={toggleProfileMenu}
              >
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="hidden md:inline-block text-sm">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <Link
                      href={`${basePath}/settings`}
                      className="flex items-center px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                    <Link
                      href="/dashboards"
                      className="flex items-center px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-zinc-950 p-6">{children}</main>
      </div>
      {showFullNotifications && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold">All Notifications</h3>
              <button className="text-zinc-400 hover:text-white" onClick={() => setShowFullNotifications(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-zinc-400">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bell className="h-6 w-6 text-zinc-500" />
                  </div>
                  <p>No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-zinc-800 hover:bg-zinc-800/50 ${notification.read ? "opacity-70" : ""}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          notification.type.includes("approved")
                            ? "bg-green-500/20 text-green-400"
                            : notification.type.includes("rejected")
                              ? "bg-red-500/20 text-red-400"
                              : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {notification.type.includes("channel") ? (
                          <Youtube className="h-5 w-5" />
                        ) : notification.type.includes("shorts") ? (
                          <Play className="h-5 w-5" />
                        ) : notification.type.includes("payment") ? (
                          <DollarSign className="h-5 w-5" />
                        ) : (
                          <Bell className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-zinc-400 mt-1">{notification.message}</p>
                        {notification.feedback && (
                          <div className="mt-2 p-2 bg-zinc-800 rounded text-sm">
                            <p className="font-medium text-red-400 mb-1">Feedback:</p>
                            <p className="text-zinc-300">{notification.feedback}</p>
                          </div>
                        )}
                        <p className="text-xs text-zinc-500 mt-1">{notification.date}</p>
                      </div>
                      {!notification.read && <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-zinc-800 flex justify-between">
              <button
                className="text-sm text-zinc-400 hover:text-white"
                onClick={() => {
                  const updatedNotifications = notifications.map((n) => ({ ...n, read: true }))
                  setNotifications(updatedNotifications)
                  setNotificationCount(0)
                }}
              >
                Mark all as read
              </button>
              <button
                className="text-sm text-zinc-400 hover:text-white"
                onClick={() => setShowFullNotifications(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
