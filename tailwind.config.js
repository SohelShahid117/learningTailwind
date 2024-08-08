// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["*"],
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      md: "",
      lg: "",
      xl: "",
      // tablet: "640px",
      // => @media (min-width: 640px) { ... }

      // laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      // desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    // colors: {
    //   green: "#2ecc71",
    // },
  },
  plugins: [],
};
