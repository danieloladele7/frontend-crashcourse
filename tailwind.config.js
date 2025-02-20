/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1366px',
      '2xl':	'1440px'
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.21875rem'],
      lg: ['1.125rem', '1.37125rem'],
      xl: ['1.25rem', '1.52375rem'],
      '2xl': ['1.5rem', '1.82875rem'],
      '3xl': ['1.75rem', '3.125rem'],
      '4xl': ['3rem', '3.625rem'],
      '5xl': ['3.5rem', '4rem'],
      '6xl': ['4rem', '4.5rem'],
      '7xl': ['5rem', '5.625rem'],
      '8xl': ['6rem', '6.625rem']
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        afacad: ["Afacad", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        damion: ["Damion", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        calligraffitti: ["Calligraffitti", "sans-serif"],
        metalMania: ["Metal Mania", "sans-serif"],
        comingSoon: ["Coming Soon", "sans-serif"],
      },
      backgroundImage: {
        darkLogo: "url('assets/images/dark-logo.svg')",
        lightLogo: "url('assets/images/light-logo.svg')",
        // hero: "url('assets/images/collection-background.svg')",
        // card: "url('assets/images/thumbnail-background.svg')",
      },
      colors: {
        mainColor: '#06974E', // for btns and section id
        secondaryColor: '#62644C', // for section id borders and other borders
        textColor: '#000302CC',
      },
      boxShadow: { // X(h-offset) Y(v-offset) blur spread color
        bx: "0 1px 5px 0 #62644C1A",
      },
    },
  },
  plugins: [],
};
