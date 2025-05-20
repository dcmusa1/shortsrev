"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm py-2">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="transition-transform duration-300 hover:scale-105 mr-6">
            <Image
              src="/color-wordmark-transparent.png"
              alt="Shorts Rev Logo"
              width={240}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 mx-auto" suppressHydrationWarning>
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-red-400" : "text-zinc-300"} hover:text-white transition-colors`}
            suppressHydrationWarning
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Services
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-zinc-950 border border-zinc-800">
              <DropdownMenuLabel className="text-red-400">Our Services</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="focus:bg-red-900/40 focus:text-white">
                <Link href="/for-creators">For Creators</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-red-900/40 focus:text-white">
                <Link href="/for-artists-labels">For Artists & Labels</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-red-900/40 focus:text-white">
                <Link href="/for-brands">For Brands</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Programs
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-zinc-950 border border-zinc-800">
              <DropdownMenuLabel className="text-red-400">Our Programs</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="focus:bg-red-900/40 focus:text-white">
                <Link href="/clipsrev">ClipsRev</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-red-900/40 focus:text-white">
                <Link href="/brandboost">BrandBoost</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/dashboards"
            className={`text-sm font-medium ${pathname.includes("/dashboards") ? "text-red-400" : "text-zinc-300"} hover:text-white transition-colors`}
            suppressHydrationWarning
          >
            Dashboards
          </Link>
          <Link
            href="/faq"
            className={`text-sm font-medium ${pathname.includes("/faq") ? "text-red-400" : "text-zinc-300"} hover:text-white transition-colors`}
            suppressHydrationWarning
          >
            FAQ
          </Link>
        </nav>
        <Button className="bg-red-500 hover:bg-red-600 transition-all duration-300 transform hover:scale-105" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </header>
  )
}
