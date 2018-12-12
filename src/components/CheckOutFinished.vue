<template>
  <div class="wrapper flex-column">
    <Bar :step="4" class="bar"></Bar>
    <h2>付款成功</h2>
    <div class="btn flex-row">繼續逛逛</div>
  </div>
</template>

<script>
import Bar from "./symbols/progress-bar"
export default {
  data() {
    return {};
  },
  components: {
    Bar
  }
};
</script>

<style lang="sass" scoped>

.wrapper
  @extend %body-width-center
  @extend %bg-position
  height: 460px
  background-image: url("../img/img10.jpg")
  justify-content: center
  align-items: center
  
  .bar
    .bar__bar
      +bgc(#3F5D45)
  h2
    +font(46px, #3F5D45)
    margin: 40px 0 50px 0
  .btn
    +w-h(300px, 65px)
    +bgc(#FFE180)
    +font(24px, #3F5D45, bold)
    justify-content: space-around
    align-items: center
</style>