/** @type {import('tailwindcss').Config} */
export default {
  content: 
    ["./src/**/*.{js,jsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,css,html}"
  ]
  ,
  theme: {
    extend: {
      colors: {
        "purple": "#723DB6",
        "purple-main": "#593063",
        "purple-nav-to": "#B78EEC",
        "purple-nav-from": "#9670BD",
        "pink": "#8E5099",
    },
    fontFamily: {
      "PressStart2P": ["Press+Start+2P", 'cursive'],
  },
  plugins: [],
}
} 
}
