import type { Elysia } from "elysia";
import { betterAuthPlugin } from "@/api/plugins/better-auth.plugin";
import { corsPlugin } from "@/api/plugins/cors.plugin";
import { openApiPlugin } from "@/api/plugins/openapi.plugin";

export async function registerPlugins(app: Elysia<"/api">) {
  app.use(corsPlugin);
  app.use(betterAuthPlugin);
  app.use(await openApiPlugin());

  return app;
}
