/**
 * Example service
 * This file contains business logic and can be reused by other modules.
 */

import { NotFoundError } from "elysia/error";
import type { i18n } from "i18next";

type Example = {
  id: string;
  message: string;
};

const store = new Map<string, Example>();

export const exampleService = {
  // Reset internal store before each test
  // (only needed because this is an in-memory example)
  __reset() {
    store.clear();
  },

  getById(id: string, t: i18n["t"]) {
    const example = store.get(id);

    if (!example) {
      // Throw localized error if i18n context provided
      throw new NotFoundError(t("example.notFound", { id }));
    }

    return example;
  },

  create(data: { message: string }) {
    const id = crypto.randomUUID();

    const example = { id, message: data.message };
    store.set(id, example);

    return example;
  },

  update(id: string, data: Partial<{ message: string }>, t: i18n["t"]) {
    const existing = this.getById(id, t);

    const updated = { ...existing, ...data };
    store.set(id, updated);

    return updated;
  },

  delete(id: string, t: i18n["t"]) {
    this.getById(id, t);
    store.delete(id);
  },
};
