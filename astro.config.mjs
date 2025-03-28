// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.himanshubhardwaz.com",
  integrations: [mdx(), sitemap()],
  output: "static",
  markdown: {
    shikiConfig: {
      wrap: true,
      themes: {
        light: "dracula",
        dark: "github-dark",
      },
    },
  },
});
