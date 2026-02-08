import type { Elysia } from "elysia";
import { NotFoundError, ValidationError } from "elysia/error";
import type { i18n } from "i18next";
import { UnauthorizedError } from "../errors/unauthorized.error";

/**
 * Global error handler
 * Converts domain errors into HTTP responses.
 */
export function errorMiddleware(app: Elysia<"/api">) {
  return app.onError(({ error, t }) => {
    if (error instanceof NotFoundError) {
      return {
        status: error.status,
        body: {
          error: "Not Found",
          message: t(error.message),
        },
      };
    }

    if (error instanceof ValidationError) {
      return {
        status: error.status,
        body: {
          error: "Validation Error",
          validations: translateValidationErrors(error.all, t),
        },
      };
    }

    if (error instanceof UnauthorizedError) {
      return {
        status: error.status,
        body: {
          error: "Unauthorized",
          message: t("error.unauthorized"),
        },
      };
    }

    return error;
  });
}

export function translateValidationErrors(
  errors: ValidationError["all"],
  t: i18n["t"],
): ValidationError["all"] {
  return errors.map((error) => ({
    ...error,
    message: translateMessage(error.message, error, t),
  }));
}

function translateMessage(
  message: string,
  error: ValidationError["all"][number],
  t: i18n["t"],
): string {
  // minLength
  if (message.includes("less or equal")) {
    return t("validation.maxLength", {
      field: error.path.replace("/", ""),
      max: error.schema.maxLength,
    });
  }

  // minLength
  if (message.includes("greater or equal")) {
    return t("validation.minLength", {
      field: error.path.replace("/", ""),
      min: error.schema.minLength,
    });
  }

  // uuid
  if (message.includes("uuid")) {
    return t("validation.uuid", {
      field: error.path.replace("/", ""),
    });
  }

  // fallback (original message)
  return message;
}
