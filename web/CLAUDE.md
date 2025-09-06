# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

SALOS is a full-stack application combining Laravel (PHP) backend with React/TypeScript frontend using Inertia.js. The project uses a monorepo structure with:

- `web/` - Laravel application with React frontend
- `mobile/` - Mobile development (currently empty as of Sep 5, 2025)
- `shared/` - Shared code/utilities (currently empty as of Sepf 5, 2025)

## Architecture Overview

### Backend (Laravel)
- **Framework**: Laravel 12.x with PHP 8.2+
- **Database**: Uses Eloquent ORM with models for User, Chat, Message, Journal, JournalEntry, Testimonial
- **Authentication**: Laravel Breeze with Inertia.js integration
- **Payments**: Laravel Cashier with Stripe integration
- **Queue System**: Built-in Laravel queues for background processing
- **Key Controllers**:
  - `ChatController` - AI chat functionality with guest/authenticated users
  - `JournalController` - Personal journaling with AI interaction  
  - `StripeCheckoutController` - Subscription/payment handling

### Frontend (React + TypeScript)
- **Framework**: React 19 with TypeScript, bundled by Vite
- **Routing**: Inertia.js for SPA-like experience with server-side routing
- **UI Library**: Radix UI components with Tailwind CSS v4
- **State Management**: Uses Inertia page props and React state
- **Key Features**:
  - AI chat interface with guest session support
  - Journal writing interface with AI assistance
  - User authentication and settings
  - Stripe checkout integration
  - Mobile-responsive design with custom hooks (`use-mobile`, `use-appearance`)

### Key Application Features
- **AI Chat**: Interactive chat with theological AI assistant, supports guest users
- **Journal**: Personal journaling with AI-powered insights and responses
- **User Management**: Registration, authentication, profile settings
- **Subscription**: Stripe-based billing for premium features
- **Responsive Design**: Mobile-first approach with custom responsive hooks

## Development Commands

### Backend (Laravel)
```bash
cd web
sail up -d                 # Start Laravel development server with Sail (preferred)
php artisan serve          # Start Laravel development server
php artisan queue:listen   # Start queue worker
php artisan pail           # View logs
php artisan migrate        # Run database migrations
php artisan tinker        # Laravel REPL
```

### Frontend Build Tools
```bash
cd web
sail composer run dev    # Start Vite development server in Sail (preferred)
npm run dev              # Start Vite development server
npm run build            # Build for production
npm run build:ssr        # Build with server-side rendering
npm run lint             # Run ESLint with auto-fix
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run types            # TypeScript type checking
```

### Unified Development
```bash
cd web
composer dev             # Start all services: Laravel server, queue worker, logs, and Vite
composer dev:ssr         # Start with SSR support
```

## Code Conventions

### File Organization
- React components in `web/resources/js/components/` (mix of .tsx and .jsx files)
- UI components in `web/resources/js/components/ui/`
- Pages in `web/resources/js/pages/`
- Layouts in `web/resources/js/layouts/`
- Hooks in `web/resources/js/hooks/`
- Laravel controllers in `web/app/Http/Controllers/`

### Available Custom Hooks
- `use-appearance` - Theme/appearance management
- `use-initials` - User initials generation
- `use-mobile` - Mobile device detection
- `use-mobile-navigation` - Mobile navigation state

### Styling Approach
- Tailwind CSS v4 with custom color scheme
- Uses `class-variance-authority` for component variants
- Custom components follow naming convention: `salos*` (e.g., `salosCard`, `salosSwitch`)
- Mix of TypeScript (.tsx) and JavaScript (.jsx) components

## Testing and Quality

### Available Scripts
- `npm run lint` - ESLint with automatic fixing
- `npm run types` - TypeScript type checking
- `npm run format` - Prettier code formatting
- Backend uses PHPUnit for testing

### Important Notes
- Guest users can access chat/journal features with session-based storage
- The application handles both authenticated and guest user flows
- Stripe integration requires proper environment configuration
- Database migrations should be run carefully in production environments
- The app uses Laravel's queue system for background AI processing
