"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
  email: string
  name: string
  role: "creator" | "artist" | "admin"
  isAffiliate: boolean
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
  isAffiliate: boolean
  setIsAffiliate: (value: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAffiliate, setIsAffiliate] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check if user is logged in on mount
  useEffect(() => {
    // Automatically set user as logged in for demo purposes
    setUser({
      email: "demo@example.com",
      name: "Demo User",
      role: pathname?.includes("artists-labels") ? "artist" : "creator",
      isAffiliate: true, // Always set isAffiliate to true to ensure affiliate panel works
    })
    setIsAffiliate(true) // Ensure affiliate access is enabled
    setIsLoading(false)
  }, [pathname])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, you would validate credentials with your backend
      // For demo purposes, we'll just set a cookie and user
      document.cookie = "auth_token=demo_token; path=/; max-age=3600"

      setUser({
        email,
        name: "Demo User",
        role: pathname?.includes("artists-labels") ? "artist" : "creator",
        isAffiliate: false,
      })

      // Redirect based on user type
      if (pathname?.includes("artists-labels")) {
        router.push("/dashboards/artists-labels/dashboard")
      } else {
        router.push("/dashboards/creators/dashboard")
      }
    } catch (error) {
      console.error("Login failed", error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Clear the auth cookie
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    // Clear user state
    setUser(null)
    // Redirect to home
    router.push("/dashboards")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, isAffiliate, setIsAffiliate }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
