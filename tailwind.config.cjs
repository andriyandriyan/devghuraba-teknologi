const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#e7e6fa',
					100: '#c4c1f3',
					200: '#9c98ec',
					300: '#746ee4',
					400: '#574fde',
					500: '#3930d8',
					600: '#332bd4',
					700: '#2c24ce',
					800: '#241ec8',
					900: '#1713bf',
				},
			},
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
