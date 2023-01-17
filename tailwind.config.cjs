/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [{
            mytheme: {
                "primary": "#0C53A6",
                "secondary": "#D926A9",
                "accent": "#1FB2A6",
                "neutral": "#191D24",
                "base-100": "#2A303C",
                "info": "#3ABFF8",
                "success": "#36D399",
                "warning": "#FBBD23",
                "error": "#F87272",
            },
        }]
    },
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