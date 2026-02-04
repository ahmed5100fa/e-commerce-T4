const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors:{
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-placeholder': 'var(--text-placeholder)',
        'button-primary': 'var(--button-primary)',
        'button-secondary': 'var(--button-secondary)',
        'icon-primary': 'var(--icon-primary)',
        'success': 'var(--success)',
        'link-primary': 'var(--link-primary)',
      }
    },
  },
  plugins: [],
};
