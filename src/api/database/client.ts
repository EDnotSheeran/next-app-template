import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@/api/config/env";
import { schema } from "@/api/database/schemas";

export const db = drizzle(env.DATABASE_URL, {
  schema,
  casing: "snake_case",
});
