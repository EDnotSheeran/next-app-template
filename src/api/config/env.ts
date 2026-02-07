import { z } from "zod";

/**
 * Environment variables schema
 * This file centralizes and validates all API environment variables.
 */

const envSchema = z.object({
  DATABASE_URL: z.url(),
  BETTER_AUTH_URL: z.url(),
  BETTER_AUTH_SECRET: z.string().min(32),
});

export const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;
