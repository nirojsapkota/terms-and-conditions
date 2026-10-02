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
          paper: '#F4EFE6',   // app background
          card: '#FFFDF8',    // card surface
          frame: '#E9E2D5',   // covered-cell veil / borders
          ink: '#2B2A33',     // arrows
          accent: '#E4572E',  // arrowhead red
          gold: '#B8893B',    // painting frame
          text: '#2B2A33',
          textMuted: '#7A7468'
        }
      }
    }
  }
};
