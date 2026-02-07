import { openapi } from "@elysiajs/openapi";
import { OpenAPI } from "@/api/shared/plugins/better-auth.plugin";

export async function openApiPlugin() {
  return openapi({
    documentation: {
      components: await OpenAPI.components,
      paths: await OpenAPI.getPaths(),
    },
  });
}
