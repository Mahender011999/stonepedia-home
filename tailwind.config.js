/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        upToDown: "upToDown 1s infinite ease-in-out",
        downToUp: "downToUp 1s infinite ease-in-out",
        rotateCircle: "rotateCircle 5s linear infinite",
        scrollLeft: "scrollLeft 10s linear infinite",
        scrollRight: "scrollRight 10s linear infinite",
      },
      keyframes: {
        upToDown: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        downToUp: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rotateCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
