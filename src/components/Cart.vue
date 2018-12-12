<template>
  <div class="cart__wrapper gs flex-row centered">
    <div class="cart__items col col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
      <div class="cartunit__header">您的購物車</div>
      <CartUnit></CartUnit>
    </div>
    <div class="cart__total col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
      <Detail :detailStyle="detailStyle"></Detail>
    </div>
  </div>
</template>

<script>
import Detail from "./symbols/Detail";
import CartUnit from "./symbols/CartUnit";

export default {
  components: {
    Detail,
    CartUnit
  },
  data() {
    return {
      detailStyle: [
        {
          // detail__wrapper
        },
        {
          // detail__header
        },
        {
          // detail__body
        },
        {
          // detail__item
        },
        {
          // detail__footer
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

.cart__wrapper
  &.gs
    +bgc(white)
    .cartunit__header
      +w-h(100%, 65px)
      +font(24px, $basic-green, bolder)
      text-align: center
      line-height: 65px
      +bgc($light-green)
</style>
