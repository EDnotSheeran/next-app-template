/**
 * Example service
 * This file contains business logic and can be reused by other modules.
 */

import { NotFoundError } from "elysia";

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

  getById(id: string) {
    const example = store.get(id);

    if (!example) {
      throw new NotFoundError(`Example with id '${id}' not found`);
    }

    return example;
  },

  create(data: { message: string }) {
    const id = crypto.randomUUID();

    const example = { id, message: data.message };
    store.set(id, example);

    return example;
  },

  update(id: string, data: Partial<{ message: string }>) {
    const existing = this.getById(id);

    const updated = { ...existing, ...data };
    store.set(id, updated);

    return updated;
  },

  delete(id: string) {
    this.getById(id);
    store.delete(id);
  },
};
