<template>
  <div class="detail__wrapper flex_column" :style="detailStyle[0]">
    <div class="detail__header" :style="detailStyle[1]">訂單摘要</div>
    <div class="detail__body flex-column" :style="detailStyle[2]">
      <div class="detail__item flex-row" :style="detailStyle[3]">
        <div>小計</div>
        <div>NT$ {{amount}}</div>
      </div>
      <div class="detail__item flex-row" :style="detailStyle[3]">
        <div>運費</div>
        <div>NT$ {{fee}}</div>
      </div>
      <div class="detail__item flex-row" :style="detailStyle[3]">
        <div>總計</div>
        <div>NT$ {{total}}</div>
      </div>
    </div>
    <router-link to="/checkout">
      <div class="detail__footer" :style="detailStyle[4]">結帳</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["detailStyle"],
  data() {
    return {
      amount: 2700,
      fee: 300,
      // detail_style: [
      //   {
      //     // detail__wrapper
      //     outline: "1px solid #EAF0ED"
      //   },
      //   {
      //     // detail__header
      //     backgroundColor: "#EAF0ED",
      //     color: "#8DA291"
      //   },
      //   {
      //     // detail__body
      //     backgroundColor: "white"
      //   },
      //   {
      //     // detail__item
      //     backgroundColor: "white",
      //     color: "#8DA291"
      //   },
      //   {
      //     // detail__footer
      //     display: "none"
      //   }
      // ]
    };
  },
  computed: {
    total() {
      return this.amount + this.fee;
    }
  }
};
</script>

<style lang="sass" scoped>

.detail__wrapper
  +bgc($basic-green)
  .detail__header
    height: 63px
    @extend %font-style-4
    color: $text-color-light
    text-align: center
    position: relative
    line-height: 63px
    &:after
      content: ''
      height: 1px
      width: calc(100% - 40px)
      position: absolute
      bottom: 0
      left: 20px
      +bgc($text-color-light)
  .detail__body
    padding: 20px
    height: 127px
    justify-content: space-between
    .detail__item
      justify-content: space-between
      @extend %font-style-7
      height: 22px
      margin-bottom: 10px
      &:last-child
        flex: 1
        @extend %font-style-8
  .detail__footer
    height: 64px
    +bgc($theme-yellow)
    @extend %font-style-4
    text-align: center
    line-height: 65px
</style>