/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
  ],
}
