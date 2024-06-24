/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "370px",
      xs: "450px",
      sm: "580px",
      md: "804px",
      lg: "1040px",
      xl: "1440px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      merchant: ["Merchant", "sans-serif"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "2.353rem",
      "4xl": "2.441rem",
      "5xl": "3.40rem",
      "6xl": "3.82rem",
    },

    extend: {
      colors: {
        "ginger-red": "#FF4623",
        "chinese-black": "#161616",
        "body-cream": "#FFF7ED",
        "link-bg-cream": "#FFEAD0",
        "peach-orange": "#FFCC8D",
        "bangladesh-green": "#115E59",
        "terra-cotta": "#E17654",
      },
      backgroundImage: {
        "hero-background": "url('/src/pages/home/images/hero-bg.png')",
        "desc-image1":  "url('/src/pages/home/images/cosm1.png')",
        "desc-image2":  "url('/src/pages/home/images/cosm2.png')",
        "slide1":  "url('/src/pages/home/see-how-routes/images/slide1.png')",
        "slide2":  "url('/src/pages/home/see-how-routes/images/slide2.png')",
        "slide3":  "url('/src/pages/home/see-how-routes/images/slide3.png')",
        "faq-img":  "url('/src/assets/images/faq-img.png')",

      },
    },
  },
  plugins: [],
};
