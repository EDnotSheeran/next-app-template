# GitHub Copilot – Project Instructions

This document helps GitHub Copilot understand the structure, conventions, and expectations of this project.

The goal of this repository is to serve as a **reusable, production-ready template** for building applications with a typed API and a modern frontend.

---

## 🧠 Project Overview

* **Runtime:** Bun
* **Framework:** Next.js (App Router)
* **API Framework:** Elysia
* **Validation:** Elysia `t` (TypeBox)
* **Authentication:** Better Auth
* **Database:** PostgreSQL (Drizzle ORM)
* **Testing:** Vitest (shared between frontend and backend)

This project is **Bun-first**, but follows standard web patterns.

---

## 📁 High-Level Architecture

```txt
src/
├─ app/                    # Next.js App Router (frontend)
│  ├─ (public)/
│  ├─ (protected)/
│  └─ api/[[...slugs]]/     # API adapter (Next → Elysia)
│
├─ api/                    # API core (framework-agnostic)
│  ├─ app.ts               # createApiApp factory
│  ├─ config/              # env, constants
│  ├─ database/            # DB client and schemas
│  ├─ modules/             # Domain modules
│  └─ shared/              # middlewares, errors, utils
```

The API core **must not depend on Next.js**. The adapter lives in `src/app/api`.

---

## 🧩 Backend Module Conventions

Each backend module represents a **domain** and follows this structure:

```txt
modules/<module>/
├─ <module>.route.ts       # HTTP routes (Elysia)
├─ <module>.service.ts     # Business logic
├─ <module>.schema.ts      # Validation schemas (Elysia t)
├─ <module>.errors.ts      # Domain-specific errors
├─ <module>.test.ts        # Vitest tests
└─ index.ts                # Public exports
```

### Rules

* Routes **must not** contain business logic
* Services **must not** depend on HTTP or Elysia
* Validation schemas live only in `*.schema.ts`
* Errors must extend `HttpError`

---

## 🔐 Error Handling Rules

* All errors are handled by a **global error middleware**
* Never return raw framework errors
* Validation errors must be normalized

Standard error response shape:

```ts
{
  message: string;
  location?: 'body' | 'params' | 'query' | 'headers';
  errors?: Array<{
    path: string;
    message: string;
    value?: unknown;
  }>;
}
```

---

## 🧪 Testing Conventions

* **Vitest** is the only test runner
* Backend tests use `environment: node`
* Frontend tests use `environment: jsdom`

Rules:

* Test services directly
* Avoid testing implementation details
* Prefer small, isolated tests

---

## ✍️ Code Style & Language

* **All code must be written in English**
* Use clear, explicit naming
* Avoid magic strings
* Prefer composition over inheritance

---

## 🤖 Copilot-Specific Guidance

When generating code:

* Follow existing folder and file naming conventions
* Prefer existing patterns over inventing new ones
* Do not introduce new frameworks or libraries without context
* Assume Bun is available
* Assume ESM syntax

When unsure, **copy patterns from the `example` module**.

---

## 🎯 Goal

The primary goal of this repository is **clarity and reuse**.

Generated code should be:

* Easy to understand
* Easy to copy
* Easy to extend
* Safe by default

This file exists to ensure Copilot assists instead of guessing.
