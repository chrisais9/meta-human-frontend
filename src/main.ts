import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import i18n from "./i18n";

loadFonts();

const Vue = createApp(App);

Vue.use(store);
Vue.use(vuetify);
Vue.use(router);

Vue.use(i18n);

Vue.mount("#app");
