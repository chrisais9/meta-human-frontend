import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AppButton from "./components/button/AppButton.vue";
import AppInputImageFile from "./components/input/AppInputImageFile.vue";
import AppInput from "./components/input/AppInput.vue";
import AppSelect from "./components/input/AppSelect.vue";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const Vue = createApp(App);

Vue.use(store);
Vue.use(router);

Vue.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
});

Vue.component("AppButton", AppButton);
Vue.component("AppInputImageFile", AppInputImageFile);
Vue.component("AppInput", AppInput);
Vue.component("AppSelect", AppSelect);

Vue.mount("#app");
