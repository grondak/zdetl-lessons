import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  applyPolyfills,
  defineCustomElements,
} from "@aws-amplify/ui-components/loader";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

// >>New - Configuring Auth Module
Auth.configure(awsconfig);

const app = createApp(App).use(store).use(router);
app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("amplify-");
app.mount("#app");
