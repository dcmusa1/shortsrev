import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Allow all access to dashboard pages without authentication
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboards/creators/:path*", "/dashboards/artists-labels/:path*"],
}
