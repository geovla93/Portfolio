module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#0e232f",
				secondary: "#4da8da",
				dark: "#007cc7",
			},
			scale: {
				800: "80",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
