/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'midnight': {
                    DEFAULT: '#020617',
                    50: '#0a1628',
                    100: '#0f172a',
                    200: '#1e293b',
                    300: '#334155',
                },
                'cyan': {
                    DEFAULT: '#22d3ee',
                    glow: 'rgba(34, 211, 238, 0.5)',
                    light: '#67e8f9',
                    dark: '#06b6d4',
                },
                'slate': {
                    DEFAULT: '#94a3b8',
                    light: '#cbd5e1',
                    dark: '#64748b',
                }
            },
            fontFamily: {
                'display': ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
                'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            backdropBlur: {
                'xl': '24px',
                '2xl': '40px',
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.2)',
                'glow-cyan-lg': '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.3)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
