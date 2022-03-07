<template>
  <transition-group name="list" appear>
    <slot></slot>
  </transition-group>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class ListTransition extends Vue {}
</script>

<style lang="scss">
// top
.list-enter-active,
.list-leave-active {
  transition: 0.25s opacity;
}
.list-leave-active {
  position: absolute;
}
.list-move {
  transition: 0.5s;
  z-index: 1;
}

.list-enter-from,
.list-leave-to {
  opacity: 0 !important;
}
.list-enter-to,
.list-leave-from {
  opacity: 1 !important;
}
</style>
