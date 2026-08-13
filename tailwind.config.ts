import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { navy: "#0b1f33", ink: "#17212b", muted: "#667085", gold: "#d49b32", brand: "#0d6efd", off: "#f7f9fb" },
      boxShadow: { soft: "0 18px 50px rgba(11,31,51,.10)" },
      maxWidth: { site: "1180px" }
    },
  },
  plugins: [],
} satisfies Config;
