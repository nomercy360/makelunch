/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#F6F6F6',
                brown: {
                    bg: {
                        DEFAULT: '#F4EAE9',
                        secondary: '#E2D9D8',
                    },
                    DEFAULT: '#B2A3A1',
                    secondary: '#AB9491',
                },
                purple: {
                    bg: {
                        DEFAULT: '#CDCBFB',
                        secondary: '#C1BFFF',
                    },
                    DEFAULT: '#9290C9',
                    secondary: '#7D7BB4',
                },
                pink: {
                    bg: {
                        DEFAULT: '#EACBDC',
                    },
                    DEFAULT: '#BA8BA6',
                },
            },
            textColor: {
                gray: '#BDBDBD',
                lightGray: '#B2A3A1',
            }
        },
    },
    plugins: [],
}
