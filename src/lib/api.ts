import { treaty } from "@elysiajs/eden";
import type { Api } from "@/api/app";

export const api = treaty<Api>("/api");
