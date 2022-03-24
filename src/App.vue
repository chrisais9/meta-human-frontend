<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {
  mounted() {
    this.$router.push("/landing");
  }
}
</script>

<style lang="scss" scoped>
video {
  max-width: 100%;
  max-height: 100%;
}
</style>
