import { NextRequest, NextResponse } from "next/server";
import api from "@/services/api";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("acl0")?.value;
  const userCookie = request.cookies.get("acl1")?.value;
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (token && userCookie) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return null;
  }
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token || !userCookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
  return null;
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get("acl0")?.value;
//   const userCookie = request.cookies.get("acl1")?.value;
//   if (request.nextUrl.pathname.startsWith("/login")) {
//     if (token && userCookie) {
//       return NextResponse.redirect(new URL("/app", request.url));
//     }
//     return null;
//   }
//   if (request.nextUrl.pathname.startsWith("/app")) {
//     if (!token || !userCookie) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//     if(request.nextUrl.pathname.startsWith("/app/dashboard")) {
//       const user = JSON.parse(userCookie);
//       if (user?.rule !== "admin") {
//         return NextResponse.redirect(new URL("/app", request.url));
//       }
//     }
//   }
//   return null;
// }

// export const config = {
//   matcher: ["/login", "/app/:path*"],
// };