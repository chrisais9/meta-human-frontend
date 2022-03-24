<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="offset-lg-4 mb-n8" lg="4" style="z-index: 1">
        <v-img width="300px" src="https://ik.imagekit.io/bayc/assets/bayc-logo.png" />
      </v-col>

      <v-col class="justify-end d-none d-lg-flex" lg="4">
        <v-icon class="px-4">mdi-youtube</v-icon>
        <v-icon class="px-4">mdi-instagram</v-icon>
        <v-icon class="px-4">mdi-discord</v-icon>
        <v-icon class="px-4">mdi-twitter</v-icon>
      </v-col>

      <v-col class="px-0" cols="12">
        <v-container class="mb-4 mb-lg-5"
          ><video autoplay loop id="myVideo">
            <source
              src="https://ik.imagekit.io/bayc/assets/club-landing.mp4"
              type="video/mp4"
            /></video
        ></v-container>
      </v-col>

      <v-col lg="4">
        <v-row class="pt-lg-4">
          <v-col>
            <div class="text-h5">WELCOME TO THE BORED APE YACHT CLUB</div>
            <v-btn
              color="green"
              class="mb-4"
              block
              @click="
                $router.push('/home');
                console.log('hello');
              "
              >ENTER</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NFTContractModule } from "@/store/web3/NFTContractModule";

@Options({})
export default class LandingView extends Vue {
  get alignments() {
    return ["start", "center", "end"];
  }
  async mounted() {
    await NFTContractModule.establishContract();
  }
}
</script>

<style lang="scss" scoped>
video {
  max-width: 100%;
  max-height: 100%;
}
</style>
