/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Đảm bảo Vue files được quét
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFBF2',
        'brand-orange': {
          'light': '#FDD8AF',
          'DEFAULT': '#FDBA74', 
        },
        'brand-blue': {
          'DEFAULT': '#2B3A63',
        },
        'dark-blue': '#0F172A', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}