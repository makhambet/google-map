<template>
  <div class="tabs">
    <div @click="$emit('change-tab', 'all')" :class="{'tab__item_active': tab === 'all'}" class="tabs__item tabs__item_left">Все</div>
    <div @click="$emit('change-tab', 'active')" :class="{'tab__item_active': tab === 'active'}" class="tabs__item">Активные</div>
    <div @click="$emit('change-tab', 'archive')" :class="{'tab__item_active': tab === 'archive'}" class="tabs__item tabs__item_right">Архив</div>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      default: 'all'
    },
  },
}
</script>

<style scoped>
  .tabs {
    display: flex;
    width: 100%;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .tabs__item {
    width: 33.3%;
    font-size: 14px;
    text-align: center;
    height: 32px;
    line-height: 32px;
    border: 1px solid #008E76;
    color: #008E76;
    cursor: pointer;
    transition: all .3s ease-in-out;
  }
  .tabs__item_left {
    border-radius: 10px 0px 0px 10px;
  }
  .tabs__item_right {
    border-radius: 0 10px 10px 0;
  }
  .tab__item_active {
    background: #008E76;
    color: #FFF;
  }
</style>
