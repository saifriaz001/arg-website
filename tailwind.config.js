// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F2',
        primary: '#D87026', // (Optional: your logo orange)
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // include your components and pages
  ],
}
