import { createApiApp } from "@/api/app";

const app = await createApiApp();

export const GET = app.fetch;
export const POST = app.fetch;
