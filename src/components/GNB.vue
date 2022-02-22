<template>
  <div id="the-gnb">
    <div class="the-gnb__left">
      <div class="the-gnb__logo" @click="$router.push('/')">
        <img class="desktop" src="@/assets/logo.png" alt="" />
      </div>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/claim">Claim</router-link>
      <router-link to="/vote">Vote</router-link>
    </nav>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class GNB extends Vue {}
</script>

<style lang="scss">
#the-gnb {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 60px;
  height: 100px;

  border-bottom: 1px solid #d2d5db;
}

nav {
  padding: 1em;
}
</style>
