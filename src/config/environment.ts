// Environment configuration
// In Vite, environment variables must be prefixed with VITE_ to be accessible in the client

interface AppConfig {
  apiBaseUrl: string;
  appTitle: string;
  appVersion: string;
  isDevelopment: boolean;
  logLevel: string;
}

// Default configuration
const defaultConfig: AppConfig = {
  apiBaseUrl: 'http://localhost:8080/api/public',
  appTitle: 'Green Metric Portal',
  appVersion: '1.0.0',
  isDevelopment: true,
  logLevel: 'debug'
};

// Get configuration from environment variables with fallbacks
export const config: AppConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || defaultConfig.apiBaseUrl,
  appTitle: import.meta.env.VITE_APP_TITLE || defaultConfig.appTitle,
  appVersion: import.meta.env.VITE_APP_VERSION || defaultConfig.appVersion,
  isDevelopment: import.meta.env.VITE_DEV_MODE === 'true' || import.meta.env.DEV || defaultConfig.isDevelopment,
  logLevel: import.meta.env.VITE_LOG_LEVEL || defaultConfig.logLevel
};

// Export individual values for convenience
export const API_BASE_URL = config.apiBaseUrl;
export const APP_TITLE = config.appTitle;
export const APP_VERSION = config.appVersion;
export const IS_DEVELOPMENT = config.isDevelopment;
export const LOG_LEVEL = config.logLevel;

// Helper function to log configuration (useful for debugging)
export const logConfig = () => {
  if (IS_DEVELOPMENT) {
    console.log('App Configuration:', config);
  }
};