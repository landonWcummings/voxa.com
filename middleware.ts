import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Enhanced error logging for auth-related requests
  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    console.log("[Auth Request]", {
      timestamp: new Date().toISOString(),
      url: request.url,
      method: request.method,
      pathname: request.nextUrl.pathname,
      origin: request.nextUrl.origin,
      host: request.headers.get("host"),
      referer: request.headers.get("referer"),
      userAgent: request.headers.get("user-agent"),
      cookies: request.cookies.getAll(),
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/api/auth/:path*",
    "/dashboard/:path*", // Also protect dashboard routes
  ],
}

