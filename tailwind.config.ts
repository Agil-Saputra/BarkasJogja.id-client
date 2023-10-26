import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#E8E8E8',
        primary: '#02C39A',
        secondary: '#1F997F',
		light_grey : '#8A929F',
      },
      screens: {
        sm: '360px',
      },
    },
  },
  plugins: [],
};
export default config;
