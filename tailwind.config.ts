import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Noto Sans JP (loaded via next/font in the layout) with the default
        // system stack as fallback. Applies to `font-sans` and the base body.
        sans: ["var(--font-noto-sans-jp)", ...defaultTheme.fontFamily.sans],
        // Noto Sans Mono (next/font) with the default mono stack as fallback.
        mono: ["var(--font-noto-sans-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
export default config;
