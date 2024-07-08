export default {
  // Apply !important to all Tailwind utilities under #root
  important: "#root", 
  // Specify the paths to all of the template files in your project
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Extend the default theme here
    extend: {},
  },
  // Disable the preflight base styles provided by Tailwind
  corePlugins: {
    preflight: false,
  },
  // Add any Tailwind plugins here
  plugins: [],
};
