import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = 'Lumina';

createInertiaApp({
    title: (title) => title || appName,
    resolve: (name) => resolvePageComponent(
        [
            `./pages/${name}.tsx`,
            `./pages/${name}.jsx`,
        ],
        import.meta.glob('./pages/**/*.{tsx,jsx}'),
    ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
