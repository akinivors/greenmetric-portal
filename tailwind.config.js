/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // This line scans all your Vue and JS/TS files
  ],
  darkMode: 'class', // Enable class-based dark mode
  safelist: [
    // Theme colors for PledgeSection
    'text-green-500', 'bg-green-500', 'border-green-600', 'hover:border-green-400', 'dark:hover:border-green-500',
    'text-amber-500', 'bg-amber-500', 'border-amber-600', 'hover:border-amber-400', 'dark:hover:border-amber-500',
    'text-blue-500', 'bg-blue-500', 'border-blue-600', 'hover:border-blue-400', 'dark:hover:border-blue-500',
    'text-teal-500', 'bg-teal-500', 'border-teal-600', 'hover:border-teal-400', 'dark:hover:border-teal-500',
    'text-slate-500', 'bg-slate-500', 'border-slate-600', 'hover:border-slate-400', 'dark:hover:border-slate-500',
    'text-indigo-500', 'bg-indigo-500', 'border-indigo-600', 'hover:border-indigo-400', 'dark:hover:border-indigo-500',
    
    // Theme classes from useTheme composable
    // Green theme
    'text-green-600', 'dark:text-green-400', 'text-green-500', 'text-green-700', 'dark:text-green-300',
    'bg-green-50', 'dark:bg-green-900/20', 'bg-green-100', 'dark:bg-green-800/30', 'border-green-500',
    'border-green-200', 'dark:border-green-700', 'hover:text-green-600', 'dark:hover:text-green-400',
    'hover:bg-green-50', 'dark:hover:bg-green-900/30',
    
    // Amber theme  
    'text-amber-600', 'dark:text-amber-400', 'text-amber-500', 'text-amber-700', 'dark:text-amber-300',
    'bg-amber-50', 'dark:bg-amber-900/20', 'bg-amber-100', 'dark:bg-amber-800/30', 'border-amber-500',
    'border-amber-200', 'dark:border-amber-700', 'hover:text-amber-600', 'dark:hover:text-amber-400',
    'hover:bg-amber-50', 'dark:hover:bg-amber-900/30',
    
    // Blue theme
    'text-blue-600', 'dark:text-blue-400', 'text-blue-500', 'text-blue-700', 'dark:text-blue-300',
    'bg-blue-50', 'dark:bg-blue-900/20', 'bg-blue-100', 'dark:bg-blue-800/30', 'border-blue-500',
    'border-blue-200', 'dark:border-blue-700', 'hover:text-blue-600', 'dark:hover:text-blue-400',
    'hover:bg-blue-50', 'dark:hover:bg-blue-900/30',
    
    // Teal theme
    'text-teal-600', 'dark:text-teal-400', 'text-teal-500', 'text-teal-700', 'dark:text-teal-300',
    'bg-teal-50', 'dark:bg-teal-900/20', 'bg-teal-100', 'dark:bg-teal-800/30', 'border-teal-500',
    'border-teal-200', 'dark:border-teal-700', 'hover:text-teal-600', 'dark:hover:text-teal-400',
    'hover:bg-teal-50', 'dark:hover:bg-teal-900/30',
    
    // Slate theme
    'text-slate-600', 'dark:text-slate-400', 'text-slate-500', 'text-slate-700', 'dark:text-slate-300',
    'bg-slate-50', 'dark:bg-slate-900/20', 'bg-slate-100', 'dark:bg-slate-800/30', 'border-slate-500',
    'border-slate-200', 'dark:border-slate-700', 'hover:text-slate-600', 'dark:hover:text-slate-400',
    'hover:bg-slate-50', 'dark:hover:bg-slate-900/30',
    
    // Indigo theme
    'text-indigo-600', 'dark:text-indigo-400', 'text-indigo-500', 'text-indigo-700', 'dark:text-indigo-300',
    'bg-indigo-50', 'dark:bg-indigo-900/20', 'bg-indigo-100', 'dark:bg-indigo-800/30', 'border-indigo-500',
    'border-indigo-200', 'dark:border-indigo-700', 'hover:text-indigo-600', 'dark:hover:text-indigo-400',
    'hover:bg-indigo-50', 'dark:hover:bg-indigo-900/30',
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'sun-ray': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
        'pulse-nodes': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.03)', opacity: '0.7' },
        },
        'windshield-droplet': {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.1) translateY(-20px)',
            filter: 'blur(2px)'
          },
          '10%': { 
            opacity: '0.3', 
            transform: 'scale(0.3) translateY(-10px)',
            filter: 'blur(1px)'
          },
          '20%': { 
            opacity: '0.6', 
            transform: 'scale(0.6) translateY(-5px)',
            filter: 'blur(0.5px)'
          },
          '30%': { 
            opacity: '0.8', 
            transform: 'scale(0.8) translateY(-2px)',
            filter: 'blur(0.3px)'
          },
          '40%': { 
            opacity: '0.9', 
            transform: 'scale(0.95) translateY(-1px)',
            filter: 'blur(0.2px)'
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1) translateY(0px)',
            filter: 'blur(0px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translateY(0px)',
            filter: 'blur(0px)'
          }
        },
        'droplet-shimmer': {
          '0%, 100%': { 
            opacity: '0.8',
            boxShadow: '0 0 8px rgba(255,255,255,0.4)'
          },
          '50%': { 
            opacity: '1',
            boxShadow: '0 0 12px rgba(255,255,255,0.8)'
          }
        },
        'windshield-trail': {
          '0%': { 
            opacity: '0', 
            height: '0px',
            transform: 'translateY(-10px)'
          },
          '30%': { 
            opacity: '0.3', 
            height: '20%',
            transform: 'translateY(-5px)'
          },
          '60%': { 
            opacity: '0.6', 
            height: '60%',
            transform: 'translateY(0px)'
          },
          '100%': { 
            opacity: '1', 
            height: '100%',
            transform: 'translateY(0px)'
          }
        },
        'rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'motion-lines': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'swoosh': {
          '0%': { transform: 'translateX(-100%) scaleX(0)', transformOrigin: 'left' },
          '40%': { transform: 'translateX(0) scaleX(1)', transformOrigin: 'left' },
          '60%': { transform: 'translateX(0) scaleX(1)', transformOrigin: 'right' },
          '100%': { transform: 'translateX(100%) scaleX(0)', transformOrigin: 'right' },
        },
        'subtle-pan': {
          '0%, 100%': { transform: 'scale(1.05) translateX(-1%)' },
          '50%': { transform: 'scale(1.05) translateX(1%)' },
        },
        'hotspot-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        'soft-glow': {
          '0%, 100%': { filter: 'brightness(1) contrast(1)' },
          '50%': { filter: 'brightness(1.1) contrast(1.1) saturate(1.2)' },
        },
        'starfield-pan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        }
      },
      animation: {
        'sun-ray': 'sun-ray 8s infinite ease-in-out',
        'pulse-nodes': 'pulse-nodes 6s infinite ease-in-out',
        'windshield-droplet': 'windshield-droplet 0.8s ease-out forwards',
        'droplet-shimmer': 'droplet-shimmer 3s ease-in-out infinite',
        'windshield-trail': 'windshield-trail 1.2s ease-out forwards',
        'rain': 'rain 2s infinite linear',
        'motion-lines': 'motion-lines 3s infinite ease-in-out',
        'swoosh': 'swoosh 4s infinite ease-in-out',
        'subtle-pan': 'subtle-pan 15s infinite ease-in-out alternate',
        'hotspot-pulse': 'hotspot-pulse 2s infinite ease-in-out',
        'soft-glow': 'soft-glow 6s infinite ease-in-out',
        'starfield-pan': 'starfield-pan 120s infinite linear',
      }
    },
  },
  plugins: [],
}