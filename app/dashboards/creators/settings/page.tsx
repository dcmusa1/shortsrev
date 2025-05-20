"use client"

import { useState } from "react"
import { Bell, Lock, Save, User } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function CreatorsSettings() {
  const [activeTab, setActiveTab] = useState<string>("profile")

  // Save settings
  const saveSettings = () => {
    alert("Settings saved successfully!")
  }

  return (
    <DashboardLayout portalType="creators">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <div className="w-full md:w-64 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-zinc-800">
              <h2 className="font-medium">Settings</h2>
            </div>
            <div className="p-2">
              <button
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left text-sm ${activeTab === "profile" ? "bg-red-500 text-white" : "hover:bg-zinc-800 text-zinc-300"}`}
                onClick={() => setActiveTab("profile")}
              >
                <User className="h-4 w-4" />
                Profile
              </button>
              <button
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left text-sm ${activeTab === "account" ? "bg-red-500 text-white" : "hover:bg-zinc-800 text-zinc-300"}`}
                onClick={() => setActiveTab("account")}
              >
                <Lock className="h-4 w-4" />
                Account Security
              </button>
              <button
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left text-sm ${activeTab === "notifications" ? "bg-red-500 text-white" : "hover:bg-zinc-800 text-zinc-300"}`}
                onClick={() => setActiveTab("notifications")}
              >
                <Bell className="h-4 w-4" />
                Notifications
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            {activeTab === "profile" && (
              <div>
                <div className="p-4 border-b border-zinc-800">
                  <h2 className="font-medium">Profile Information</h2>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Display Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Discord Username</label>
                      <input
                        type="text"
                        defaultValue="johndoe#1234"
                        placeholder="username#0000"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                      onClick={saveSettings}
                    >
                      <Save className="h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "account" && (
              <div>
                <div className="p-4 border-b border-zinc-800">
                  <h2 className="font-medium">Account Security</h2>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Current Password</label>
                        <input
                          type="password"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">New Password</label>
                        <input
                          type="password"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-md">
                      <div>
                        <p className="font-medium">Protect your account with 2FA</p>
                        <p className="text-sm text-zinc-400 mt-1">
                          Add an extra layer of security to your account by enabling two-factor authentication.
                        </p>
                      </div>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                        onClick={() => alert("2FA setup initiated")}
                      >
                        Enable
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                      onClick={saveSettings}
                    >
                      <Save className="h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <div className="p-4 border-b border-zinc-800">
                  <h2 className="font-medium">Notification Settings</h2>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm">New track recommendations</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Earnings reports</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Promotional opportunities</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Platform updates</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Content performance alerts</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">New messages</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Payment notifications</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                      onClick={saveSettings}
                    >
                      <Save className="h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
