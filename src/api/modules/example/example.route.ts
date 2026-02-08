import { Elysia, t } from "elysia";
import { notFoundResponseSchema } from "@/api/shared/schemas/not-found.schema";
import { validationErrorSchema } from "@/api/shared/schemas/validation-error.schema";
import {
  exampleCreateSchema,
  exampleParamsSchema,
  exampleResponseSchema,
  exampleUpdateSchema,
} from "./example.schema";
import { exampleService } from "./example.service";

/**
 * Example routes
 * This file demonstrates how to define a protected route with:
 * - params validation
 * - typed response
 * - auth requirement
 * - OpenAPI metadata
 * - i18n support
 */

const hidddenRoute = false;

export const exampleRoutes = new Elysia({ prefix: "/example" })

  // GET
  .get("/:id", ({ params, t }) => exampleService.getById(params.id, t), {
    auth: true,
    params: exampleParamsSchema,
    response: {
      200: exampleResponseSchema,
      400: validationErrorSchema,
      404: notFoundResponseSchema,
    },
    detail: {
      hide: hidddenRoute,
      summary: "Get example by ID",
      description: "Returns the example with the specified ID",
    },
    tags: ["Example"],
  })

  // POST
  .post("/", ({ body, t }) => exampleService.create(body, t), {
    auth: true,
    body: exampleCreateSchema,
    response: {
      200: exampleResponseSchema,
      400: validationErrorSchema,
      404: notFoundResponseSchema,
    },
    detail: {
      hide: hidddenRoute,
      summary: "Create example",
      description: "Creates a new example with the provided data",
    },
    tags: ["Example"],
  })

  // PUT
  .put(
    "/:id",
    ({ params, body, t }) => exampleService.update(params.id, body, t),
    {
      auth: true,
      params: exampleParamsSchema,
      body: exampleCreateSchema,
      response: {
        200: exampleResponseSchema,
        400: validationErrorSchema,
        404: notFoundResponseSchema,
      },
      detail: {
        hide: hidddenRoute,
        summary: "Replace example",
        description:
          "Replaces the example with the specified ID using the provided data",
      },
      tags: ["Example"],
    },
  )

  // PATCH
  .patch(
    "/:id",
    ({ params, body, t }) => exampleService.update(params.id, body, t),
    {
      auth: true,
      params: exampleParamsSchema,
      body: exampleUpdateSchema,
      response: {
        200: exampleResponseSchema,
        400: validationErrorSchema,
        404: notFoundResponseSchema,
      },
      detail: {
        hide: hidddenRoute,
        summary: "Update example",
        description:
          "Updates the example with the specified ID using the provided data",
      },
      tags: ["Example"],
    },
  )

  // DELETE
  .delete(
    "/:id",
    ({ params, t }) => {
      exampleService.delete(params.id, t);
      return { success: true };
    },
    {
      auth: true,
      params: exampleParamsSchema,
      response: {
        200: t.Object({ success: t.Boolean() }),
        400: validationErrorSchema,
        404: notFoundResponseSchema,
      },
      detail: {
        hide: hidddenRoute,
        summary: "Delete example",
        description: "Deletes the example with the specified ID",
      },
      tags: ["Example"],
    },
  );
