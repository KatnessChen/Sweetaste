<template>
  <div class="login__wrapper flex-row">
    <div class="login__body">
      <div class="login__body_left flex-column">
        <div class="login__body_left_item title">會員登入</div>
        <div class="login__body_left_item social">
          <div class="social_icon"></div>
          <div class="social_icon"></div>
          <div class="social_icon"></div>
        </div>
        <div class="login__body_left_item flex-row email">
          <div class="icon"></div>
          <input type="text" placeholder="電子信箱/手機號碼">
        </div>
        <div class="login__body_left_item flex-row password">
          <div class="icon"></div>
          <input type="text" placeholder="輸入使用者密碼">
        </div>
        <div class="login__body_left_item flex-row rememberMe">
          <span class="checkbox"></span>
          <span class="hint">記住我</span>
        </div>
        <div class="login__body_left_item btn">登入帳號</div>
      </div>
    </div>
    <div class="login__body">
      <div class="login__body_right flex-column">
        <div class="login__body_right_item title">連結社群帳號</div>
        <div class="login__body_right_item">
          <img src="../img/login-facebook.svg">
        </div>
        <div class="login__body_right_item">
          <img src="../img/login-google.svg">
        </div>
        <div class="login__body_right_item">
          <img src="../img/login-yahoo.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    }
  }
</script>

<style lang="sass">

.login__wrapper
  max-width: $footer-width
  margin: 0 auto
  margin-top: 35px
  .login__body
    width: 50%
    &.first-child
      +bgc(green)
    &:last-child
      padding: 20px 0
  .login__body_left
    @extend %full-size
    +bgc($basic-green)
    .login__body_left_item
      &.title
        flex: 1
        text-align: center
        @extend %font-style-5
        line-height: 129px
      &.social
        height: 100px
        display: flex
        background-color: $light-green
        justify-content: center
        align-items: center
        margin-bottom: $gutter*1.5
        .social_icon
          @extend %bg-position-initial
          background-size: 80px
          width: 105px
          height: 56px
          background-color: #fff
          &:first-child
            background-image: url("../img/login-facebook.svg")
          &:nth-child(2)
            background-image: url("../img/login-yahoo.svg")
          &:last-child
            background-image: url("../img/login-google.svg")
      &.email, &.password
        width: calc(100% - 60px)
        margin: 0 auto
        height: 56px
        +bgc($light-green)
        margin: 7.5px auto
        .icon
          flex: 0 0 56px
          @extend %bg-position-initial
        input[type="text"]
          flex: 1
          outline: none
          border: none
          +bgc($light-green)
          @extend %font-style-3
          font-weight: normal
      &.email
        &>.icon
          background-image: url("../img/account-24px.svg")
      &.password
        &>.icon
          background-image: url("../img/key-24px.svg")
      &.rememberMe
        width: calc(100% - 60px)
        margin: 7.5px auto 24px auto
        .checkbox
          margin-right: 10px
          width: 16px
          height: 16px
          +bgc($light-green)
        .hint
          @extend %font-style-1
          writing-mode: unset
          letter-spacing: unset
          line-height: unset
      &.btn
        height: 65px
        @extend %font-style-4
        text-align: center
        line-height: 65px
        +bgc($theme-yellow)
  .login__body_right
    +bgc($light-green)
    @extend %full-size
    padding: 40px 30px
    .login__body_right_item
      +bgc($white)
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 56px
      margin: 7.5px auto
      &>img
        width: 94px
      &.title
        flex: 1
        height: unset
        +bgc($light-green)
        @extend %font-style-6
        margin-bottom: $gutter
        &:before, &:after
          content: ''
          display: block
          width: 48px
          height: 1.5px
          +bgc($dim-gray)
          margin: 0 10px

@media (min-width: 600px)
  .login__wrapper
    .login__body
      .login__body_left_item.social
        display: none
  
@media (max-width: 600px)
  .login__wrapper
    flex-direction: column
    margin-top: 0
    .login__body
      width: 100%
      &:last-child
        padding: 0
        display: none
</style>
