import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '40px',
        lg: '60px',
        xl: '60px',
      },
      screens: {
        xl: '1000px',
      },
    },
    extend: {
      colors: {
        black: '#000000',
        gray: {
          900: '#1a1a1a',
          800: '#333333',
          600: '#666666',
          400: '#999999',
          200: '#e5e5e5',
          100: '#f8f8f8',
        },
        white: '#ffffff',
        'primary-blue': '#0066FF',
        'primary-dark': '#0052CC',
        'primary-light': '#E6F2FF',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        // 다크 테마용
        'bg-primary-dark': '#0a0a0a',
        'bg-secondary-dark': '#1a1a1a',
        'text-primary-dark': '#ffffff',
        'text-secondary-dark': '#cccccc',
        'border-dark': '#333333',
        'accent-dark': '#1a1a2e',
      },
      fontFamily: {
        mono: [
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Roboto Mono',
          'Menlo',
          'monospace',
        ],
        sans: [
          'Inter',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        display: ['42px', '48px'],
        h1: ['32px', '40px'],
        h2: ['24px', '32px'],
        h3: ['20px', '28px'],
        'body-lg': ['18px', '28px'],
        body: ['16px', '24px'],
        'body-sm': ['14px', '22px'],
        code: ['14px', '20px'],
        caption: ['12px', '16px'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
        '6xl': '192px',
      },
      borderRadius: {
        none: '0px',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
      },
      transitionProperty: {
        DEFAULT: 'all',
      },
      transitionDuration: {
        DEFAULT: '200ms',
        fade: '400ms',
      },
      screens: {
        sm: '0px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config; 