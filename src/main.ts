import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AppButton from "./components/button/AppButton.vue";
import AppInputFile from "./components/input/AppInputFile.vue";

const Vue = createApp(App);

Vue.use(store);
Vue.use(router);

Vue.component("AppButton", AppButton);
Vue.component("AppInputFile", AppInputFile);

Vue.mount("#app");
