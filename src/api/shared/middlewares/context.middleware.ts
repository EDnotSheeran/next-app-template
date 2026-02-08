import type { Elysia } from "elysia";

/**
 * Request context middleware
 * Attaches request-scoped metadata to the context.
 */
export function contextMiddleware(app: Elysia<"/api">) {
  return app.derive(() => {
    return {
      requestId: crypto.randomUUID(),
      requestAt: new Date(),
    };
  });
}
