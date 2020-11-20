<template>
  <div class="empty-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .empty-layout {
    background: url("/background.png") no-repeat;
    height: 100vh;
    width: 100%;
    background-position: center center;
    background-size: cover;
  }
</style>
