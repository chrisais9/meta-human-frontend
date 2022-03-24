<template>
  <v-main>
    <v-container class="ma-0" fluid>
      <v-toolbar flat color="transparent">
        <v-img :src="logo" />
        <v-spacer></v-spacer>
        <v-btn text>HOME</v-btn>
        <v-btn text>GALLERY</v-btn>
        <v-btn text>THE GARDEN</v-btn>
        <v-btn text>CAREERS</v-btn>
        <v-btn text>MANIFESTO</v-btn>
        <v-btn text>MINDMAP</v-btn>
        <v-btn text>SHOP</v-btn>
      </v-toolbar>
      <video autoplay loop id="myVideo">
        <source src="https://azk.imgix.net/saturatedvideo.mp4" type="video/mp4" />
      </video>
    </v-container>

    <v-container fluid> </v-container>
  </v-main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {
  get logo() {
    return new URL(`../assets/logo_azuki.svg`, import.meta.url).href;
  }
}
</script>

<style lang="scss" scoped>
video {
  max-width: 100%;
  max-height: 100%;
}
</style>
