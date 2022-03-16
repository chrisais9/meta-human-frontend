<template>
  <select class="app-select" :class="type" v-model="value" @change="input">
    <option v-for="(item, idx) in items" :value="values[idx] || item" :key="item">
      {{ item }} {{ imageSize && item === "이미지" ? `(${imageSize})` : "" }}
    </option>
  </select>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class Props {
  items = prop<any[]>({ required: true });
  values = prop<any[]>({ default: [] });
  type = prop<string>({ default: "normal" });
  imageSize = prop<string>({ default: "" });
  modelValue = prop<string>({});
}

@Options({})
export default class AppSelect extends Vue.with(Props) {
  value = "";

  created() {
    // let itemIdx = this.items.indexOf(this.modelValue);
    // let valueIdx = this.values.indexOf(this.modelValue);

    // if (itemIdx != -1) this.value = this.items[itemIdx];
    // if (valueIdx != -1) this.value = this.items[valueIdx];

    if (!this.value) this.value = this.modelValue || this.values[0] || this.items[0];
    this.input();
  }
  input() {
    this.$emit("update:modelValue", this.value);
  }
}
</script>

<style lang="scss">
.app-select {
  position: relative;

  cursor: pointer;

  background: $background-color;

  height: 48px;

  background-color: #ffffff;
  background-image: url("~@/assets/icons/expand.svg");
  background-position: calc(100% - 15px) center;
  background-repeat: no-repeat;

  -webkit-appearance: none;

  outline: none;
  outline-width: 0;
  border: none;
  border: 1px solid #d2d5db;
  border-radius: 8px;

  padding: 12px 20px;
  padding-right: 40px;
  padding-bottom: 8px;

  font-size: 16px;

  transition: 0.25s;

  &.gray {
    background-color: $background-color;
    border: 1px solid $background-color;
  }

  &:focus {
    background-color: $menu-color;

    border: 1px solid #ffa3c0;
    box-shadow: 0px 5px 10px #ffa3c044;
  }
}
</style>
