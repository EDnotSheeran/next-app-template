import type { Elysia } from "elysia";
import { exampleRoutes } from "@/api/routes/example.route";

export async function registerRoutes(app: Elysia<"/api">) {
  app.use(exampleRoutes);
  return app;
}
