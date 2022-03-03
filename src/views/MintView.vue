<template>
  <div>
    <div class="mintform__container">
      <div class="item">
        <h3>NFT 이미지 등록</h3>
        <AppInputImageFile class="image"></AppInputImageFile>
        <h5>이름</h5>
        <AppInput v-model="nftName" class="input"> </AppInput>
        <h5>설명</h5>
        <AppInput v-model="nftDescription" class="input"> </AppInput>
        <AppButton class="action__connet-wallet" color="primary">민팅하기</AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class MintView extends Vue {
  tmpNFTImageFile!: File;

  nftName = "";
  nftDescription = "";
}
</script>

<style lang="scss">
.mintform__container {
  width: 100%;
  height: 100%;

  background-color: white;

  display: flex;
  justify-content: center;

  overflow-y: auto;

  .item {
    width: 100%;
    max-width: 600px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    padding-bottom: 200px;

    h3 {
      margin-top: 74px;

      font-weight: normal;
      font-size: 30px;

      text-align: center;
    }

    h5 {
      margin-top: 35px;
    }

    .image {
      margin-top: 55px;
      height: 200px;
    }

    .input {
      @include input-field;
    }

    .action__connet-wallet {
      margin-top: 55px;
    }
  }
}
</style>
