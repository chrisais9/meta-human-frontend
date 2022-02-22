<template>
  <div class="home">
    <p>플레이그라운드 NFT</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home {
  height: 1000px;
  background: $background-color;
}
</style>
