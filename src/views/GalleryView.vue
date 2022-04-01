<template>
  <v-container fluid>
    <v-row class="pa-12">
      <v-col class="d-none d-lg-block" cols="3">
        <div class="sticky-fixed">
          <div class="filter__header pb-3 text-h4 font-weight-black">FILTER</div>
          <v-divider />
        </div>
        <div class="sticky">
          <v-switch v-model="isGoldenMode" label="Golden Mode"></v-switch>
          <v-text-field append-icon="mdi-magnify" @click:append="appendIconCallback">
            Default Slot
          </v-text-field>
          <v-expansion-panels multiple variant="accordion">
            <v-expansion-panel v-for="(filter, i) in filters" :key="i" :title="filter.name">
              <v-expansion-panel-text>
                <v-radio-group v-model="radioGroup">
                  <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
                </v-radio-group>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
      <v-col cols="12" lg="9">
        <div class="d-flex grid__header pb-3">
          <div class="text-h4 font-weight-black">AZUKIS //10,000</div>
          <v-spacer />
          <v-btn class="d-flex" color="grey" elevation="0">
            <v-icon left>mdi-account-box-multiple</v-icon>
            MY AZUKIS
          </v-btn>
          <v-btn class="d-flex ml-3" color="grey" elevation="0">
            <v-icon left>mdi-shuffle-variant</v-icon>
            SHUFFLE
          </v-btn>
        </div>

        <v-divider />
        <div class="mt-5 mb-2 text-subtitle-1 font-weight-medium text-medium-emphasis">
          FILTER
          <span class="px-2 bg-grey rounded">0</span>
        </div>
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab value="temp"> 디자인 시안 NFT(임시) </v-tab>
          <v-tab value="contract"> 컨트랙트 NFT </v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item value="temp">
            <v-container fluid>
              <v-row>
                <v-col lg="3" cols="12" v-for="n in 24" :key="n">
                  <v-card elevation="0" @click="showDetailDialog(n % 4)">
                    <v-img class="rounded" :src="image(n % 4)"></v-img>
                    <v-card-title class="text-h6 justify-center font-weight-medium">
                      NO. 3122
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
          <v-window-item value="contract">
            <v-container fluid>
              <v-row>
                <v-col lg="3" cols="12" v-for="n in 24" :key="n">
                  <v-card elevation="0" @click="showDetailDialog(n % 4)">
                    <v-img class="rounded" :src="image(n % 4)"></v-img>
                    <v-card-title class="text-h6 justify-center font-weight-medium">
                      NO. 3122
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>

    <v-dialog v-model="isDetailDialogShown">
      <v-card class="overflow-auto" style="height: 500px">
        <v-row>
          <v-col cols="12">
            <v-img width="300" :src="image(clickedDetailId)" />
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
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class GalleryView extends Vue {
  isGoldenMode = true;
  isDetailDialogShown = false;
  clickedDetailId = 1;
  tab = "temp";

  get filters() {
    return [
      {
        name: "TYPE",
      },
      {
        name: "SPECIAL",
      },
      {
        name: "CLOTHING",
      },
      {
        name: "OFFHAND",
      },
      {
        name: "HAIR",
      },
      {
        name: "HEADGEAR",
      },
      {
        name: "FACE",
      },
      {
        name: "NECK",
      },
      {
        name: "EYES",
      },
      {
        name: "EAR",
      },
      {
        name: "BACKGROUND",
      },
    ];
  }

  image(value: number) {
    return new URL(`../assets/hb/hb${value}.png`, import.meta.url).href;
  }

  showDetailDialog(id: number) {
    this.clickedDetailId = id;
    this.isDetailDialogShown = true;
  }
}
</script>

<style lang="scss" scoped>
.sticky {
  height: 700px;
  overflow-y: scroll;
  position: sticky;
  position: -webkit-sticky;
  top: 200px;
}

.sticky-fixed {
  position: sticky;
  position: -webkit-sticky;
  top: 130px;
}
</style>
