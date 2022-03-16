<template>
  <div>
    <div class="mintform__container">
      <div class="item">
        <h3>NFT 민팅 (테스트)</h3>
        <h4>민팅 가능 여부: {{ isMintSaleActive ? "민트 가능" : "민트 불가능" }}</h4>
        <h4>최대 민팅 수량: {{ isReady ? maxMintAmount : "로딩중.." }}</h4>
        <div class="item__mintAmount">
          <h4>민트할 수량:</h4>
          <AppSelect v-if="isReady" :items="mintableAmountList" v-model="mintAmount"></AppSelect>
          <h4 v-else>로딩중...</h4>
        </div>

        <AppButton
          class="action__mint"
          color="primary"
          @click="mint"
          :isActive="isReady && isWalletConnected"
          >민팅하기</AppButton
        >
        <h5 v-if="!isWalletConnected">지갑을 연결해주세요</h5>
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

  mintAmount = 1;

  isMintInProgress = false;

  get isReady(): boolean {
    return NFTContractModule.isReady;
  }

  get isWalletConnected(): boolean {
    return NFTContractModule.walletAddress != "";
  }

  get isMintSaleActive(): boolean {
    return NFTContractModule.isMintSaleActive;
  }

  get maxMintAmount(): string {
    return String(NFTContractModule.maxMintAmount);
  }

  get mintableAmountList(): number[] {
    // 1 to 5
    return [...Array(6).keys()].slice(1);
  }

  async mint(): Promise<void> {
    if (!NFTContractModule.walletAddress) {
      window.alert("지갑을 연결해주세요");
      return;
    }
    if (this.isMintInProgress) {
      return;
    }
    this.isMintInProgress = true;
    await NFTContractModule.mint({ mintAmount: this.mintAmount });
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

    h3 {
      margin-top: 74px;

      font-weight: bold;
      font-size: 30px;

      text-align: center;
    }

    .item__mintAmount {
      margin-top: 20px;
      display: flex;

      h4 {
        margin-right: 15px;
      }
    }

    h5 {
      color: red;
    }

    .action__mint {
      margin-top: 30px;
    }
  }
}
</style>
