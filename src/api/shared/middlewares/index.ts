import type { Elysia } from "elysia";

export function registerMiddlewares(app: Elysia<"/api">) {
  return app;
}
