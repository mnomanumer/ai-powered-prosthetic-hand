/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a237e', // Deep Blue
          light: '#534bae',
          dark: '#000051',
          glass: 'rgba(26, 35, 126, 0.9)',
        },
        accent: {
          DEFAULT: '#00bcd4', // Cyan/Teal
          light: '#62efff',
          dark: '#008ba3',
          glow: 'rgba(0, 188, 212, 0.5)',
        },
        surface: {
          light: '#ffffff',
          gray: '#f8f9fc', // Slightly cooler gray
        },
        text: {
          main: '#1e293b', // Slate 800 - softer than pure black
          light: '#f1f5f9',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'], // Medical/Tech
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
