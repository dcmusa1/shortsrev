"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { ReactNode, MouseEvent } from "react"

interface FastLinkProps {
  href: string
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export function FastLink({ href, children, className, variant = "default", size = "default", onClick }: FastLinkProps) {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (onClick) onClick(e)

    // Handle anchor links differently
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      return
    }

    // Handle external links
    if (href.startsWith("http")) {
      window.open(href, "_blank")
      return
    }

    router.push(href)
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleClick}>
      {children}
    </Button>
  )
}
