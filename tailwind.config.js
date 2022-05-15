module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        colors: {
            white: "#FFFFFF",
            transparent: "transparent",
            black: "#141c3a",
            gray: "#E6ECF8",
            mainColor: "#1431AE",
            secondColor: "#141c3a",
            dark: {
                bgColor: "#0d1118",
                gray: "#2e373e",
            },
        },
        container: {
            center: true,
            default: "1rem",
            sm: "2rem",
            lg: "3rem",
            xl: "4rem",
        },
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
        },
    },
};
