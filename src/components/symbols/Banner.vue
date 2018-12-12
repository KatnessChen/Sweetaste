<template>
  <div class="banner__wrapper">
    <div class="banner__image"></div>
    <div class="banner__subWrapper">
      <div class="banner__sub">
        <div class="bg"></div>
        <div class="title">{{tab1}}</div>
      </div>
      <div class="banner__sub">
        <div class="bg"></div>
        <div class="title">{{tab2}}</div>
      </div>
      <div class="banner__sub">
        <div class="bg"></div>
        <div class="title">{{tab3}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab1: "本日精選",
      tab2: "人氣推薦",
      tab3: "新品上市"
    };
  }
};
</script>

<style lang="sass" scoped>

.banner__wrapper
  height: 570px
  z-index: -2
  margin-bottom: 250px!important
  position: relative
  .banner__image
    height: 100%
    background-image: url("../../img/img1.jpg")
    @extend %bg-position
  .banner__subWrapper
    position: absolute
    top: calc(100% - 89px)
    display: flex
    justify-content: center
    +w-h(100%, 256px)
    margin: 0 auto
    z-index: 1
    .banner__sub
      display: flex
      justify-content: space-around
      align-items: center
      position: relative
      overflow: hidden
      +w-h(258px, 100%)
      &:first-child
        &:before
          background-color: #FFE180
        .bg
          background-image: url("../../img/img2.jpg")
      &:nth-child(2)
        border-left: 2px solid white
        border-right: 2px solid white
        &:before
          background-color: $basic-green
        .bg
          background-image: url("../../img/img3.jpg")
      &:last-child
        &:before
          background-color: $basic-green
        .bg            
          background-image: url("../../img/img4.jpg")
      
      &:first-child, &:nth-child(2), &:last-child
        &:before
          +w-h
          content: ''
          display: block
          opacity: 0.8

      .bg, .title
        position: absolute
      .bg
        z-index: -1
        top: 0
        left: 0
        +w-h
        background-size: contain
        filter: blur(5px)
      .title
        width: 24px
        line-height: 1.2
        font-family: $font-family
        font-size: 24px
        font-weight: 400
        color: #fff
        &:first-child
          color: $basic-green

@media (max-width: 650px)
  .banner__wrapper
    height: 500px
    margin-bottom: 150px!important
    .banner__subWrapper
      height: 200px
      
</style>
