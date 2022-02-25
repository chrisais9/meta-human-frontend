<template>
  <div class="home">
    <p>플레이그라운드 NFT</p>
    <p>{{ walletAddress }}</p>
  </div>
</template>

<script lang="ts">
import { Web3Module } from "@/store/web3/Web3Module";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {
  get walletAddress(): string {
    return Web3Module.walletAddress;
  }
}
</script>

<style lang="scss">
.home {
  height: 1000px;
  background: $background-color;
}
</style>
