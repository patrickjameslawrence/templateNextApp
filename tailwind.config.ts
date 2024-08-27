/** @format */

import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
        hoveredPrimary: colors.blue[400],
        secondary: colors.orange[500],
        hoveredSecondary: colors.orange[400],
        tertiary: colors.neutral[500],
        hoveredTertiary: colors.neutral[400],
        lightBackground: colors.neutral[200],
        hoveredLightBackground: colors.neutral[300],
        lightBorder: colors.neutral[300],
        darkBackground: colors.neutral[950],
        hoveredDarkBackground: colors.neutral[900],
        darkBorder: colors.neutral[900],
        success: colors.green[500],
        warning: colors.yellow[500],
        destructive: colors.red[500],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
