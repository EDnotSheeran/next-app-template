import { Elysia } from "elysia";

import { registerPlugins } from "@/api/plugins";
import { registerRoutes } from "@/api/routes";

const app = new Elysia({ prefix: "/api" });

await registerPlugins(app);
await registerRoutes(app);

app.get("/", () => ({ status: "ok" }));

export { app };

export type Api = typeof app;
