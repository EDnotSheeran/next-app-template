import { t } from "elysia";

/**
 * Detailed validation error schema
 * Represents a normalized TypeBox / Elysia validation error
 */
export const validationErrorSchema = t.Object({
  type: t.Literal("validation"),

  on: t.Union([
    t.Literal("body"),
    t.Literal("params"),
    t.Literal("query"),
    t.Literal("headers"),
  ]),

  property: t.String({
    description: "Path of the invalid property",
    examples: ["/id"],
  }),

  message: t.String(),
  summary: t.String(),

  expected: t.Object({
    type: t.String(),
    message: t.String(),
    error: t.Object({
      schema: t.Object({
        type: t.String(),
        format: t.Optional(t.String()),
        minLength: t.Optional(t.Number()),
        maxLength: t.Optional(t.Number()),
      }),
    }),
  }),

  found: t.Record(t.String(), t.Any()),

  errors: t.Array(
    t.Object({
      summary: t.Optional(t.String()),
      type: t.Number(),
      schema: t.Object({
        type: t.String(),
        format: t.Optional(t.String()),
        minLength: t.Optional(t.Number()),
        maxLength: t.Optional(t.Number()),
      }),
      path: t.String(),
      value: t.Any(),
      message: t.String(),
      errors: t.Array(t.Any()),
    }),
  ),
});
