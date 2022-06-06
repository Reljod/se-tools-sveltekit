const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.white,
        heading1: '#1eeb77',
				bgprimary: colors.black,
				default_button: '#1eeb77'
			}
		}
	},
	plugins: []
};
