<template>
  <main class="home flex">
    <home-left></home-left>
    <home-map></home-map>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const HomeLeft = defineAsyncComponent(() =>
  import('@/components/home/HomeLeft')
)
const HomeMap = defineAsyncComponent(() =>
  import('@/components/home/HomeMap')
)
export default {
  name: 'Home',
  components: {
    HomeLeft,
    HomeMap
  }
}
</script>


<style lang="scss" scoped>
  .home {
    height: calc(100% - 74px);
    min-height: calc(100vh - 74px);
  }
</style>
