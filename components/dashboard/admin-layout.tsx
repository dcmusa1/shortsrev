"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Users,
  Video,
  UserPlus,
  Ticket,
  ClipboardList,
  LogOut,
  Menu,
  X,
  Home,
  Search,
  Upload,
  DollarSign,
  Award,
  Eye,
} from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboards/admin", icon: BarChart3 },
    { name: "Channel Reviews", href: "/dashboards/admin/channels", icon: Video },
    { name: "User Search", href: "/dashboards/admin/user-search", icon: Search },
    { name: "Data Import", href: "/dashboards/admin/data-import", icon: Upload },
    { name: "Affiliate Management", href: "/dashboards/admin/affiliates", icon: UserPlus },
    { name: "Invite Codes", href: "/dashboards/admin/invite-codes", icon: Ticket },
    { name: "Signups & Analytics", href: "/dashboards/admin/signups", icon: Users },
    { name: "Form Submissions", href: "/dashboards/admin/submissions", icon: ClipboardList },
    { name: "Manage Payouts", href: "/dashboards/admin/manage-payouts", icon: DollarSign },
    { name: "BrandBoost", href: "/dashboards/admin/brand-campaigns", icon: Award },
    { name: "ClipsRev", href: "/dashboards/admin/clipsrev", icon: Video },
    { name: "Shorts Review", href: "/dashboards/admin/shorts-review", icon: Eye },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800">
        <Link href="/dashboards/admin" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="font-bold text-white">SR</span>
          </div>
          <span className="font-bold text-lg">Admin</span>
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md hover:bg-zinc-800">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/80" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
            <div className="flex items-center justify-between p-4">
              <Link href="/dashboards/admin" className="flex items-center gap-2">
                <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">SR</span>
                </div>
                <span className="font-bold text-lg">Admin</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-md hover:bg-zinc-800">
                <X size={20} />
              </button>
            </div>
            <nav className="mt-4 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-red-500 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
            <div className="absolute bottom-0 w-full p-4 border-t border-zinc-800">
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <Home className="h-5 w-5" />
                Back to Site
              </Link>
              <button className="w-full mt-2 flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
          <div className="flex items-center gap-2 h-16 px-4 border-b border-zinc-800">
            <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="font-bold text-white">SR</span>
            </div>
            <span className="font-bold text-lg">Admin Panel</span>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-red-500 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="p-4 border-t border-zinc-800">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              <Home className="h-5 w-5" />
              Back to Site
            </Link>
            <button className="w-full mt-2 flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="py-6 px-4 sm:px-6 lg:px-8 pt-16 lg:pt-6">{children}</main>
      </div>
    </div>
  )
}
