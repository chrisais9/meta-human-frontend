<template>
  <div class="nft-item">
    <img :src="nft.image" />
    <h3>{{ nft.name }}</h3>
    <h5>{{ nft.description }}</h5>
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

  width: 320px;

  display: flex;
  flex-direction: column;

  border-radius: 15px;

  background-color: #e8eaed;

  overflow: hidden;
}
</style>
