<template>
  <v-container fluid>
    <v-row class="pa-12">
      <v-col class="d-none d-lg-block" cols="3">
        <v-form>
          <div class="filter__header pb-3 text-h4 font-weight-black">FILTER</div>
          <v-switch v-model="isGoldenMode" label="Golden Mode"></v-switch>
          <v-text-field append-icon="mdi-magnify" @click:append="appendIconCallback">
            Default Slot
          </v-text-field>
        </v-form>
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
        <div class="text-subtitle-1 font-weight-black">FILTER</div>
        <v-row dense>
          <v-col lg="3" cols="6" v-for="n in 12" :key="n">
            <v-card>
              <v-img
                class="rounded"
                src="https://azk.imgix.net/images/13223978-547c-42de-9224-5efd4b56cc2a.png?fm=jpg&w=800"
              ></v-img>
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
}
</script>

<style lang="scss">
.filter__header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.grid__header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
