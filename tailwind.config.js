/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // This line scans all your Vue and JS/TS files
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}