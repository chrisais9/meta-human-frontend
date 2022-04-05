<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import { NFTContractModule } from "./store/web3/NFTContractModule";

@Options({
  components: {
    AppBar,
  },
})
export default class App extends Vue {
  created() {
    const lang = navigator.language;

    if (lang.indexOf("ko") != -1) {
      this.$i18n.locale = "ko";
    } else {
      this.$i18n.locale = "en";
    }

    NFTContractModule.establishContract();
  }
}
</script>

<style lang="scss" scoped></style>
