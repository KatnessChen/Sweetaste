<template>
  <div>
    <Banner class="centered"></Banner>
    <CopyArea></CopyArea>
    <Card :prd_list="prdList" class="centered"></Card>
  </div>
</template>

<script>
import Navbar from "./symbols/Navbar";
import Banner from "./symbols/Banner";
import CopyArea from "./symbols/CopyArea";
import Card from "./symbols/Card";

export default {
  components: {
    Navbar,
    Banner,
    CopyArea,
    Card
  },
  data() {
    return {
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
        }
      ]
    };
  }
};
</script>

<style lang="sass">
//在首頁的 card RWD行為
@media (max-width: 700px)
  .prd__wrapper.centered
    justify-content: center
    .prd
      width: 100%
      margin-right: 0
      &:not(:first-child)
        display: none
</style>
