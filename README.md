# Next App Template

A modern, opinionated **Next.js + API** template designed to build scalable applications fast.

This template combines **Next.js App Router**, an internal **typed API**, modular backend architecture, authentication, database access, and a clean frontend structure — all ready to be reused across multiple projects.

---

## ✨ Features

* **Next.js App Router**
* **Internal API architecture** (decoupled core)
* **Modular backend structure** (domain-based modules)
* **End-to-end type safety**
* **Authentication ready** (Better Auth)
* **Database ready** (PostgreSQL + Drizzle)
* **Middleware & plugin system**
* **Environment validation**
* **Scalable frontend structure**
* **Docker-ready**

---

## 📁 Project Structure

```txt
src/
├─ app/                    # Next.js App Router
│  ├─ (public)/
│  ├─ (protected)/
│  └─ api/[[...slugs]]/     # API adapter
│
├─ api/                    # API core (framework-agnostic)
│  ├─ app.ts
│  ├─ config/
│  ├─ database/
│  ├─ modules/
│  └─ shared/
│
├─ components/             # Shared UI components
├─ features/               # Domain-based frontend features
├─ lib/                    # Shared frontend utilities
└─ styles/
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://pgadmin:password@localhost:5432/docker
NEXT_PUBLIC_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-key
```

### 3. Run the development server

```bash
bun dev
```

The app will be available at:

```
http://localhost:3000
```

---

## 🧠 Architecture Overview

### API Core

* Lives in `src/api`
* Completely decoupled from Next.js
* Uses a **factory pattern** (`createApiApp`)
* Can be reused in other environments

### API Adapter

```txt
src/app/api/[[...slugs]]/route.ts
```

This file connects Next.js to the API core.

### Modules

Each backend module follows the same structure:

```txt
modules/example/
├─ example.route.ts
├─ example.service.ts
└─ index.ts
```

This makes the system predictable and scalable.

---

## 🔐 Authentication

Authentication is handled via **Better Auth** and configured through environment variables.

The system is designed to support:

* Public routes
* Protected routes
* Role-based access (extensible)

---

## 🧪 Scripts

```bash
bun dev          # Run development server
bun build        # Build for production
bun start        # Start production server
bun lint         # Lint project
bun lint:fix     # Lint and auto-fix
```

---

## 🧩 Creating a New Module

1. Copy an existing module (e.g. `example`)
2. Rename files and exports
3. Register it in `registerModules`

That’s it.

---

## 📄 License

MIT License.
