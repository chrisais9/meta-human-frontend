<template>
  <v-container class="align-center justify-center" fill-height>
    <div class="d-flex text-h3 justify-center mb-12">민팅 테스트</div>
    <v-btn block>Connect Wallet</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class MintView extends Vue {}
</script>

<style lang="scss" scoped></style>
