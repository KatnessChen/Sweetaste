<template>
  <div class="chk__wrapper grid flex-row">
    <div class="col-3-5">
      <!-- TODO 這樣上一頁直接離開 checkout 跟一般使用習慣不同
        1.切換時手動寫入 router histroy
        2.改成用 router 並且動態綁定 checkout step
        偏好二
      -->
      <div v-if="step1">
        <Shifting @finished="toPayment"></Shifting>
      </div>
      <div v-else-if="step2">
        <Payment @finished="toInvoice"></Payment>
      </div>
      <div v-else>
        <Invoice></Invoice>
      </div>
    </div>
    <div class="col-2-5">
      <Detail :detailStyle="detailStyle"></Detail>
    </div>
  </div>
</template>

<script>
import Shifting from "./symbols/checkout-shifting";
import Payment from "./symbols/checkout-payment";
import Invoice from "./symbols/checkout-invoice";
import Detail from "./symbols/Detail";

export default {
  data() {
    return {
      step1: true,
      step2: false,
      detailStyle: [
        {
          // detail__wrapper
          outline: "1px solid #EAF0ED"
        },
        {
          // detail__header
          backgroundColor: "#EAF0ED",
          color: "#8DA291"
        },
        {
          // detail__body
          backgroundColor: "white"
        },
        {
          // detail__item
          backgroundColor: "white",
          color: "#8DA291"
        },
        {
          // detail__footer
          display: "none"
        }
      ]
    };
  },
  methods: {
    toPayment() {
      this.step1 = !this.step1;
      this.step2 = !this.step2;
    },
    toInvoice() {
      this.step2 = !this.step2;
    }
  },
  components: {
    Shifting,
    Payment,
    Invoice,
    Detail
  }
};
</script>

<style lang="sass">

.chk__wrapper
  @extend %footer-width-center
  .col-3-5
    +bgc()
    margin-right: $gutter


//chkout steps 子組件共用樣式
.chksteps__wrapper
  +bgc($basic-green)
  .chksteps__header
    padding: 36px 36px 0 36px
    +font(36px, #EAF0ED, bolder)
    justify-content: space-between
    align-items: center
  .chksteps__body
    padding: 36px 36px 27px 36px
    .chksteps__body__item
      margin-bottom: $gutter
      input, select
        padding: 0 20px
        height: 49px
        flex: 1
        +font
      input+input, select+select
        margin-left: 10px
      label
        +font(20px, #EAF0ED, bold)
        margin-bottom: $gutter*0.5
      &:last-child
          margin-bottom: 0
      &.two-col
        .input_group
          width: calc(50% - 5px)
        .input_group+.input_group
          margin-left: $gutter*0.5
  .chksteps__footer
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    height: 60px
    +bgc(#FFE180)
    .chksteps__footer__title
      +font(24px, #3F5D45, bold)
</style>
