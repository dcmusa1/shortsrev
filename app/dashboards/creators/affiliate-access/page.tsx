"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, CheckCircle, MessageSquare } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { FastLink } from "@/components/fast-link"

export default function AffiliateAccessRequest() {
  const [submitted, setSubmitted] = useState(false)
  const [reason, setReason] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the request to your backend
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  return (
    <DashboardLayout portalType="creators">
      <div className="max-w-2xl mx-auto">
        <FastLink
          href="/dashboards/creators/dashboard"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </FastLink>

        {submitted ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Request Submitted</h1>
            <p className="text-zinc-400 mb-6">
              Thank you for your interest in the Shorts Rev Affiliate Program. We've received your request and will
              review it shortly. You'll be notified once a decision has been made.
            </p>
            <FastLink
              href="/dashboards/creators/dashboard"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md inline-block"
            >
              Return to Dashboard
            </FastLink>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-zinc-800">
              <h1 className="text-2xl font-bold">Affiliate Program Access</h1>
            </div>

            <div className="p-6">
              <div className="bg-zinc-800/50 rounded-lg p-4 mb-6">
                <p className="text-zinc-300">
                  The Shorts Rev Affiliate Program allows you to earn a percentage of royalties by referring other
                  creators to our platform. Access to this program is by invitation or approval only.
                </p>
              </div>

              <h2 className="text-lg font-medium mb-4">Request Access</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-zinc-400 mb-1">
                    Why do you want to join the affiliate program?
                  </label>
                  <textarea
                    id="reason"
                    rows={4}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="Tell us why you'd be a good fit for our affiliate program..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-zinc-600 text-red-500 focus:ring-red-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-zinc-400">
                    I agree to the{" "}
                    <FastLink href="/terms" className="text-red-400 hover:underline">
                      Shorts Rev Terms
                    </FastLink>{" "}
                    and understand that affiliate access is granted at Shorts Rev's discretion.
                  </label>
                </div>

                <div className="pt-4">
                  <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                    Submit Request
                  </button>
                </div>
              </form>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Need help?</h3>
                <a
                  href="https://discord.gg/shortsrev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Contact us on Discord
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
