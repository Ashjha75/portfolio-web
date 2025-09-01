/** @type {import('tailwindcss').Config} */
export default {
  // Add this line to enable dark mode based on the '.dark' class
  darkMode: 'selector',

  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      // Define your custom colors here
      colors: {
        primary: '#1d4ed8',
        // This setup allows you to use opacity classes like `bg-box-bg/50`
        'box-bg': 'rgb(var(--color-box) / <alpha-value>)',
        'box-shadow': 'rgb(var(--box-sd) / <alpha-value>)',
        'box-border': 'rgb(var(--box-border) / <alpha-value>)',
        'heading-1': 'rgb(var(--heading-1))',
        'heading-2': 'rgb(var(--heading-2))',
        'heading-3': 'rgb(var(--heading-3))',
      },
      // Define custom breakpoints in the 'screens' object
      screens: {
        'midmd': '880px',
      },
      // Define your custom font family here
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}