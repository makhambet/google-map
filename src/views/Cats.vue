<template>
  <div class="cats">
    <div class="cats__block">
      <div class="cats-btn cats__all-applications">
        ВСЕГО ЗАЯВОК: 69
      </div>
      <div class="cats-btn cats__active-applications">
        АКТИВНЫХ: 18
      </div>
      <div class="cats-btn cats__completed-applications">
        ВЫПОЛНЕННЫХ: 41
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .cats__all-applications, .cats__completed-applications {
    background: #FFF;
    color: #000;
  }
  .cats__active-applications {
    background: #00BFA5;
    color: #FFF;
    margin: 44px 0;
  }
  .cats__block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 74px);
  }
  .cats-btn {
    width: 408px;
    height: 56px;
    font-size: 0.8em;
    text-align: center;
    line-height: 56px;
    box-sizing: border-box;
    border-radius: 10px;
  }
</style>
