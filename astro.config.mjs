// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://evas-research.github.io",
  integrations: [icon(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
