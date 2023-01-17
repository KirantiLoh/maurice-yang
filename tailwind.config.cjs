/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#141414",
                primary: {
                    500: "#0C53A6",
                    DEFAULT: "#418ae8"
                }
            },
            fontFamily: {
                poppins: ["Poppins"]
            }
        },
    },
    plugins: [],
};