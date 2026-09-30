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
          night: '#07070F',   // app background
          card: '#0E1020',    // card surface
          frame: '#1D2640',   // borders
          cyan: '#00F0FF',    // player cube / accent
          magenta: '#FF33BF', // splash bar
          violet: '#D933FF',  // ship portal
          text: '#E6F4FF',
          textMuted: '#8FA3BF'
        }
      }
    }
  }
};
