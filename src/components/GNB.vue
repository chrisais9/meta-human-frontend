<template>
  <div id="gnb">
    <div class="gnb__left">
      <img class="desktop" src="@/assets/logo.png" alt="" />
      <nav>
        <router-link class="router-item" to="/">Home</router-link>
        <router-link class="router-item" to="/about">About</router-link>
        <router-link class="router-item" to="/claim">Claim</router-link>
        <router-link class="router-item" to="/vote">Vote</router-link>
      </nav>
    </div>
    <div class="gnb__right">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img class="social-icon" src="@/assets/icon/facebook.png" />
      </a>
      <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">
        <img class="social-icon" src="@/assets/icon/opensea.svg" />
      </a>
      <a href="https://discord.com/branding" target="_blank" rel="noopener noreferrer">
        <img class="social-icon" src="@/assets/icon/discord.png" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img class="social-icon" src="@/assets/icon/twitter.png" />
      </a>
    </div>
  </div>
  <div class="gnb__secondary-border"></div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class GNB extends Vue {}
</script>

<style lang="scss">
#gnb {
  @include clear-select;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 28px;
  height: 100px;

  border-bottom: 1px solid $primary-color;
  background: #040303;

  .gnb__left {
    display: flex;
    align-items: center;

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
  }
}

.gnb__secondary-border {
  background: #040303;
  height: 4px;
  border-bottom: 1px solid $primary-color;
}
</style>
