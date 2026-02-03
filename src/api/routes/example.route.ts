import { Elysia, t } from "elysia";

export const exampleRoutes = new Elysia().get(
  "/example/:id",
  async ({ params }) => {
    return { message: "This is an example route", id: params.id };
  },
  {
    auth: true,
    params: t.Object({
      id: t.String(),
    }),
    response: {
      200: t.Object({
        id: t.String(),
        message: t.String(),
      }),
    },
    detail: {
      summary: "Get Example by ID",
      description: "Retrieve example information using their param ID.",
    },
    tags: ["Example"],
  },
);
