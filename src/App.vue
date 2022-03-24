<template>
  <v-app>
    <v-main>
      <LandingView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LandingView from "@/views/LandingView.vue";

@Options({
  components: {
    LandingView,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
video {
  max-width: 100%;
  max-height: 100%;
}
</style>
