/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    animation: {
      aurora: "aurora 60s linear infinite",
    },
  },
};
export const plugins = [tailwindScrollbar({ nocompatible: true })];
