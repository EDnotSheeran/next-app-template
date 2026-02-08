import type { Elysia } from "elysia";

/**
 * Global error handler
 * Converts domain errors into HTTP responses.
 */
export function errorMiddleware(app: Elysia<"/api">) {
  return app.onError(({ error }) => {
    return error;
  });
}
