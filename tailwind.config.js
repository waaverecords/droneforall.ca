/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        lineHeight: {
            '11': '2.75rem',
            '12': '3rem',
            '13': '3.25rem',
            '14': '3.5rem',
            '15': '3.75rem'
        },
        transitionDuration: {
            '80': '80ms'
        },
        height: {
            '15': '3.75rem'
        },
        animation: {
            wipein: 'wipein 0.7s steps(29) forwards',
            wipeout: 'wipeout 0.7s steps(29) forwards',
        },
        keyframes: {
            wipein: {
                from: {
                    maskPosition: '100% 0'
                },
                to: {
                    maskPosition: '0 0'
                }
            },
            wipeout: {
                from: {
                    maskPosition: '0 0'
                },
                to: {
                    maskPosition: '100% 0'
                }
            }
        }
    },
  },
  plugins: [],
}
