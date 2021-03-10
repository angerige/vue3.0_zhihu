import { createApp } from "vue";
import App from "./App.vue";
// store
import store from "./store/index";
// router
import router from "./router/index";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).use(router).mount("#app");
