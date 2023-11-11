import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F98126',
        secondary: '#11224F'
      },
      backgroundImage: {
        gradient: 'url("./assets/background-gradient.svg")'
      }
    }
  },
  plugins: []
};
export default config;
