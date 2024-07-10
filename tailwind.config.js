/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        expand: {
           "0%": {
              "max-width": "0%",
              "max-height": "0%",
              "opacity": "0%"
           },
           "50%": {
            "max-width": "0%",
            "max-height": "100%"
           },
           "100%": {
            "max-width": "100%",
            "max-height": "100%",
            "opacity": "100%"
           },
        },
        contract: {
          "0%": {
            "max-width": "100%",
            "max-height": "100%",
            "opacity": "100%"
         },
         "50%": {
          "max-width": "100%",
          "max-height": "0%"
         },
         "100%": {
          "max-width": "0%",
          "max-height": "0%",
          "opacity": "0%",
         },
        },
        fadeIn: {
          "0%": {
            "background-color": "transparent",
            "color": "rgb(55 65 81)",
            "filter": "drop-shadow(0 0 #0000)"
          },
          "100%": {
            "background-color": "#486648",
            "color": "rgb(255 255 255)",
            "filter": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))"
          }
        },
        fadeOut: {
          "0%": {
            "background-color": "#486648",
            "color": "rgb(255 255 255)",
            "filter": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))"
          },
          "100%": {
            "background-color": "transparent",
            "color": "rgb(55 65 81)",
            "filter": "drop-shadow(0 0 #0000)"
          }
        }
      },
      animation: {
        'expand-div': 'expand 0.65s linear',
        'contract-div': 'contract 0.65s linear forwards',
        'fade-in': 'fadeIn 0.25s linear',
        'fade-out': 'fadeOut 0.25s linear'
      }
    },
  },
  plugins: [],
};
