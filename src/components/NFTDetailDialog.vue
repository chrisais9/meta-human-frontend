<template>
  <v-card class="overflow-auto" style="height: 500px">
    <v-row>
      <v-col cols="12">
        <v-img width="300" :src="image(id)" />
      </v-col>
      <v-col cols="12">
        <div class="text-caption">L.L.HB</div>
      </v-col>
      <v-col>
        <div cols="6" class="d-flex justify-space-between">
          <div class="text-h4">#3122</div>
        </div>
      </v-col>
      <v-col cols="6">
        <v-btn
          href="https://testnets.opensea.io/assets/0x6e93f075d41dbb74c37dba9ba19a0b33c6545d4d/12"
          target="_black"
        >
          오픈씨
        </v-btn>
      </v-col>

      <v-col cols="4">
        <v-sheet class="ma-4 pa-2" color="grey">
          <v-row>
            <v-col>
              <v-icon>mdi-human</v-icon>
            </v-col>
            <v-col>
              <div class="text-caption">TYPE:</div>
              <div class="text-body">GHOST</div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-4 pa-2" color="grey">
          <v-row>
            <v-col>
              <v-icon cla>mdi-human</v-icon>
            </v-col>
            <v-col>
              <div class="text-caption">TYPE:</div>
              <div class="text-body">GHOST</div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="ma-4 pa-2" color="grey">
          <v-row>
            <v-col>
              <v-icon cla>mdi-human</v-icon>
            </v-col>
            <v-col>
              <div class="text-caption">TYPE:</div>
              <div class="text-body">GHOST</div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class Props {
  id = prop<number>({ required: true });
}

@Options({})
export default class NFTDetailDialog extends Vue.with(Props) {
  image(value: number) {
    return new URL(`../assets/hb/hb${value}.png`, import.meta.url).href;
  }
}
</script>

<style></style>
