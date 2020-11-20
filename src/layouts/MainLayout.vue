<template>
  <div class="main-layout">
    <main-header></main-header>
    <slot></slot>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const MainHeader = defineAsyncComponent(() =>
  import('@/components/header/index')
)
export default {
  components: {
    MainHeader
  }
}
</script>

<style scoped>

</style>
