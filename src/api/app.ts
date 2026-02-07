import { Elysia } from "elysia";

import { registerModules } from "@/api/modules";
import { registerMiddlewares } from "@/api/shared/middlewares";
import { registerPlugins } from "@/api/shared/plugins";

export async function createApiApp() {
  const app = new Elysia({ prefix: "/api" });

  // plugins
  await registerPlugins(app);

  // middlewares
  registerMiddlewares(app);

  // routes
  registerModules(app);

  return app;
}

export type Api = Awaited<ReturnType<typeof createApiApp>>;
