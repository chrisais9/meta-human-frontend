<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Playground NFT 세계에 오신것을 환영합니다." />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
