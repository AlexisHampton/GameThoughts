import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        sky: {
          "default": "true",
          "prefersdark": "false",
          "color-scheme": "light",
          "base-100": "#F66271",
          "base-200": "#A1FAC3",
          "base-300": "#F98F34",
          "base-content": "oklch(27% 0.046 192.524)",
          "primary": "#F5F6A4",
          "primary-content": "oklch(41% 0.159 10.272)",
          "secondary": "#EE3438",
          "secondary-content": "#F5F6A4",
          "accent": "oklch(26% 0.079 36.259)",
          "accent-content": "#F5F6A4",
          "neutral": "oklch(27% 0.046 192.524)",
          "neutral-content": "#F5F6A4",
          "info": "#194853",
          "info-content": "#F5F6A4",
          "success": "#035932",
          "success-content": "#F5F6A4",
          "warning": "oklch(66% 0.179 58.318)",
          "warning-content": "#F5F6A4",
          "error": "#841B31",
          "error-content": "#F5F6A4",
          "--radius-selector": "2rem",
          "--radius-field": "2rem",
          "--radius-box": "2rem",
          "--size-selector": "0.21875rem",
          "--size-field": "0.21875rem",
          "--border": "1.5px",
          "--depth": "1",
          "--noise": "0"
        }

      }
    ],
  },
}

