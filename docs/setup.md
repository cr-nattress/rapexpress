# Development Setup

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd rapexpress
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example env file and fill in your keys:

```bash
cp .env.example .env.local
```

See `.env.example` for all available variables and their purpose. At minimum, you need:

- **CMS keys** (Sanity project ID + dataset) for content
- **Supabase keys** for database
- **Google Maps API key** for address autocomplete

### 4. Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without changes |
| `npm run test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
rapexpress/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable UI components
│   └── lib/           # Utilities, API clients, helpers
├── public/            # Static assets
├── docs/              # Project documentation
├── backlog/           # User stories organized by epic
├── competitor-research/
├── site-scrape/       # Original site HTML/text extracts
├── site-assets/       # Downloaded images from current site
└── screenshots/       # Current site screenshots
```

## Git Hooks

The project uses Husky for git hooks:

- **pre-commit**: Runs `npm run lint` to catch issues before commit
- **commit-msg**: Enforces [Conventional Commits](https://www.conventionalcommits.org/) via commitlint

### Commit Message Format

```
type(scope): description

Examples:
feat(home): add hero section with CTA
fix(forms): correct validation on quote form
docs: update setup instructions
chore: upgrade dependencies
```

## Deployment

The project deploys to Vercel. Push to `main` triggers a production build. Pull requests get preview deployments automatically.
