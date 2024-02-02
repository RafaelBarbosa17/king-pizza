/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mp: '320px',
      mm: '375px',
      mg: '425px',
      md: '768px',
      ld: '1024px',
      lg: '1440px',
      '4k': '2560px'
    },
    colors: {
      "redMain": "#BC1616",
      "black": "#000000",
      "white": "#FFFFFF",
      "orange": "#ffa700",
      "tealGreen": "#075E54",
      "lightGreen": "#25D366",
      "royalBlue": "#405DE6",
      "purple": "#833AB4",
      "purpleRed": "#E1306C",
      "gray": "#131111",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        courgette: ['var(--font-courgette)'],
        inter: ['var(--font-inter)'],
        amiko: ['var(--font-amiko)']
      },
    },
  },
  plugins: [],
}
