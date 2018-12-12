<template>
  <div class="footer__wrapper">
    <div class="footer__header">
      <div class="footer__top">
        <div class="img">
          <img src="../../img/logo-light.svg">
        </div>
        <div class="text">訂閱你我的甜蜜郵件</div>
        <div class="email">
          <div class="item left">
            <img src="../../img/email-24px.svg">
          </div>
          <div class="item right">
            <img src="../../img/arrow-24px.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="footer__body">
      <div class="footer__bottom">
        <div class="item left">
          <div class="t1">
            <img src="../../img/logotype.svg">
          </div>
          <div class="t2">07-1234-5678<br>sweetaste@email.com<br>800 高雄市新興區幸福路 520 號</div>
          <div class="t3">
            <img src="../../img/ic-line@.svg">
            <img src="../../img/ic-facebook.svg">
          </div> 
        </div>  
        <div class="item right">
          <div class="top">
            <img src="../../img/sm-今天是個吃甜點的好日子.svg">
          </div>
          <div class="bottom">© 2018 Sweetaste* All Rights Reserved</div>  
        </div>  
      </div>  
    </div>
  </div>
</template>

<script>
</script>

<style lang="sass" scoped>

.footer__wrapper
  width: 100%
  margin-top: $xl-margin
  .footer__header
    background-color: $basic-green
    margin: 0
    padding: $gutter $gutter*2.5
    .footer__top
      max-width: $footer-width
      margin: 0 auto
      display: flex
      align-items: center
      flex-wrap: wrap
      justify-content: center
      .img
        width: $lg-margin
        height: $lg-margin
        margin-right: $gutter
      .text
        @extend %font-style-2
        @extend %text-hidden
        text-align: center
        margin-right: $gutter
      .email
        width: 100%
        flex: 1
        height: 56px
        min-width: 200px
        background: $light-green
        display: flex
        align-items: center
        .item
          display: flex
          align-items: center
          img
            color: $basic-green
        .left
          height: 100%
          flex: 1
          margin-left: $gutter
        .right
          width: 64px
          height: 100%
          background: $theme-yellow
          justify-content: space-around
  .footer__body
    background-color: $light-green
    padding: 0 $gutter
    .footer__bottom
      box-sizing: border-box
      max-width: $footer-width
      margin: 0 auto
      padding: 35px 0
      height: 341px
      display: flex
      justify-content: space-between
      .item
        height: 100%
        display: flex
        flex-direction: column
        &.left
          img
            width: 171.22px
          .t1
            flex: 1
          .t2
            @extend %font-style-3
          .t3
            margin-top: $gutter
            img
              width: $lg-fz
              margin-right: $sl-margin
        &.right
          justify-content: space-between
          align-items: flex-end
          img
            width: 59.28px
          .bottom
            font-size: $fz
            color: $basic-green

@media (max-width: 650px)
  .footer__wrapper
    .footer__header
      padding: $gutter*1.5
      .img
        margin-bottom: $gutter
      .text
        margin-bottom: $gutter
      .email
        flex: unset
    .footer__body
      .footer__bottom
        flex-direction: column
        height: unset
        .item.left
          margin-bottom: $gutter
          .t2
            margin: 30px 0 20px 0;
        .item.right
          align-items: initial
          .top
            display: none
          .bottom

</style>
