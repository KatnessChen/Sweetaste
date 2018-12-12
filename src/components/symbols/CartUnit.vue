<template>
  <div class="cartunit__wrapper flex-column">
    <div class="cartunit__body flex-row" v-for="item in cartList">
      <div class="aa flex-row">
        <div class="cartunit__img"></div>
        <div class="bb flex-row">
          <div class="cartunit__info">
            <div class="cartunit__info__unit title">{{item.name}}</div>
            <div class="cartunit__info__unit price">NT$ {{item.price}}</div>
          </div>
          <div class="cartunit__panel flex-row">
            <div class="cartunit__panel__unit flex-column">-</div>
            <div class="cartunit__panel__unit flex-column">{{item.number}}</div>
            <div class="cartunit__panel__unit flex-column">+</div>
          </div>
        </div>
      </div>
      <div class="cartunit__subtotal">NT$ {{item.number * item.price}}</div>
      <img src="../../img/delete-24px.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "../../img/heart-24px.svg",
      cartList: [
        {
          // backgroudImage: "url('../../img/img1.jpg')",
          name: "焦糖馬卡龍",
          price: 450,
          number: 2
        },
        {
          // img: "url('../img/img1.jpg')",
          name: "甜甜圈",
          price: 150,
          number: 3
        },
        {
          // img: "url('../img/img1.jpg')",
          name: "香蕉蛋糕",
          price: 250,
          number: 3
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

.cartunit__body
  justify-content: space-between
  align-items: center
  padding: 20px 0
  border-top: 0.5px solid $light-green
  .cartunit__img
    flex-basis: 110px
    height: 110px
    @extend %bg-position
    border: none
  .cartunit__info
    flex-basis: 107px
    .cartunit__info__unit.title
      +font($md-fz, $text-color-deep)
      margin-bottom: $sl-margin
    .cartunit__info__unit.price
      +font($fz, $text-color-deep)
  .cartunit__panel
    align-items: center
    .cartunit__panel__unit
      +w-h(46px, 46px)
      +font($fz ,$text-color-deep)
      border: 1px solid $light-green
      text-align: center
      justify-content: center
    .cartunit__panel__unit+.cartunit__panel__unit
      border-left: none
  .cartunit__subtotal
    +font($md-fz, $text-color-deep, bolder)
  &:nth-child(n)
    .cartunit__img
      background-image: url("../../img/img1.jpg")
  &:nth-child(2n)
    .cartunit__img
      background-image: url("../../img/img2.jpg")
  &:nth-child(3n)
    .cartunit__img
      background-image: url("../../img/img3.jpg")

@media (max-width: 601px)
  .cartunit__body
    .cartunit__img
      .bb
        flex-direction: column!important
    
</style>
