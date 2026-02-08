import type { Elysia } from "elysia";
import { betterAuthPlugin } from "@/api/shared/plugins/better-auth.plugin";
import { corsPlugin } from "@/api/shared/plugins/cors.plugin";
import { openApiPlugin } from "@/api/shared/plugins/openapi.plugin";
import { i18nPlugin } from "./i18n.plugin";

export async function registerPlugins(app: Elysia<"/api">) {
  app.use(i18nPlugin());
  app.use(corsPlugin);
  app.use(betterAuthPlugin);
  app.use(await openApiPlugin());

  return app;
}
