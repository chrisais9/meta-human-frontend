<template>
  <v-container class="align-center justify-center" fill-height>
    <div class="d-flex text-h3 justify-center mb-12">{{ $t("mint.header_title") }}</div>

    <v-card>
      <v-card-title>{{ $t("mint.status_title") }}</v-card-title>
      <v-chip v-if="status" class="ma-2" color="green" text-color="white">
        <v-icon start icon="mdi-check" />
        {{ $t("mint.status_blockchain_connected") }}
      </v-chip>
      <v-chip v-else class="ma-2" color="red" text-color="white">
        <v-icon start icon="mdi-message-alert" />
        {{ $t("mint.status_contract_address") }}
      </v-chip>
      <v-chip v-if="isWallectConnected" class="ma-2" color="green" text-color="white">
        <v-icon start icon="mdi-check" />
        {{ $t("mint.status_wallet_connected") }}
      </v-chip>
      <v-card-text v-if="status">
        <div>
          {{ $t("mint.status_contract_address") }}:
          <a :href="`https://rinkeby.etherscan.io/address/${contractAddress}`" target="_blank">{{
            contractAddress
          }}</a>
        </div>
        <div>{{ $t("mint.status_collection_name") }}: {{ collectionName }}</div>
        <div>{{ $t("mint.status_minted_amount") }}: {{ totalSupply }}</div>
      </v-card-text>
    </v-card>
    <v-divider class="my-4" />
    <v-text-field
      v-model.number="mintAmount"
      label="민팅할 NFT 갯수"
      variant="outlined"
      clearable
    ></v-text-field>
    <v-btn v-if="!isWallectConnected" block @click="connectWallet" :disabled="!status">
      {{ isWallectConnected ? walletAddress : "Connect Wallet" }}
    </v-btn>
    <v-btn v-else block text color="yellow" @click="mint(mintAmount)"> 민팅하기 </v-btn>
  </v-container>
</template>

<script lang="ts">
import { NFTContractModule } from "@/store/web3/NFTContractModule";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class MintView extends Vue {
  mintAmount = 1;

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

  get totalSupply() {
    return NFTContractModule.totalSupply;
  }

  connectWallet() {
    NFTContractModule.connectWallet();
  }

  mint(mintAmount: number) {
    NFTContractModule.mint({ mintAmount: mintAmount });
  }
}
</script>

<style lang="scss" scoped></style>
