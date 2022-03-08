<template>
  <div class="store">
    <div class="store__header">
      <h1>NFT 스토어</h1>
    </div>
    <div class="store__content">
      <h1 v-if="nftList.length == 0">지갑을 연결해주세요</h1>
      <NFTList :nfts="nftList" v-else></NFTList>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NFTList from "@/components/nft/NFTList.vue";
import { INFT } from "@/schema/INFT";
import { NFTContractModule } from "@/store/web3/NFTContractModule";

@Options({
  components: {
    NFTList,
  },
})
export default class StoreView extends Vue {
  get nftList(): INFT[] {
    return NFTContractModule.collection;
  }
}
</script>

<style lang="scss">
.store {
  height: 100%;
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  .store__header {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 180px;
    padding-top: 10px;

    background-color: white;

    border-bottom: 1px solid #d2d5db;
  }
  .store__content {
    flex: 1;
    padding: 10px;

    overflow-y: scroll;
  }
}
</style>
