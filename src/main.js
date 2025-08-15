import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

if (import.meta.env.PROD) {
  const script = document.createElement("script");
  script.src = "/_vercel/insights/script.js";
  script.defer = true;
  document.head.appendChild(script);
}

createApp(App).use(router).mount("#app");
