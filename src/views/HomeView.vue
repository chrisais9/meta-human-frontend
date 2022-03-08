<template>
  <div id="home">
    <div class="home__intro">
      <div class="home__intro__content">
        <div class="home__intro__content-logo">
          <img src="@/assets/logo/logo_with_glow.png" />
        </div>
        <h1>
          CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online
          experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even
          look familiar!
        </h1>
      </div>
    </div>
    <p>플레이그라운드 NFT</p>
    <p>연결된 지갑주소: {{ walletAddress }}</p>
    <p>콜렉션 이름: {{ collectionName }}</p>
    <p>콜렉션내 NFT 수량: {{ totalSupply }}</p>
    <p>불러온 NFT 수량: {{ collectionSize }}</p>
  </div>
</template>

<script lang="ts">
import { NFTContractModule } from "@/store/web3/NFTContractModule";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {
  get walletAddress(): string {
    return NFTContractModule.walletAddress;
  }

  get collectionName(): string {
    return NFTContractModule.collectionName;
  }

  get totalSupply(): string {
    return NFTContractModule.totalSupply.toString();
  }

  get collectionSize(): string {
    return NFTContractModule.collection.length.toString();
  }
}
</script>

<style lang="scss">
#home {
  .home__intro {
    background-position: top 30% center;
    background-image: url("~@/assets/image/hero_bg.png");
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;

    .home__intro__content {
      box-sizing: border-box;
      min-width: 0;
      width: 100%;
      margin: 0 auto;
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 75rem;
      position: relative;

      .home__intro__content-logo {
        max-width: 75rem;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }

      h1 {
        display: block;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0;
        margin-inline-end: 0;

        box-sizing: border-box;
        min-width: 0;
        color: white;
        font-size: 1rem;
        font-style: italic;
        max-width: 40em;
        margin: -2rem auto 0rem;
        line-height: 1.55;
        background: radial-gradient(50% 50% at 50% 50%, #000000 20.62%, rgba(0, 0, 0, 0) 100%);
        padding: 4rem;
      }
    }
  }
}
</style>
