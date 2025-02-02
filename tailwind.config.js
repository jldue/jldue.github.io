/** @type {import("tailwindcss").Config} */

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["JetBrains Mono"]
    }
  },
  plugins: [require("tailwindcss-animated")]
};
