import { drizzle } from "drizzle-orm/node-postgres";
import { schema } from "@/api/database/schemas";

export const db = drizzle(
  process.env.DATABASE_URL ||
    "postgresql://pgadmin:password@localhost:5432/docker",
  {
    schema,
    casing: "snake_case",
  },
);
