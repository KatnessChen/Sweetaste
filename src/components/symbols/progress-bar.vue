<template>
  <div class="bar__wrapper flex-row">
    <span class="bar__circle"></span>
    <span class="bar__bar"></span>
    <span class="bar__circle"></span>
    <span class="bar__bar"></span>
    <span class="bar__circle"></span>
  </div>
</template>

<script>
export default {
  props: ["step"],
  data() {
    return {};
  },
  mounted() {
    let index = this.$props.step - 1;
    if (index !== 3){
      document.getElementsByClassName("bar__circle")[index].classList.add("current");
    }
    
    if (index === 1) {
      document.getElementsByClassName("bar__circle")[index - 1].classList.add("done");
    } else if (index === 2) {
      document.getElementsByClassName("bar__circle")[index - 1].classList.add("done");
      document.getElementsByClassName("bar__circle")[index - 2].classList.add("done");
    } else if (index === 3){
      let node = Array.from(document.getElementsByClassName("bar__circle"))
      node.forEach(el => { el.classList.add("done") })
    }
  }
};
</script>

<style lang="sass" scoped>

.bar__wrapper
  +w-h(188px, 24px)
  align-items: center
  .bar__circle
    +w-h(20px, 20px)
    +bgc(#3F5D45)
    border: 1px solid #8DA291
    border-radius: 50%
    &.current
      +bgc(white)
      border: 1px solid white
      box-shadow: 0 0 0 2.5px #3F5D45 inset
    &.done
      background-image: url("../../img/round_check_circle_white_18dp.png")
      background-size: 22px
      background-position: -2px -2px
      border: 1px solid white
      &+.bar__bar
        +bgc(white)
  .bar__bar
    +w-h(66px, 1px)
    +bgc(#8DA291)
</style>
