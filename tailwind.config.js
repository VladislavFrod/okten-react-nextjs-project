/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Для файлів у директорії `app`
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Для файлів у директорії `pages`
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Для файлів у директорії `components`
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Для файлів у директорії `src`, якщо вона використовується
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Додаємо підтримку темного режиму
  plugins: [],
}
