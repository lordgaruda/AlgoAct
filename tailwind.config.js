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
                    DEFAULT: '#030712',
                    50: '#0a0f1e',
                    100: '#111827',
                    200: '#1e293b',
                    300: '#334155',
                },
                'cyan': {
                    DEFAULT: '#22d3ee',
                    glow: 'rgba(34, 211, 238, 0.5)',
                    light: '#67e8f9',
                    dark: '#06b6d4',
                },
                'violet': {
                    DEFAULT: '#8b5cf6',
                    glow: 'rgba(139, 92, 246, 0.4)',
                    light: '#a78bfa',
                },
                'slate': {
                    DEFAULT: '#94a3b8',
                    light: '#cbd5e1',
                    dark: '#64748b',
                }
            },
            fontFamily: {
                'heading': ['Space Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                'body': ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                'mono': ['Fira Code', 'JetBrains Mono', 'monospace'],
            },
            backdropBlur: {
                'xl': '24px',
                '2xl': '40px',
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.2)',
                'glow-cyan-lg': '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.3)',
                'glow-violet': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
                'glass': '0 4px 24px rgba(0, 0, 0, 0.3)',
                'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.4)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 10s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' },
                    '50%': { boxShadow: '0 0 50px rgba(34, 211, 238, 0.5)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                }
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            }
        },
    },
    plugins: [],
}
