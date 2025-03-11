/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          lighter: 'var(--accent-lighter)',
          dark: 'var(--accent-dark)',
        },
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
} 