import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/features/auth/lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!auth/)(?!api/)(?!_next/)(?!_vercel/)(?!favicon.ico)(?!robots.txt)(?!sitemap.xml)(?!$)(?!.*\\..*).*)",
  ],
};
