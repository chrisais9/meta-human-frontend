<template>
  <ListTransition tag="div" class="nft-list">
    <NFTItem :key="nft.image" :nft="nft" v-for="nft in nfts"></NFTItem>
  </ListTransition>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";
import ListTransition from "../transition/ListTransition.vue";
import NFTItem from "../nft/NFTItem.vue";
import { INFT } from "@/schema/INFT";

class Props {
  nfts = prop<INFT[]>({ default: [] });
}

@Options({
  components: {
    ListTransition,
    NFTItem,
  },
})
export default class MyThemeList extends Vue.with(Props) {}
</script>

<style lang="scss">
.nft-list {
  display: flex;
  flex-flow: row wrap;

  gap: 30px;
}
</style>
