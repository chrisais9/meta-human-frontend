<template>
  <div id="gnb">
    <div class="gnb__content">
      <img class="desktop" src="@/assets/logo.png" alt="" />
      <nav>
        <router-link class="router-item" to="/">Home</router-link>
        <router-link class="router-item" to="/about">About</router-link>
        <router-link class="router-item" to="/claim">Claim</router-link>
        <router-link class="router-item" to="/vote">Vote</router-link>
      </nav>
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

  .gnb__content {
    cursor: pointer;

    display: flex;
    align-items: center;

    padding: 30px;

    .router-item {
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
}

.gnb__secondary-border {
  background: #040303;
  height: 4px;
  border-bottom: 1px solid $primary-color;
}
</style>
