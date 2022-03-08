<template>
  <div class="nft-item">
    <img class="nft-item__preview" :src="nft.image" />
    <h3 class="nft-item__article collection">{{ nft.collection }}</h3>
    <h3 class="nft-item__article title">{{ nft.name }}</h3>
  </div>
</template>

<script lang="ts">
import { INFT } from "@/schema/INFT";
import { Options, prop, Vue } from "vue-class-component";

class Props {
  nft = prop<INFT>({ required: true });
}

@Options({})
export default class NFTItem extends Vue.with(Props) {}
</script>

<style lang="scss">
.nft-item {
  @include clear-select;

  position: relative;

  width: 330px;

  display: flex;
  flex-direction: column;

  border-radius: 15px;

  background-color: #e8eaed;

  overflow: hidden;
  padding-bottom: 10px;

  .nft-item__preview {
    border-radius: 15px;
    margin-bottom: 10px;
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
