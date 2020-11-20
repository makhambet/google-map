<template>
  <div class="orders">
    <header-tab @change-tab="changeTabValue" :tab="tabValue"></header-tab>
    <div class="orders__block">
      <order-item v-for="item in 10" :key="item"></order-item>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const HeaderTab = defineAsyncComponent(() =>
  import('@/components/orders/tab')
)
const OrderItem = defineAsyncComponent(() =>
  import('@/components/orders/order')
)
export default {
  data() {
    return {
      tabValue: 'all'
    }
  },
  methods: {
    changeTabValue(data) {
      this.tabValue = data
    }
  },
  components: {
    HeaderTab,
    OrderItem
  }

}
</script>

<style scoped>
  .orders__block {
    padding-right: 15px;
    width: calc(100% - 5px);
    box-sizing: border-box;
    overflow-y: scroll;
    margin-top: 40px;
    margin-right: 5px;
    max-height: calc(100vh - 180px);
  }
  .orders__block::-webkit-scrollbar {
    width: 5px;
  }
  .orders__block::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(34, 34, 59, 0.18);
  }
  .orders__block::-webkit-scrollbar-thumb {
    background-color: rgba(153, 162, 173, 0.69);
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(34, 34, 59, 0.08), 0px 2px 20px rgba(34, 34, 59, 0.08);
  }
  .orders__block > div:first-child {
    padding-top: 0;
  }
</style>
