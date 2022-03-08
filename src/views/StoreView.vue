<template>
  <div class="store">
    <div class="store__header">
      <h1>NFT 스토어</h1>
    </div>
    <div class="store__content">
      <NFTList :nfts="nftList"></NFTList>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NFTList from "@/components/nft/NFTList.vue";
import { INFT } from "@/schema/INFT";

@Options({
  components: {
    NFTList,
  },
})
export default class StoreView extends Vue {
  get nftList(): INFT[] {
    return [
      {
        collection: "HoneyXBadger",
        name: "Ailen Boy #4040",
        description: "ddd",
        image:
          "https://lh3.googleusercontent.com/ChEQIVMhZC2ZGpht-LeM0l9GHySAm8_clQ9m5ddOE6KHBLDfhEtEjE_qujW036khZa3fGhKUqMbHls_gpxtBUtbTlq4J1NVYeUS8=w282",
      },
      {
        collection: "HoneyXBadger",
        name: "Ailen Boy #2013",
        description: "ddd",
        image:
          "https://lh3.googleusercontent.com/72_B3X9g8DlbMIvtKMyYLA9pmSF7eJk9TEdW3f5sEAnmZMO_NfIuc6KyPuKL7Bv6fh_Sjgn150gCxb4eR0aAVylnNB2NrP5SgkFuzw=w282",
      },
      {
        collection: "HoneyXBadger",
        name: "Ailen Boy #9923",
        description: "ddd",
        image:
          "https://lh3.googleusercontent.com/ArCsuu_Is95ijrMzVRloLjeoQIPbvCHfEZegFHPGgGZvMbRQ8L4vABQyUhCBK-PGJx1XnHqV47j6EPcGQ6rEZ2WrHlN6aQEYUdeCO3Y=w282",
      },
      {
        collection: "HoneyXBadger",
        name: "Ailen Boy #7340",
        description: "ddd",
        image:
          "https://lh3.googleusercontent.com/KGmkblVbGbCk7nMwuhr878QFbJoDIGNQB_2RbxiUzY7ZEuc6sQt4GKvucodk_BIFPEMcHVdMKlMWHzFojhvGQgGUvnK1ZGUh59VQ=w282",
      },
      {
        collection: "HoneyXBadger",
        name: "Ailen Boy #9837",
        description: "ddd",
        image:
          "https://lh3.googleusercontent.com/yMj4ZzGZQ2TeVX5WRGAM67rl197UJn7EWfTHSWklzWf_mvzQMejr9Pr9GN8XcyJhCcvAqCdJAq-mpW3PbxfOX8RyC-Q2Kk46-i5o=w282",
      },
      {
        collection: "HoneyXBadger",
        name: "Ailen Boy #9018",
        description: "ddd",
        image:
          "https://lh3.googleusercontent.com/x1Im4S3bwMfCdTmkS7p4M-r2KJisLLwlmQOcC1SCRXexURSziFHxshinBXfozt5aDsLWR461qpYUtw4ZG2yO-tpAl7hKUgz1d97q=w282",
      },
    ];
  }
}
</script>

<style lang="scss">
.store {
  height: 100%;
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

    overflow-y: scroll;
    padding: 62px 8%;
  }
}
</style>
