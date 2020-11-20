<template>
  <div class="info">
    <div class="info__header">
      <h3 class="info__id">ID123-R1-1217-20</h3>
      <div class="info__download">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9678 17.3526C19.937 16.7959 19.7901 16.0488 19.5626 14.9117L19.5195 14.6961C19.4112 14.1546 19.7624 13.6277 20.304 13.5194C20.8455 13.4111 21.3724 13.7623 21.4807 14.3039L21.5238 14.5194C21.5286 14.5435 21.5334 14.5676 21.5382 14.5915C21.7473 15.6367 21.9251 16.5254 21.9647 17.2421C22.0068 18.0026 21.9077 18.7589 21.3805 19.402C20.8534 20.045 20.1311 20.2905 19.3772 20.3984C18.6666 20.5001 17.7603 20.5001 16.6944 20.5C16.67 20.5 16.6455 20.5 16.6209 20.5L6.3058 20.5C5.23992 20.5001 4.33356 20.5001 3.623 20.3984C2.86907 20.2905 2.14684 20.045 1.61968 19.402C1.09253 18.7589 0.993414 18.0026 1.03547 17.2421C1.07511 16.5254 1.2529 15.6367 1.46199 14.5915L1.51952 14.3039C1.62783 13.7623 2.15466 13.4111 2.69622 13.5194C3.23778 13.6277 3.58899 14.1546 3.48068 14.6961L3.43757 14.9117C3.21014 16.0488 3.06321 16.7959 3.03242 17.3526C3.00314 17.8819 3.0934 18.045 3.16637 18.134C3.23933 18.223 3.38152 18.3435 3.90634 18.4186C4.45826 18.4976 5.21963 18.5 6.37932 18.5L16.6209 18.5C17.7806 18.5 18.5419 18.4976 19.0939 18.4186C19.6187 18.3435 19.7609 18.223 19.8338 18.134C19.9068 18.045 19.9971 17.8819 19.9678 17.3526Z" fill="#00BFA5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2072 11.7929C14.8167 11.4024 14.1835 11.4024 13.793 11.7929L12.5001 13.0858L12.5001 6.5C12.5001 5.94771 12.0524 5.5 11.5001 5.5C10.9478 5.5 10.5001 5.94771 10.5001 6.5L10.5001 13.0858L9.20721 11.7929C8.81668 11.4024 8.18352 11.4024 7.79299 11.7929C7.40247 12.1834 7.40247 12.8166 7.79299 13.2071L10.793 16.2071C11.1835 16.5976 11.8167 16.5976 12.2072 16.2071L15.2072 13.2071C15.5977 12.8166 15.5977 12.1834 15.2072 11.7929Z" fill="#00BFA5"/>
        </svg>
      </div>
    </div>
    <div class="info__body">
      <item-info v-for="item in 10" :key="item" :first="item === 1" :last="item===10"></item-info>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const ItemInfo = defineAsyncComponent(() =>
  import('@/components/orders/itemInfo')
)
export default {
  components: {
    ItemInfo
  }
}
</script>

<style scoped>
  .info {

  }
  .info__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    box-sizing: border-box;
  }
  .info__id {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
  }
  .info__download {
    position: relative;
    cursor: pointer;
  }
  .info__download:after, .info__download:before {
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    background: #22223B;
    position: absolute;
    transition: opacity, visibility .3s ease-in;
  }
  .info__download:hover.info__download:after, .info__download:hover.info__download:before {
    opacity: 1;
    visibility: visible;
  }
  .info__download:before {
    content: '';
    border-radius: 3px;
    top: calc(100% + 2px);
    right: 2px;
    width: 20px;
    height: 20px;
    transform: rotate(-45deg);
  }
  .info__download:after {
    content: 'Скачать Excel файл';
    font-size: 13px;
    padding: 9px 15px;
    color: #FFF;
    width: 114px;
    border-radius: 10px;
    top: calc(100% + 10px);
    right: -10px;
  }
  .info__body {
    margin-top: 30px;
    padding-right: 20px;
    overflow-y: auto;
    max-height: calc(100vh - 180px);
  }
  .info__body::-webkit-scrollbar {
    width: 5px;
  }
  .info__body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(34, 34, 59, 0.18);
  }
  .info__body::-webkit-scrollbar-thumb {
    background-color: rgba(153, 162, 173, 0.69);
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(34, 34, 59, 0.08), 0px 2px 20px rgba(34, 34, 59, 0.08);
  }
  .info__body > div:first-child {
    padding-top: 0;
    border: none;
  }
</style>
