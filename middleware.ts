import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const maintainMode = process.env.MAINTAINMODE === "true";
  const url = req.nextUrl.clone();

  const excludePaths = ["/maintain", "/api/auth"];
  if (
    maintainMode &&
    !excludePaths.some((path) => url.pathname.startsWith(path))
  ) {
    url.pathname = "/maintain";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
