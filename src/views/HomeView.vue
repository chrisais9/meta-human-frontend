<template>
  <v-container class="ma-0 pa-0" fluid>
    <video class="d-lg-block" autoplay loop id="myVideo">
      <source src="https://azk.imgix.net/saturatedvideo.mp4" type="video/mp4" />
    </video>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
video {
  height: 100vh;
  width: 100%;
  margin-top: -64px;
  object-fit: cover;
}
</style>
