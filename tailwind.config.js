/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'play' : ['Play', 'sans-serif']
    },
    extend: {
      colors: {
        vblue: "#1e1452",
        vgreen: "#6fdb13",
        vgreenhover: "#60bd11"
      },
    }
  },
  plugins: [],
}

