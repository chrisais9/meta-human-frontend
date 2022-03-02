<template>
  <div>
    <div class="mintform__container">
      <div class="item">
        <h3>NFT 이미지 등록</h3>
        <AppInputFile v-model:file="tmpNFTImageFile"></AppInputFile>
        <p>jpg, png 파일만 등록 가능해요.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class MintView extends Vue {
  tmpNFTImageFile!: File;
}
</script>

<style lang="scss">
.mintform__container {
  padding-left: 10%;
  padding-right: 10%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .item {
    width: 100%;

    h5 {
      font-weight: normal;
      font-size: 16px;

      margin-bottom: 10px;
    }

    p {
      font-weight: normal;
      font-size: 13px;
      color: $disabled-color;

      margin-top: 10px;
    }
  }
}
</style>
