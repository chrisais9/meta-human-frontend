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
      margin: 0;
      min-width: 0;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
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
        margin-inline-start: 0px;
        margin-inline-end: 0px;

        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        font-size: 3rem;
        color: white;
        font-size: 1rem;
        font-style: italic;
        margin-top: -2rem;
        margin-bottom: 0rem;
        max-width: 40em;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.55;
        background: radial-gradient(50% 50% at 50% 50%, #000000 20.62%, rgba(0, 0, 0, 0) 100%);
        padding: 4rem;
      }
    }
  }
}
</style>
