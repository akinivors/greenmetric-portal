import { computed } from 'vue'

export type ThemeColor = 'green' | 'amber' | 'blue' | 'teal' | 'slate' | 'indigo'

export function useTheme(themeColor: ThemeColor) {
  const themeClasses = computed(() => {
    const themeMap = {
      green: {
        // Text colors
        primary: 'text-green-600 dark:text-green-400',
        secondary: 'text-green-500',
        accent: 'text-green-700 dark:text-green-300',
        
        // Background colors
        bg: 'bg-green-50 dark:bg-green-900/20',
        bgSolid: 'bg-green-500',
        bgLight: 'bg-green-100 dark:bg-green-800/30',
        
        // Border colors
        border: 'border-green-500',
        borderLight: 'border-green-200 dark:border-green-700',
        
        // Button styles
        button: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
        buttonOutline: 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400',
        
        // Hover states
        hover: 'hover:text-green-600 dark:hover:text-green-400',
        hoverBg: 'hover:bg-green-50 dark:hover:bg-green-900/30',
        
        // Gradients
        gradient: 'bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-green-800/20',
        gradientText: 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent',
      },
      
      amber: {
        primary: 'text-amber-600 dark:text-amber-400',
        secondary: 'text-amber-500',
        accent: 'text-amber-700 dark:text-amber-300',
        
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        bgSolid: 'bg-amber-500',
        bgLight: 'bg-amber-100 dark:bg-amber-800/30',
        
        border: 'border-amber-500',
        borderLight: 'border-amber-200 dark:border-amber-700',
        
        button: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700',
        buttonOutline: 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white dark:border-amber-400 dark:text-amber-400',
        
        hover: 'hover:text-amber-600 dark:hover:text-amber-400',
        hoverBg: 'hover:bg-amber-50 dark:hover:bg-amber-900/30',
        
        gradient: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-amber-800/20',
        gradientText: 'bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent',
      },
      
      blue: {
        primary: 'text-blue-600 dark:text-blue-400',
        secondary: 'text-blue-500',
        accent: 'text-blue-700 dark:text-blue-300',
        
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        bgSolid: 'bg-blue-500',
        bgLight: 'bg-blue-100 dark:bg-blue-800/30',
        
        border: 'border-blue-500',
        borderLight: 'border-blue-200 dark:border-blue-700',
        
        button: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700',
        buttonOutline: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400',
        
        hover: 'hover:text-blue-600 dark:hover:text-blue-400',
        hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-900/30',
        
        gradient: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-800/20',
        gradientText: 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent',
      },
      
      teal: {
        primary: 'text-teal-600 dark:text-teal-400',
        secondary: 'text-teal-500',
        accent: 'text-teal-700 dark:text-teal-300',
        
        bg: 'bg-teal-50 dark:bg-teal-900/20',
        bgSolid: 'bg-teal-500',
        bgLight: 'bg-teal-100 dark:bg-teal-800/30',
        
        border: 'border-teal-500',
        borderLight: 'border-teal-200 dark:border-teal-700',
        
        button: 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700',
        buttonOutline: 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400',
        
        hover: 'hover:text-teal-600 dark:hover:text-teal-400',
        hoverBg: 'hover:bg-teal-50 dark:hover:bg-teal-900/30',
        
        gradient: 'bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 dark:from-teal-900/20 dark:via-emerald-900/20 dark:to-teal-800/20',
        gradientText: 'bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent',
      },
      
      slate: {
        primary: 'text-slate-600 dark:text-slate-400',
        secondary: 'text-slate-500',
        accent: 'text-slate-700 dark:text-slate-300',
        
        bg: 'bg-slate-50 dark:bg-slate-900/20',
        bgSolid: 'bg-slate-500',
        bgLight: 'bg-slate-100 dark:bg-slate-800/30',
        
        border: 'border-slate-500',
        borderLight: 'border-slate-200 dark:border-slate-700',
        
        button: 'bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700',
        buttonOutline: 'border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white dark:border-slate-400 dark:text-slate-400',
        
        hover: 'hover:text-slate-600 dark:hover:text-slate-400',
        hoverBg: 'hover:bg-slate-50 dark:hover:bg-slate-900/30',
        
        gradient: 'bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900/20 dark:via-gray-900/20 dark:to-slate-800/20',
        gradientText: 'bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent',
      },
      
      indigo: {
        primary: 'text-indigo-600 dark:text-indigo-400',
        secondary: 'text-indigo-500',
        accent: 'text-indigo-700 dark:text-indigo-300',
        
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        bgSolid: 'bg-indigo-500',
        bgLight: 'bg-indigo-100 dark:bg-indigo-800/30',
        
        border: 'border-indigo-500',
        borderLight: 'border-indigo-200 dark:border-indigo-700',
        
        button: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700',
        buttonOutline: 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400',
        
        hover: 'hover:text-indigo-600 dark:hover:text-indigo-400',
        hoverBg: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/30',
        
        gradient: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-indigo-800/20',
        gradientText: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
      },
    }
    
    return themeMap[themeColor] || themeMap.green
  })
  
  return {
    themeClasses
  }
}
