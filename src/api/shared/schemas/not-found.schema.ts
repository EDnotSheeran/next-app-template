import { t } from "elysia";

/**
 * Base API error response schema
 */
export const notFoundResponseSchema = t.Object({
  name: t.Const("Error"),
  message: t.String(),
});
