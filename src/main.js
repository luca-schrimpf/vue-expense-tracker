import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.mount("#app");

const options = {
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
};

app.use(Toast, options);
