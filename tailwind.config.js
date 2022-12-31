/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'primary-color': '#251749',
            'secondary-color': '#ffcc34'
        },
        variants: {
            opacity: ({ after }) => after(['disabled'])
        },
        extend: {},
    },
    plugins: [],
}
