/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#0e0e11",
        "surface-subtle": "#141419",
        border: "rgba(255, 255, 255, 0.08)",
        "border-highlight": "rgba(255, 255, 255, 0.16)",
        primary: "#f5f5f5",
        secondary: "#8a8a8a",
        muted: "#52525b",
        accent: {
          DEFAULT: "#6366f1",
          hover: "#818cf8",
          glow: "rgba(99, 102, 241, 0.2)",
          teal: "#2dd4bf",
          gold: "#f5c842"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
