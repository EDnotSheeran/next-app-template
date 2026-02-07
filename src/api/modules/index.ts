import type { Elysia } from "elysia";
import { exampleRoutes } from "@/api/modules/example/example.route";

export function registerModules(app: Elysia<"/api">) {
  app.use(exampleRoutes);

  return app;
}
