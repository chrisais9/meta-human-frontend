import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const Vue = createApp(App);

Vue.use(vuetify);

Vue.mount("#app");
