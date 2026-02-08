import type { Elysia } from "elysia";
// import { contextMiddleware } from "./context.middleware";
import { errorMiddleware } from "./error.middleware";

export function registerMiddlewares(app: Elysia<"/api">) {
  // contextMiddleware(app);
  errorMiddleware(app);
}
