/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#FD1C68",
          secondary: "#FE8E87",
          tertiary: "#110C0C",
          
        },
      },
      "dark",
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
}
