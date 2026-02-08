import { NotFoundError } from "elysia";
import { beforeEach, describe, expect, it } from "vitest";
import { exampleService } from "./example.service";

describe("Example Service", () => {
  beforeEach(() => {
    // Reset internal store before each test
    // (only needed because this is an in-memory example)
    exampleService.__reset();
  });

  it("should create an example", () => {
    const example = exampleService.create({
      message: "Hello world",
    });

    expect(example.id).toBeDefined();
    expect(example.message).toBe("Hello world");
  });

  it("should get an example by id", () => {
    const created = exampleService.create({
      message: "Test message",
    });

    const fetched = exampleService.getById(created.id);

    expect(fetched).toEqual(created);
  });

  it("should update an example", () => {
    const created = exampleService.create({
      message: "Old message",
    });

    const updated = exampleService.update(created.id, {
      message: "New message",
    });

    expect(updated.message).toBe("New message");
  });

  it("should delete an example", () => {
    const created = exampleService.create({
      message: "Delete me",
    });

    exampleService.delete(created.id);

    expect(() => exampleService.getById(created.id)).toThrow(NotFoundError);
  });

  it("should throw when example does not exist", () => {
    expect(() => exampleService.getById("invalid-id")).toThrow(NotFoundError);
  });
});
