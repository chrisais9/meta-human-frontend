<template>
  <v-container class="align-center justify-center" fill-height>
    <div class="d-flex text-h3 justify-center mb-12">민팅 테스트</div>
    <v-btn block @click="connectWallet" :disabled="!status || isWallectConnected">
      {{ isWallectConnected ? walletAddress : "Connect Wallet" }}
    </v-btn>
    <v-divider class="my-4" />
    <v-card>
      <v-card-title>NFT 정보</v-card-title>
      <v-chip v-if="status" class="ma-2" color="green" text-color="white">
        <v-icon start icon="mdi-check" />
        블럭체인 연결됨
      </v-chip>
      <v-chip v-else class="ma-2" color="red" text-color="white">
        <v-icon start icon="mdi-message-alert" />
        블럭체인 연결중..
      </v-chip>
      <v-card-text v-if="status">
        <div>컨트랙트 주소: {{ contractAddress }}</div>
        <div>NFT 콜렉션 이름 {{ collectionName }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { NFTContractModule } from "@/store/web3/NFTContractModule";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class MintView extends Vue {
  get status() {
    return NFTContractModule.isReady;
  }

  get contractAddress() {
    return NFTContractModule.contract.address;
  }

  get isWallectConnected() {
    return NFTContractModule.walletAddress.length != 0;
  }

  get walletAddress() {
    return NFTContractModule.walletAddress;
  }

  get collectionName() {
    return NFTContractModule.collectionName;
  }
  mounted() {
    NFTContractModule.establishContract();
  }
  connectWallet() {
    NFTContractModule.connectWallet();
  }
}
</script>

<style lang="scss" scoped></style>
