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
  mounted() {
    NFTContractModule.establishContract();
  }
}
</script>

<style lang="scss" scoped></style>
