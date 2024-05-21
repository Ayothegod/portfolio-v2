import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

// import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), icon(), react()],
  // output: "server",
  // adapter: node({
  //   mode: "standalone"
  // })
});