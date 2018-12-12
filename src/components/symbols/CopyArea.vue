<template>
  <div>
    <div class="full-width">
      <div class="copy_wrapper">
        <div class="copy__wrapper__bg"></div>
        <div class="pic"></div>
        <div class="text">青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br><br>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</div>
        <div class="title"></div>
      </div>
    </div>
    <div class="full-width">
      <div class="copy_wrapper">
        <div class="copy__wrapper__bg"></div>
        <div class="pic"></div>
        <div class="text">青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br><br>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</div>
        <div class="title"></div>
      </div>
    </div>
    <div class="full-width">
      <div class="copy_wrapper">
        <div class="copy__wrapper__bg"></div>
        <div class="pic"></div>
        <div class="text">青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。<br><br>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</div>
        <div class="title"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>

.full-width
  position: relative
  margin-bottom: 80px
  &:nth-child(even)
    .copy_wrapper
      flex-direction: row-reverse
      .text
        order: 1

  &>.copy_wrapper
    max-width: 940px
    margin: 0 auto
    height: 460px
    display: flex
    justify-content: space-between
    
    .copy__wrapper__bg
      position: absolute
      left: 0
      +w-h(100%, calc(100% - 40px))
      top: 20px
      background-color: $light-green
      z-index: -1
    .title
      flex: 0 0 90px
      align-self: flex-start
      background-image: url("../../img/title1.svg")
      height: 307px
    .pic
      width: 460px
      background-image: url("../../img/img4.jpg")
      %bg-position
      background-position: 0 -150px
    .text
      width: 300px
      writing-mode: vertical-rl
      line-height: 40px
      font-family: $font-family
      font-size: $fz
      margin: 70px 0
      color: $text-color

// 小螢幕
@media (max-width: 900px)
  .full-width
    //復原
    &:nth-child(even)
      .copy_wrapper
        flex-direction: column-reverse
        .text
          order: -1
    &:nth-child(3)
      display: none
    &>.copy_wrapper
      height: auto
      flex-direction: column-reverse
      .copy__wrapper__bg
        display: none
      .pic
        width: 100%
        height: 350px
        background-position: center
        background-size: cover
        margin: 20px 0
        margin-bottom: 0
      .text
        width: 100%
        margin: 0
        padding: 30px
        writing-mode: unset
        order: -1
        background-color: $light-green
      .title
        width: 100%
        margin: 0
        background-image: url("../../img/sm-橫式-為什麼選擇了做甜點.svg")
        background-repeat: no-repeat
        background-position: center
        background-size: 196px
</style>

