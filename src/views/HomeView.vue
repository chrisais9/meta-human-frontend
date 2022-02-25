<template>
  <div class="home">
    <p>플레이그라운드 NFT</p>
    <p>{{ walletAddress }}</p>
    <p>{{ collectionName }}</p>
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

  get collectionName(): string {
    return Web3Module.collectionName;
  }
}
</script>

<style lang="scss">
.home {
  height: 1000px;
  background: $background-color;

  p {
    color: white;
  }
}
</style>
