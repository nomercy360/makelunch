/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                deepPurple: '#5E58F6',
                softPink: '#F4EAE9',
                pastelPurple: '#CDCBFB',
                mutedPink: '#D5B5C7',
                background: '#F6F6F6',
            },
            textColor: {
                gray: '#BDBDBD',
                lightGray: '#B2A3A1',
                softPurple: '#9290C9',
                darkPink: '#AB859B',
            }
        },
    },
    plugins: [],
}
