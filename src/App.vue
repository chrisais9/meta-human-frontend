<template>
  <GNB></GNB>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GNB from "./components/GNB.vue";
import { NFTContractModule } from "./store/web3/NFTContractModule";

@Options({
  components: {
    GNB,
  },
})
export default class App extends Vue {
  async mounted() {
    await NFTContractModule.establishContract();
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  overflow: hidden;
}
</style>
