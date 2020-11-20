<template>
  <div class="item-info" :class="{first: first, last: last}">
    <div class="item-info__icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16683 12.917L10.0002 7.08366L15.8335 12.917" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="item-info__content">
      <div @click="showMore=!showMore" class="item-info__block">
        <div class="item-info__data">
          <h4 class="item-info__status">Delivered {{first}}</h4>
          <p class="item-info__cities">Quebeck, Canada</p>
          <p class="item-info__notes">Notes: Dispatched with delaying</p>
        </div>
        <div class="item-info__date">
          15. 09. 2020; 12:30
        </div>
      </div>
      <div v-show="showMore" class="item-info__more">
        <div class="item-info__left-block">
          <p>Transport</p>
          <p>Weight, Kg</p>
          <p>Pieces</p>
          <p>TU Num</p>
          <p>Container №</p>
          <p>Shipment Doc</p>
        </div>
        <div class="item-info__right-block">
          <p>Railway</p>
          <p>120 000</p>
          <p>15</p>
          <p>A123-02</p>
          <p>KHF 612/FV657</p>
          <p>CMR 87946</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    first: {
      type: Boolean,
      default: false
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showMore: false
    }
  },
}
</script>

<style scoped>
  .item-info {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 0;
    position: relative;
    overflow: hidden;
  }
  .item-info__icon {
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
    background: rgba(153, 162, 173, 0.3);
    line-height: 40px;
    text-align: center;
  }
  .item-info__icon:after, .item-info__icon:before {
    position: absolute;
    content: '';
    width: 1px;
    background: rgba(153, 162, 173, 0.33);
    height: 100%;
    left: 20px;
    height: 100%;
  }
  .item-info__icon:before {
    top: 0px;
    height: 20px;
  }
  .item-info__icon:after {
    top: 60px;
  }
  .first .item-info__icon:before, .last .item-info__icon:after {
    height: 0;
  }
  .first .item-info__icon:after {
    top: 40px;
  }
  .item-info__content {
    width: calc(100% - 52px);
    padding-bottom: 20px;
    border-bottom: 0.5px solid rgba(153, 162, 173, 0.4);
  }
  .last .item-info__content {
    border: none;
  }
  .item-info__block {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .item-info__status {
    margin: 0;
    color: #22223B;
    font-weight: 600;
    font-size: 16px;
  }
  .item-info__cities {
    color: rgba(34, 34, 59, 0.5);
    font-weight: 500;
    font-size: 14px;
    margin: 4px 0;
  }
  .item-info__notes {
    margin: 0;
    font-weight: 600;
    font-size: 13px;
    color: rgba(34, 34, 59, 0.5);
  }
  .item-info__date {
    font-weight: 500;
    font-size: 12px;
    color: #99A2AD;
  }
  .item-info__more {
    display: flex;
    justify-content: space-between;
  }
  .item-info__left-block {
    font-size: 14px;
    color: #99A2AD;
    width: 50%;
  }
  .item-info__right-block {
    font-size: 14px;
    color: #22223B;
    text-align: right;
    width: 50%;
  }
</style>
