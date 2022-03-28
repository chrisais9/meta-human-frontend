<template>
  <v-container fluid>
    <v-row>
      <v-form>
        <div class="text-h4 font-weight-black">FILTER</div>
        <v-switch v-model="isGoldenMode" label="Golden Mode"></v-switch>
        <v-text-field append-icon="mdi-magnify" @click:append="appendIconCallback">
          Default Slot
        </v-text-field>
      </v-form>
      <v-col>
        <v-row>
          <v-col cols="3" v-for="n in 12" :key="n">
            <v-card>
              <v-card-header-text>Test</v-card-header-text>
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
