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
        <div class="text-subtitle-1 font-weight-black">FILTER</div>
        <v-row>
          <v-col lg="3" cols="6" v-for="n in 4" :key="n">
            <v-card>
              <v-img class="rounded" :src="hb0"></v-img>
              <v-card-subtitle>Azuki</v-card-subtitle>
              <v-card-title>Test</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="3" cols="6" v-for="n in 4" :key="n">
            <v-card>
              <v-img class="rounded" :src="hb1"></v-img>
              <v-card-subtitle>Azuki</v-card-subtitle>
              <v-card-title>Test</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="3" cols="6" v-for="n in 4" :key="n">
            <v-card>
              <v-img class="rounded" :src="hb2"></v-img>
              <v-card-subtitle>Azuki</v-card-subtitle>
              <v-card-title>Test</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="3" cols="6" v-for="n in 4" :key="n">
            <v-card>
              <v-img class="rounded" :src="hb3"></v-img>
              <v-card-subtitle>Azuki</v-card-subtitle>
              <v-card-title>Test</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class GalleryView extends Vue {
  isGoldenMode = true;

  get hb0() {
    return new URL(`../assets/hb/hb0.png`, import.meta.url).href;
  }

  get hb1() {
    return new URL(`../assets/hb/hb1.png`, import.meta.url).href;
  }

  get hb2() {
    return new URL(`../assets/hb/hb2.png`, import.meta.url).href;
  }

  get hb3() {
    return new URL(`../assets/hb/hb3.png`, import.meta.url).href;
  }

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
}
</script>

<style lang="scss">
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
