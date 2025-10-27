import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bitcoin: {
          orange: '#f7931a',
          light: '#f8a01d',
          dark: '#e8821a',
        },
        'bitcoin-orange': '#f7931a',
      },
      fontFamily: {
        sans: ['Fira Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'default': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'bitcoin': '0 4px 14px 0 rgba(247, 147, 26, 0.25)',
        'bitcoin-lg': '0 10px 25px -3px rgba(247, 147, 26, 0.3), 0 4px 6px -2px rgba(247, 147, 26, 0.1)',
        'bitcoin-xl': '0 20px 25px -5px rgba(247, 147, 26, 0.25), 0 10px 10px -5px rgba(247, 147, 26, 0.1)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'subtle-pattern': 'radial-gradient(circle at 2px 2px, rgba(247, 147, 26, 0.03) 1px, transparent 0)',
        'hero-pattern': 'linear-gradient(315deg, #f8f9fa 0%, #fafafa 50%, #ffffff 100%)',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;