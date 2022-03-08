<template>
  <div>
    <div class="mintform__container">
      <div class="item">
        <h3>NFT 등록 (테스트)</h3>
        <AppInputImageFile class="image" @update:file="updateImage"></AppInputImageFile>
        <h5>이름</h5>
        <AppInput v-model="nftName" class="input"> </AppInput>
        <h5>설명</h5>
        <AppInput v-model="nftDescription" class="input"> </AppInput>
        <AppButton class="action__mint" color="primary" @click="mint">민팅하기</AppButton>
        <h2 v-if="isMintInProgress">민트 진행중...(잠시후 메타마스크에 거래 승인 팝업이 뜹니다)</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NFTContractModule } from "@/store/web3/NFTContractModule";

@Options({})
export default class MintView extends Vue {
  nftImageFile!: File;
  nftName = "";
  nftDescription = "";

  isMintInProgress = false;

  async mint(): Promise<void> {
    if (!NFTContractModule.walletAddress) {
      window.alert("지갑을 먼저 연결해주세요");
      return;
    }
    if (!this.nftImageFile || !this.nftName || !this.nftDescription) {
      window.alert("입력 필드를 확인해주세요");
      return;
    }
    if (this.isMintInProgress) {
      return;
    }
    this.isMintInProgress = true;
    await NFTContractModule.mint({
      imageFile: this.nftImageFile,
      name: this.nftName,
      description: this.nftDescription,
    });
    this.isMintInProgress = false;
    window.alert(`${this.nftName} 성공적으로 민트 되었습니다.`);
  }

  updateImage(file: File): void {
    this.nftImageFile = file;
  }
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

      font-weight: bold;
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

    .action__mint {
      margin-top: 55px;
    }
  }
}
</style>
