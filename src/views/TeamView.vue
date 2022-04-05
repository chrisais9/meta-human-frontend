<template>
  <v-container>
    <h1>This is The Team</h1>
    <v-carousel cycle>
      <v-carousel-item v-for="i in 4" :key="i">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="image(i)"></v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class TeamView extends Vue {
  image(value: number) {
    return new URL(`../assets/hb/hb${value}.png`, import.meta.url).href;
  }
}
</script>

<style lang="scss" scoped></style>
