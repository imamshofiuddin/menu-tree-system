import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import '../../public/output.css';
import { route } from 'ziggy-js';
import { Ziggy } from './ziggy';

window.route = (name, params = {}, absolute = true) => route(name, params, Ziggy);

createInertiaApp({
    resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx');
    const page = pages[`./pages/${name}.jsx`];
    if (!page) {
        throw new Error(`Page not found: ./pages/${name}.jsx`);
    }
    return page().then(module => module.default);
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
