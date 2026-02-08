import { t } from "elysia";

export const exampleParamsSchema = t.Object({
  id: t.String({ format: "uuid", minLength: 36, maxLength: 36 }),
});

export const exampleCreateSchema = t.Object({
  message: t.String({ minLength: 3, maxLength: 255 }),
});

export const exampleUpdateSchema = t.Partial(exampleCreateSchema);

export const exampleResponseSchema = t.Object({
  id: t.String({ format: "uuid", minLength: 36, maxLength: 36 }),
  message: t.String({ minLength: 3, maxLength: 255 }),
});
