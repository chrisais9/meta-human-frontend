<template>
  <div class="home">
    <p>플레이그라운드 NFT</p>
    <!-- <div v-if="isWalletConnected"><p>월렛 연결됨</p></div> -->
  </div>
</template>

<script lang="ts">
import { Web3Module } from "@/store/web3/Web3Module";
import { Options, Vue } from "vue-class-component";
import Web3 from "web3";

@Options({})
export default class HomeView extends Vue {
  async mounted() {
    await Web3Module.connectWallet();
  }
}
</script>

<style lang="scss">
.home {
  height: 1000px;
  background: $background-color;
}
</style>
