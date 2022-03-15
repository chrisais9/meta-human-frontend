<template>
  <div class="nft-item">
    <img class="nft-item__preview" :src="imageFromIPFS" />
    <h3 class="nft-item__article title">{{ nft.name }}</h3>
  </div>
</template>

<script lang="ts">
import { IHoneyXBadger } from "@/schema/IHoneyXBadger";
import { Options, prop, Vue } from "vue-class-component";

class Props {
  nft = prop<IHoneyXBadger>({ required: true });
}

@Options({})
export default class NFTItem extends Vue.with(Props) {
  get imageFromIPFS(): string {
    return `https://ipfs.infura.io/ipfs/${this.nft.image}`;
  }
}
</script>

<style lang="scss">
.nft-item {
  @include clear-select;

  position: relative;

  width: 400px;

  display: flex;
  flex-direction: column;

  border-radius: 15px;

  background-color: #e8eaed;

  overflow: hidden;
  padding-bottom: 10px;

  .nft-item__preview {
    margin-bottom: 10px;
    height: 400px;
  }

  .nft-item__article {
    padding: 0 10px;

    &.collection {
      color: gray;
      font-size: 13px;
    }

    &.title {
      font-size: 13px;
    }
  }
}
</style>
