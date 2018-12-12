<template>
  <div class="prd__wrapper">
    <div class="prd" v-for="prd in prd_list">
      <div class="img"></div>
      <div class="info">
        <div class="left">{{prd.name}}</div>
        <div class="right">{{prd.price}}</div>
      </div>
      <div class="action">{{prd.action}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["prd_list"],
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>

.prd__wrapper
  width: 100%
  display: flex
  justify-content: flex-start
  flex-wrap: nowrap
  overflow: hidden
  .prd
    margin-right: $gutter
  .prd
    flex-basis: 250px
    text-align: center
    font-family: $font-family
    color: #3F5D45
    margin-bottom: $gutter
    &>.img
      padding-top: 120%
      @extend %bg-position
      position: relative
      &:before
        content: '本日精選'
        width: 36px
        height: 106.73px
        @extend %absolute-top-left
        left: 20px
        @extend %font-style-1
      &:after
        content: ''
        width: 22px
        height: 22px
        font-size: $md-fz
        background-image: url("../../img/heart-24px.svg")
        @extend %absolute-top-right
        top: 20px
        right: 20px
        color: $basic-green
    &:nth-child(n)
      &>.img
        background-image: url("../../img/img1.jpg")
    &:nth-child(2n)
      &>.img
        background-image: url("../../img/img2.jpg")
    &:nth-child(3n)
      &>.img
        background-image: url("../../img/img3.jpg")
    &>.info
      +bgc($white)
      height: 56px
      display: flex
      line-height: 56px
      font-size: 20px
      border-right: 1px solid $light-green
      border-left: 1px solid $light-green
      &>.left
        width: 173px
        border-right: 1px solid $light-green
        font-weight: 400
      &>.right
        width: 127px
        border-left: 1px solid $light-green
        font-weight: 800
    &>.action
      +bgc(#EAF0ED)
      height: 65px
      line-height: 65px
      font-size: 24px
      font-weight: 900


</style>
