<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <v-form>
          <div class="text-h4 font-weight-black">FILTER</div>
          <v-switch v-model="isGoldenMode" label="Golden Mode"></v-switch>
          <v-text-field append-icon="mdi-magnify" @click:append="appendIconCallback">
            Default Slot
          </v-text-field>
        </v-form>
      </v-col>
      <v-col cols="9">
        <div class="text-h4 font-weight-black">AZUKIS //10,000</div>
        <div class="text-subtitle-1 font-weight-black">FILTER</div>
        <v-row dense>
          <v-col cols="3" v-for="n in 12" :key="n">
            <v-card max-width="250px">
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

<style lang="scss" scoped></style>
