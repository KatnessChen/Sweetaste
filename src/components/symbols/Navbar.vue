<template>
  <div>
    <div class="nav nav-desktop">
      <div class="img">
        <router-link to="/">
          <img src="../../img/logo-all-dark.svg">
        </router-link>
      </div>
      <div class="nav__options" v-for="item in options">
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
      <span>
        <router-link to="/cart">
          <img src="../../img/baseline-shopping_cart-24px.svg">
        </router-link>
      </span>
    </div>
    <div class="nav nav-mobile">
      <div class="hamburger">
        <label for="control"></label>
        <input type="checkbox" id="control">
        <div class="menu">
          <div class="menu__item flex-column" v-for="item in options">
            <router-link :to="item.path">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="img">
        <router-link to="/">
          <img src="../../img/logo-all-dark.svg">
        </router-link>
      </div>
      <span>
        <router-link to="/cart">
          <img src="../../img/baseline-shopping_cart-24px.svg">
        </router-link>
      </span>
    </div>

    <!-- 襯底色 -->
    <div class="nav__background colored"></div>
    <!-- 撐高度 -->
    <div class="nav__background"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "首頁",
          path: "/index"
        },
        {
          name: "甜點",
          path: "/products"
        },
        {
          name: "登入",
          path: "/login"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.nav
  position: fixed
  top: 0

.nav.nav-desktop
  max-width: $body-width
  left: calc(50% - 470px)
  width: 100%
  display: flex
  align-items: center
  text-align: right
  width: 100%
  height: 83px
  z-index: 3
  padding: 0 $gutter
  .img
    flex: 1
    min-width: 160px
    text-align: left
    margin-right: $gutter*2
    img
      height: 40px
      cursor: pointer
  .nav__options
    font-family: $font-family
    font-size: $fz
    width: 92px
    font-weight: 600
    cursor: pointer
  &>span
    width: 100px

.nav.nav-mobile
  +w-h(100%, 83px)
  display: flex
  z-index: 3
  justify-content: space-between
  align-items: center
  padding: $gutter
  .hamburger
    label
      display: block
      +w-h(24px, 20px)
      cursor: pointer
      border-top: 2px solid $basic-green
      border-bottom: 2px solid $basic-green
      position: relative
      &:before
        content: ""
        position: absolute
        width: 100%
        height: 2px
        left: 0
        top: 7px
        background-color: $basic-green
    input
      display: none
      &:checked
        ~.menu
          top: 83px
    .menu
      +absolute-tl(-200px, 0)
      +w-h(100%, 120px)
      +bgc($light-green)
      justify-content: space-between
      z-index: -1
      .menu__item
        text-align: center
        height: 32%
        line-height: 38.9px
        background-color: #ffffff33
        cursor: pointer
  .img
    width: 180px
    cursor: pointer
    z-index: 3
  &>span
    height: 20px
    cursor: pointer
    z-index: 3

.nav__background
  +w-h(100%, 83px)
.nav__background.colored
  position: fixed
  top: 0
  left: 0
  background-color: $white
  z-index: 2

@media (max-width: 940px)
  .nav.nav-desktop
    left: 0

@media (min-width: 500px)
  .nav.nav-mobile
    display: none

@media (max-width: 500px)
  .nav.nav-desktop
    display: none

</style>
