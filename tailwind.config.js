/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#018AAB",
                    light: "#C5E0E8",
                },
            },
        },
    },
    plugins: [],
};
