<template>
  <GNB></GNB>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GNB from "./components/GNB.vue";

@Options({
  components: {
    GNB,
  },
})
export default class App extends Vue {}
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
