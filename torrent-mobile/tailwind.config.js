/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#090d16',
          card: '#111827',
          accent: '#10b981',
          accentHover: '#34d399', // Emerald 400
          text: '#f3f4f6', // Gray 100
          textMuted: '#9ca3af', // Gray 400
          border: '#1f2937' // Gray 800
        }
      }
    }
  }
};
