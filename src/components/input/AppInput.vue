<template>
  <div
    class="app-input"
    v-bind="getDivBind"
    :class="{ reject: isReject, 'app-input--textarea': isTextarea }"
  >
    <textarea
      class="app-input__input"
      rows="5"
      ref="inputElement"
      :value="modelValue"
      @input="input"
      v-bind="getInputBind"
      v-if="isTextarea"
    ></textarea>
    <input
      class="app-input__input"
      ref="inputElement"
      :value="modelValue"
      @input="input"
      v-bind="getInputBind"
      v-else
    />
    <div class="app-input__append">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class Props {
  modelValue = prop<string>({ default: "" });
  verified = prop<boolean>({ default: false });
  banChar = prop<RegExp>({ required: false });
  rule = prop<(str: string) => boolean>({ required: false });
  min = prop<number>({ required: false });
  max = prop<number>({ default: 0 });
  isTextarea = prop<boolean>({ default: false });
}
// TODO: 공백 트림
@Options({
  inheritAttrs: false,
})
export default class AppInput extends Vue.with(Props) {
  isReject = false;
  isClearMinLength = false;

  inputElement!: HTMLInputElement;
  class = this.$attrs.class;

  mounted() {
    this.inputElement = this.$refs.inputElement as HTMLInputElement;
    this.input();
  }

  input() {
    this.checkRule();
    this.$emit("update:modelValue", this.inputElement.value);
  }

  checkRule() {
    let rejectStack = false;

    if (this.banChar && this.banChar.test(this.inputElement.value))
      this.inputElement.value = this.inputElement.value.replace(this.banChar, "");

    // min 검사
    if (
      this.min !== undefined &&
      this.inputElement.value.length < this.min &&
      this.isClearMinLength
    ) {
      rejectStack = true;
    }

    // max 검사
    if (this.max && this.inputElement.value.length > this.max) {
      rejectStack = true;
      this.inputElement.value = this.inputElement.value.substr(0, this.max);
    }

    if (!this.isClearMinLength && this.inputElement.value.length >= (this.min || 0))
      this.isClearMinLength = true;

    this.isReject = rejectStack;

    let ruleResult = this.rule && this.rule(this.inputElement.value);
    this.$emit("update:verified", ruleResult && !this.isReject);
  }
  get getDivBind() {
    return {
      class: this.$attrs.class,
      style: this.$attrs.style,
    };
  }
  get getInputBind() {
    let result = Object.assign({}, this.$attrs);
    delete result.class;
    delete result.style;
    return result;
  }
}
</script>

<style lang="scss">
.app-input {
  display: flex;
  width: 100%;
  height: 48px;

  font-size: 16px;

  border: 1px solid #f1f3f5;
  border-radius: 8px;

  background: #f1f3f5;

  transition: 0.25s;

  // padding-bottom: 8px;

  line-height: 24px;
  color: $menu-color--active;

  &:focus-within,
  &.active {
    background: $menu-color;

    border: 1px solid #ffa3c0;
    box-shadow: 0px 5px 10px #ffa3c044;
  }
  &.reject {
    animation: rejectAnimation 0.25s;
  }
}

.app-input__input {
  flex: 1;
  height: 100%;
  width: 100%;

  padding-left: 1.5em;

  outline: none;
  outline-width: 0;
  border: none;
  border-radius: 8px;
  background: none;

  font-size: 1em;

  &::placeholder {
    color: $disabled-color;
  }
}

.app-input--textarea {
  padding: 12px 12px 12px 20px;
  height: fit-content;

  .app-input__input {
    padding: 0;
    resize: vertical;
  }
}

.app-input__append {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes rejectAnimation {
  0% {
    border: 1px solid red;
    transform: translateX(0px);
  }
  25% {
    border: 1px solid red;
    transform: translateX(-5px);
  }
  50% {
    border: 1px solid red;
    transform: translateX(+5px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
