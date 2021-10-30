// vite.config.js
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("amplify-"),
        },
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
};
