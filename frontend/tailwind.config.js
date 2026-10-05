/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#06080A',
          900: '#090B0E',
          800: '#111418',
        },
        gunmetal: {
          800: '#181C22',
          700: '#1F242C',
          600: '#2A303A',
        },
        gcs: {
          border: '#262C36',
          borderBright: '#3A4352',
          cyan: '#38BDF8',
          cyanDim: '#0284C7',
          amber: '#F59E0B',
          red: '#EF4444',
          green: '#10B981',
          textMuted: '#64748B',
          textBright: '#E2E8F0',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-red': 'pulseRed 1.2s infinite',
        'scanline': 'scanline 6s linear infinite',
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { opacity: '1', backgroundColor: 'rgba(239, 68, 68, 0.25)', borderColor: '#EF4444' },
          '50%': { opacity: '0.6', backgroundColor: 'rgba(239, 68, 68, 0.08)', borderColor: '#991B1B' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
}
