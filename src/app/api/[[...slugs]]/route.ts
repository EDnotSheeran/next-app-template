import openapi from "@elysiajs/openapi";
import { Elysia, t } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .use(openapi())
  .get("/", "Hello Nextjs")
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.fetch;
export const POST = app.fetch;
