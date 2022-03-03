import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AppButton from "./components/button/AppButton.vue";
import AppInputImageFile from "./components/input/AppInputImageFile.vue";
import AppInput from "./components/input/AppInput.vue";

const Vue = createApp(App);

Vue.use(store);
Vue.use(router);

Vue.component("AppButton", AppButton);
Vue.component("AppInputImageFile", AppInputImageFile);
Vue.component("AppInput", AppInput);

Vue.mount("#app");
