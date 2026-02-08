import { openapi } from "@elysiajs/openapi";
import { OpenAPI } from "@/api/shared/plugins/better-auth.plugin";

export async function openApiPlugin() {
  return openapi({
    documentation: {
      components: await OpenAPI.components,
      paths: await OpenAPI.getPaths(),
      info: {
        version: "1.0.0",
        title: "Next App Template API",
        description: "API documentation for Next App Template",
      },
    },
  });
}
