<template>
  <div class="store">
    <div class="store__header">
      <h1>NFT 목록</h1>
    </div>
    <div class="store__content">
      <div class="nft-item">
        <div class="nft-item__info">
          <img
            src="https://lh3.googleusercontent.com/ChEQIVMhZC2ZGpht-LeM0l9GHySAm8_clQ9m5ddOE6KHBLDfhEtEjE_qujW036khZa3fGhKUqMbHls_gpxtBUtbTlq4J1NVYeUS8=w318"
          />
          <h1>테스트</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class StoreView extends Vue {}
</script>

<style lang="scss">
.store {
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  .store__header {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 180px;
    padding-top: 10px;

    background-color: white;

    border-bottom: 1px solid #d2d5db;
  }
  .my-theme__content {
    flex: 1;

    overflow-y: scroll;
    padding: 62px 8%;
  }
}
</style>
