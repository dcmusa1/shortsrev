"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react"

export default function ArtistsLabelsSignIn() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      // In a real app, you would validate credentials against your database
      // For demo purposes, we'll accept any login
      console.log("Sign in attempt with:", { email, password })

      // Set a cookie to simulate authentication
      document.cookie = "auth_token=demo_token; path=/; max-age=3600"

      // Redirect to dashboard
      router.push("/dashboards/artists-labels/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="container max-w-md mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/color-wordmark-transparent.png"
              alt="Shorts Rev Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <h1 className="text-2xl font-bold mb-2">Sign in to Artists & Labels Portal</h1>
          <p className="text-zinc-400">Access your music catalog and analytics</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-500/50">
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/dashboards/artists-labels/reset-password"
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-zinc-400">
              Don&apos;t have an account?{" "}
              <Link href="/dashboards/artists-labels/signup" className="text-red-400 hover:text-red-300">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/dashboards"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to dashboards
          </Link>
        </div>
      </div>
    </div>
  )
}
