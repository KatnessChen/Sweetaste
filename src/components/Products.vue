<template>
  <div class="flex-column centered">
    <div class="banner">
      <img src="../img/title3.svg">
    </div>
    <div class="gs flex-row">
      <div class="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <FilterMenu></FilterMenu>
      </div>
      <div class="col col-xs-12 col-sm-8 col-md-8 col-lg-8">
        <Card :prd_list="prdList"></Card>
      </div>
    </div>
    <div class="pagination flex-row">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import Card from "./symbols/Card";
import FilterMenu from "./symbols/Filter";
import Pagination from "./symbols/Pagination";
import axios from "axios";

export default {
  components: {
    Card,
    FilterMenu,
    Pagination
  },
  data() {
    return {
      url: "http://localhost:3000/prdList",
      prdList: [
        {
          image: "url('../img/img1.jpg')",
          name: "馬卡龍",
          price: "NT$ 450",
          action: "加入購物車"
        },
        {
          image: "url('../img/img1.jpg')",
          name: "卡納赫拉",
          price: "NT$ 450",
          action: "加入購物車"
        },
        {
          image: "url('../img/img1.jpg')",
          name: "沙麗",
          price: "NT$ 450",
          action: "加入購物車"
        },
        {
          image: "url('../img/img1.jpg')",
          name: "馬卡龍",
          price: "NT$ 450",
          action: "加入購物車"
        },
        {
          image: "url('../img/img1.jpg')",
          name: "卡納赫拉",
          price: "NT$ 450",
          action: "加入購物車"
        },
        {
          image: "url('../img/img1.jpg')",
          name: "沙麗",
          price: "NT$ 450",
          action: "加入購物車"
        }
      ]
    };
  }
};
</script>

<style lang="sass">

.centered
  .banner
    height: 496px
    width: 100%
    max-width: $body-width
    @extend %bg-position
    background-image: url('../img/img9.jpg')
    margin-bottom: $xl-margin
    position: relative
    img
      @extend %absolute-top-right
      top: $lg-margin
      right: $lg-margin
      width: 90px
  .gs
    width: 100%
    background: #fff
  .grid
    .col-1-3
      margin-right: $gutter
    .col-2-3
.pagination
  justify-content: flex-end

//在產品頁面 card RWD行為
@media (max-width: 600px)
  .gs
    .col-1-3, .col-2-3
      width: 100%
    .col.col-xs-12
      padding-right: 0
      padding-left: 0
      .prd__wrapper
        justify-content: center
        flex-wrap: wrap
        .prd
          margin-right: 0
  .pagination.flex-row
    justify-content: center
    margin-bottom: 40px
</style>
