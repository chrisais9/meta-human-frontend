<template>
  <div id="gnb">
    <div class="gnb__left">
      <div class="gnb__logo" @click="$router.push('/')">
        <img alt="" class="desktop" src="@/assets/logo/logo_honeybadger.png" />
      </div>
      <nav>
        <router-link class="router-item" to="/">Home</router-link>
        <router-link class="router-item" to="/about">About</router-link>
        <router-link class="router-item" to="/mint">Mint</router-link>
        <router-link class="router-item" to="/store">Store</router-link>
        <a
          class="router-item"
          href="https://testnets.opensea.io/collection/honeyxbadger"
          target="_blank"
          >Opensea</a
        >
      </nav>
    </div>
    <div class="gnb__right">
      <a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
        <img class="social-icon" src="@/assets/icons/facebook.png" />
      </a>
      <a href="https://opensea.io" rel="noopener noreferrer" target="_blank">
        <img class="social-icon" src="@/assets/icons/opensea.svg" />
      </a>
      <a href="https://discord.com/branding" rel="noopener noreferrer" target="_blank">
        <img class="social-icon" src="@/assets/icons/discord.png" />
      </a>
      <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
        <img class="social-icon" src="@/assets/icons/twitter.png" />
      </a>
      <h3 class="gnb__right__wallet-address" v-if="walletAddress">{{ walletAddress }}</h3>
      <AppButton v-else class="gnb__action__connet-wallet" color="primary" @click="connectWallet"
        >Connect Wallet
      </AppButton>
    </div>
  </div>
  <div class="gnb__secondary-border"></div>
</template>

<script lang="ts">
import { NFTContractModule } from "@/store/web3/NFTContractModule";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class GNB extends Vue {
  async connectWallet(): Promise<void> {
    await NFTContractModule.connectWallet();
  }

  get walletAddress(): string {
    return NFTContractModule.walletAddress;
  }
}
</script>

<style lang="scss">
#gnb {
  @include clear-select;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 56px;
  height: 100px;

  border-bottom: 1px solid $primary-color;
  background: #040303;

  .gnb__left {
    display: flex;
    align-items: center;

    .gnb__logo {
      cursor: pointer;

      display: flex;
      height: 100%;

      margin-right: 60px;

      img {
        @include clear-select;
        height: 60px;
      }
    }

    .router-item {
      cursor: pointer;
      text-decoration: none;
      color: $primary-color;
      padding: 1em;

      font-size: 1em;
      font-weight: bold;
      white-space: nowrap;
      text-align: center;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .gnb__right {
    display: flex;
    align-items: center;

    .social-icon {
      width: 30px;
      height: 30px;
      margin-left: 1em;
    }

    .gnb__right__wallet-address {
      padding-left: 1em;
      color: white;
    }

    .gnb__action__connet-wallet {
      margin-left: 1em;
      font-size: 16px;
    }
  }
}

.gnb__secondary-border {
  background: #040303;
  height: 4px;
  border-bottom: 1px solid $primary-color;
}
</style>
