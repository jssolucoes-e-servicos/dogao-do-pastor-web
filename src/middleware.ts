import api from "@/services/api";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("acl0")?.value;
  const userCookie = request.cookies.get("acl1")?.value;
  if (request.nextUrl.pathname.startsWith("/acesso")) {
    if (token && userCookie) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return NextResponse.redirect(new URL("/app", request.url));
    }
    return null;
  }
  if (request.nextUrl.pathname.startsWith("/app")) {
    if (!token || !userCookie) {
      return NextResponse.redirect(new URL("/acesso", request.url));
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
  return null;
}

export const config = {
  matcher: ["/acesso", "/app/:path*"],
};
