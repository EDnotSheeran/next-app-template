# Contributing Guide

Thanks for your interest in contributing! 🚀

This project is a **template**, so consistency, clarity, and maintainability are the top priorities.

---

## 🧠 Core Principles

* **Keep it simple**
* **Avoid over-engineering**
* **Follow existing patterns**
* **Optimize for reuse**
* **Favor clarity over cleverness**

---

## 📁 Project Conventions

### Backend

* All backend logic lives in `src/api`
* Use **modules** for domain separation
* One module = one responsibility

Module structure:

```txt
modules/<module-name>/
├─ <module>.route.ts
├─ <module>.service.ts
├─ <module>.repository.ts (if needed)
├─ <module>.schema.ts (if needed)
└─ index.ts
```

### Frontend

* Shared components go in `components/`
* Domain-specific code goes in `features/`
* Avoid putting business logic in UI components

---

## 🧪 Code Style

* All code must be written in **English**
* Follow existing formatting and naming conventions
* Prefer explicit types where it improves readability
* Avoid unused exports

---

## 🧩 Adding a New Feature

1. Identify the domain (module or feature)
2. Follow the existing folder structure
3. Add tests when applicable
4. Keep changes focused and minimal

---

## 🐛 Bug Fixes

* Include a clear description of the problem
* Explain why the fix works
* Avoid refactors unrelated to the fix

---

## 📝 Commit Message Conventions

This project follows **Conventional Commits**, enforced by **commitlint**.

All commit messages must follow this format:

```txt
<type>(optional scope): <description>
```

### ✅ Allowed types

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Code style changes (formatting, missing semicolons, etc)
* **refactor**: Code refactoring without behavior change
* **perf**: Performance improvements
* **test**: Adding or fixing tests
* **build**: Build system or dependency changes
* **ci**: CI configuration changes
* **chore**: Maintenance tasks
* **revert**: Reverting a previous commit

### 📌 Examples

```bash
feat(auth): add role-based access control
fix(api): handle missing database connection
docs(readme): update setup instructions
refactor(users): simplify service logic
```

### 🚫 Rules

* Use **lowercase** for type and scope
* Keep the description **short and imperative**
* Do not end the description with a period
* One commit = one logical change

---

## 🔍 Pull Requests

Before opening a PR:

* [ ] Code builds successfully
* [ ] Lint passes
* [ ] No unnecessary files added
* [ ] Changes follow project conventions

---

## 🤝 Communication

* Be respectful
* Be clear
* Assume good intent

This project aims to be a **solid foundation**, not a rigid framework.

Thanks for contributing ❤️
