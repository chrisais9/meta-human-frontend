<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-row>
      <v-col>
        <video autoplay loop id="myVideo">
          <source src="https://azk.imgix.net/saturatedvideo.mp4" type="video/mp4" />
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";

@Options({
  components: {
    AppBar,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
video {
  height: 100%;
  width: 100%;
  margin-top: -64px;
  object-fit: fill;
}
</style>
