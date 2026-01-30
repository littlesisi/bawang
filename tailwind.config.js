/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'], // 适合三国风格
      },
      colors: {
        'ancient-paper': '#f4e4bc', // 古纸色
        'ancient-brown': '#5d4037', // 古褐色
        'kingdom-wei': '#4a90e2',   // 魏 - 蓝
        'kingdom-shu': '#d0021b',   // 蜀 - 红
        'kingdom-wu': '#f5a623',    // 吴 - 黄
      }
    },
  },
  plugins: [],
}
