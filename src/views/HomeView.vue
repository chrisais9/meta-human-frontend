<template>
  <div class="home">
    <p>플레이그라운드 NFT</p>
    <!-- <div v-if="isWalletConnected"><p>월렛 연결됨</p></div> -->
  </div>
</template>

<script lang="ts">
declare var window: any;

import { Web3Module } from "@/store/web3/Web3Module";
import { Options, Vue } from "vue-class-component";
import Web3 from "web3";

@Options({})
export default class HomeView extends Vue {
  async mounted() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  }
}
</script>

<style lang="scss">
.home {
  height: 1000px;
  background: $background-color;
}
</style>
