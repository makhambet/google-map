<template>
  <div class="home-left">
    <orders-section v-show="$route.name === 'Home'"></orders-section>
    <info-section v-show="$route.name === 'Tracking'"></info-section>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const OrdersSection = defineAsyncComponent(() =>
  import('@/components/orders/index')
)
const InfoSection = defineAsyncComponent(() =>
  import('@/components/orders/info')
)
export default {
  name: 'HomeLeft',
  data() {
    return {
      showInfo: true
    }
  },
  components: {
    OrdersSection,
    InfoSection
  }
}
</script>

<style scoped>
  .home-left {
    width: 398px;
    box-sizing: border-box;
    padding: 30px 0 0 25px;
  }
</style>
