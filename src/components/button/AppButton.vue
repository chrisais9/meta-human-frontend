<template>
  <button class="app-button" :class="{ [color]: true, active: active }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

enum ButtonColor {
  MENU = "menu",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUB = "sub",

  BLACK = "black",
  GRAY = "gray",
}

class Props {
  color = prop<ButtonColor>({ default: ButtonColor.MENU });
  active = prop<boolean>({ default: false });
}

@Options({})
export default class AppButton extends Vue.with(Props) {}
</script>

<style lang="scss">
.app-button {
  cursor: pointer;
  @include clear-select;
  @include button;

  transition: 0.1s;
  white-space: nowrap;

  &.gray {
    color: $disabled-color;
    background-color: $background-color;
  }

  &.black {
    color: $menu-color;
    background-color: $menu-color--active;
  }

  &.menu {
    color: $menu-color--active;
    background-color: $menu-color;

    border: 2px solid $menu-color--active;

    &:hover,
    &.active,
    &:focus {
      color: $menu-color;
      background-color: $menu-color--active;
    }
  }

  &.primary {
    color: black;
    background-image: linear-gradient(90deg, rgb(0, 255, 209) 0%, rgb(0, 227, 97) 100%);

    &:hover,
    &.active,
    &:focus {
      background-image: linear-gradient(90deg, rgb(0, 206, 169) 0%, rgb(5, 179, 79) 100%);
    }
  }

  &.secondary {
    color: $primary-color;
    border: 2px solid $primary-color;

    &:hover,
    &.active,
    &:focus {
      color: $primary-color--hover;
      border: 2px solid $primary-color--hover;
    }
  }
  &.sub {
    color: $menu-color--active;
    background-color: #d2d5db;

    &:hover,
    &.active,
    &:focus {
      color: $menu-color--active;
      background-color: #d2d5db;
    }
  }

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1) brightness(0.9);
  }
}
</style>
