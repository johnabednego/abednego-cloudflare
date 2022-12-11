/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'cloudflare-icon': "url('/src/components/assets/Cloudflare.jpeg')",
    
      }
    },
  },
  plugins: [ require('tailwind-scrollbar-hide') ],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
}