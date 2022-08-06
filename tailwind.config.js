/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      gridTemplateColumns : {
        auto10rem : 'repeat(auto-fill, minmax(10rem, 1fr))',
        auto15rem : 'repeat(auto-fill, minmax(15rem, 1fr))',
        auto20rem : 'repeat(auto-fill, minmax(20rem, 1fr))',
        auto30rem : 'repeat(auto-fill, minmax(30rem, 1fr))',
      }
    },
  },
  plugins: [],
}
