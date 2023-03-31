/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      dmsans: "DM Sans",
    },
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
      },
      keyframes: {
        'radial-gradient': {
          '0%': { 'background-size': '0% 0%' },
          '100%': { 'background-size': '150% 150%' },
        },
      },
      scale: {
        100: '100',
      },
      zIndex: {
        '-1': '-1',
      },
      transitionProperty: {
        'all': 'all',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};
