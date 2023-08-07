/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: "hsl(190, 54%, 56%)",
        darkAccent: "hsl(190, 15%, 58%)"
      },
      fontFamily: {
        lauren: ["Lauren", "cursive"],
        arabella: ["Arabella", "cursive"],
        julius: ["JuliusSansOne", "sans"],
        seasons: ["TheSeasonsLight", "sans"],
        forum: ["ForumRegular", "sans"],
      }
    }
  },
  plugins: [],
}
