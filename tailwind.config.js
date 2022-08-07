module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		fontFamily: {
			'source-sans': [
				'Source Sans Pro',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
		},
		colors: {
			white: '#ffffff',
			black: '#000000',
			darkGray: '#424242',
			medGray: '#4D4D4D',
			lightGray: '#e6e6e6',
			hoverGray: '#D9D9D9',
			highlightOrange: '#ffedca',
		},
		extend: {
			fontSize: {
				heading: '2.5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
};
