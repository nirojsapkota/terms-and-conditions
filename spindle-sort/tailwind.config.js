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
          linen: '#FBF5EA',   // app background
          card: '#FFFDF8',    // card surface
          frame: '#EFE2C8',   // hoop frame / borders
          navy: '#264653',
          accent: '#2A9D8F',  // teal thread
          gold: '#E9C46A',
          coral: '#E76F51',
          text: '#3A2E22',
          textMuted: '#8A7A63'
        }
      }
    }
  }
};
