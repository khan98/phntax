/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens:{
		sm: "640px",
        md: "768px",
        lg: "960",
        xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-marcellus)",
		secondary: "var(--font-montserrat)",
	},
  	extend: {
  		colors: {
  			primary: {
				DEFAULT: "#0f3b61",
			},
			secondary: {
				DEFAULT: "#33caff",
				100: "#0092cc"
			},
			accent: {
				DEFAULT: "#ec0b04",
				100: "f2d5c5",
			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
