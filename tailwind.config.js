module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		screens: {
			sm: "576px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "992px",
			// => @media (min-width: 1024px) { ... }

			xl: "1200px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1400px",
			// => @media (min-width: 1536px) { ... }
		},

		colors: {
			// first: "#0A192F",
			// second: "#64ffda",
			// third: "#112240",
			// founrth: "#112A3D",
			black: "#000000",
			white: "#ffffff",
			green: "#29c747",
			greenTwo: "#04891B",
			blue: "#19B1FF",
		},
		textColor: {
			green: "#29c747",
			black: "#000000",
			white: "#ffffff",
		},
		// fill: (theme) => ({
		// 	red: theme("#19B1FF"),
		// 	green: theme("colors.green.500"),
		// 	blue: theme("colors.blue.500"),
		// }),
		// fontFamily: {
		// 	sans2: [
		// 		"Calibre",
		// 		"Inter",
		// 		"San Francisco",
		// 		"SF Pro Text",
		// 		// -apple - system,
		// 		// system - ui,
		// 		// sans - serif,
		// 	],
		// 	mono2: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono"],
		// },
		extend: {
			animation: {
				rgb: "rgb 10s linear infinite",
			},
			keyframes: {
				rgb: {
					"0%": { filter: "hue-rotate(0deg)" },
					"100%": { filter: "hue-rotate(360deg)" },
				},
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [],
};
