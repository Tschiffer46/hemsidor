import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'h-teal': '#0d7377',
        'h-teal-dark': '#095e61',
        'h-teal-light': '#14a8ae',
        'h-accent': '#f97316',
        'h-accent-dark': '#ea6c0a',
        'h-dark': '#1a1a2e',
        'h-mid': '#4a5568',
        'h-light': '#f7fafc',
        'h-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
