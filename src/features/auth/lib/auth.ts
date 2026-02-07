import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { openAPI } from "better-auth/plugins";
import { db } from "@/api/database/client";

export const auth = betterAuth({
  basePath: "/auth",
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    cookieCache: {
      enabled: true,
      maxAge: 1000 * 60 * 5, // 5 minutes
    },
  },
  cookies: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
  plugins: [openAPI(), nextCookies()], // make sure "nextCookies" is the last plugin in the array
});
