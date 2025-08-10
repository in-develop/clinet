# Project

Version: 0.1.0

---

## Overview

This is a React/Next.js project using Next.js 15 with Turbopack for development.  
It is built with TypeScript, Redux Toolkit for state management, React Hook Form for forms, Tailwind CSS for styling, and Sonner for notifications.

---

## Tech Stack

- **Next.js** 15.4.6 (with Turbopack)
- **React** 19.1.0
- **TypeScript** 5.x
- **Redux Toolkit** 2.8.2
- **React Redux** 9.2.0
- **React Hook Form** 7.62.0
- **Axios** 1.11.0 (for HTTP requests)
- **Tailwind CSS** 4 (with `prettier-plugin-tailwindcss`)
- **Sonner** 2.0.7 (for toast notifications)
- **Yup** 1.7.0 (validation schema for forms)
- **clsx** 2.1.1 (for conditional classNames)

---

## Development

### Prerequisites

- Node.js (recommended version >= 18)
- pnpm

### Installation

```bash
pnpm install
```

## Running Locally

```bash
pnpm dev
```

Open http://localhost:3000 in your browser to view the app.

## Build & Start Production

- Build the optimized production version:

```bash
pnpm build
```

- Start the production server:

```bash
pnpm start
```

## Scripts

| Script  | Description                                |
| ------- | ------------------------------------------ |
| `dev`   | Run Next.js dev server (Turbopack enabled) |
| `build` | Build the production app                   |
| `start` | Start production server                    |
| `lint`  | Run ESLint to check code style             |

## Git Branch & Commit Conventions

### Branches

- main — stable production-ready branch

- develop — integration branch for features and fixes before release

### Feature and bugfix branches

Use the format with your username, type, and descriptive branch name:

```bash
userName/feat-branch_name      # for new features
userName/fix-branch_name       # for bug fixes
```

**Examples:**

**_alex/feat-user_auth_**

**_alex/fix-login_bug_**

---

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for consistency and automation.

```cpp
<type>[optional scope]: <short description>
```

Where <type> is one of:

| Type       | Description                                       |
| ---------- | ------------------------------------------------- |
| `init`     | Initial project setup                             |
| `feat`     | Adding new feature                                |
| `fix`      | Bug fix                                           |
| `refactor` | Code refactoring without changing behavior        |
| `docs`     | Documentation changes                             |
| `chore`    | Miscellaneous tasks (configs, dependencies, etc.) |

```makefile
feat(auth): add user login flow
fix: fix item quantity update bug
refactor(ui): improve button styles and accessibility
docs: update installation instructions
init: initial project setup
```

---

### Summary

- Branch names: userName/type-description
- Commit types: init, feat, fix, refactor, docs, chore
- Write commit messages in English, concise and clear in present

This convention improves readability and enables tooling like changelog generation and CI automation

## Code Quality Tools

- ESLint with @next/eslint-plugin-next and eslint-plugin-react-hooks
- Prettier with prettier-plugin-tailwindcss for automatic formatting of Tailwind CSS classes
- TypeScript for static typing and type safety

## Styling

Uses Tailwind CSS v4 for utility-first styling.
Formatting Tailwind classes is handled by Prettier plugin prettier-plugin-tailwindcss.

## State Management

- Redux Toolkit is used for global state with slices organized for scalability.
- React Redux hooks are used to access state and dispatch actions.

## Forms and Validation

- React Hook Form for easy, performant form handling.
- Yup for schema-based validation.

## HTTP Requests

- Axios is used for making HTTP calls to backend APIs from SSR
- RTK query is used on the client side

## Notifications

Sonner is used to display toast notifications throughout the app.

## Project Structure

Simplified FSD version without entities and features

```bash
/src
  /app # Next.js app directory with pages and layouts
  /shared # UI components, utilities
  /widgets # Feature components or widgets
```

## Environment Variables

#### Store backend URLs and other secrets in .env file with Next.js conventions

- NEXT_PUBLIC\_ prefix for server and client variables
- VARIABLE_NAME for server only

## Notes

- Follow FSD (feature sliced design) principles for scalable architecture.
- Use React hooks and functional components throughout.
- Follow the [instructions](#git-branch--commit-conventions) for commits and branch names described above.

## License

`MIT License`

## Сontact

- For questions or contributions, please contact us:
  - Denys - [GitHub](https://github.com/FrontKid) / [Email](frontendpd@gmail.com) / [TG](https://t.me/anywlhere)
  - Yuliia - [GitHub](https://github.com/AndreevaYuliya) / [Email](yuliia.work.y@gmail.com) / [TG](https://t.me/y_u_1_i_y_a)
