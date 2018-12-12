<template>
  <div class="pagination__wrapper flex-row">
    <div class="pagination__item arrow"></div>
    <div class="pagination__item page is-selected">1</div>
    <div class="pagination__item page">2</div>
    <div class="pagination__item page">3</div>
    <div class="pagination__item arrow">></div>
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

.pagination__wrapper
  height: 63px
  width: 300px
  .pagination__item
    flex: 1
    height: 100%
    border: 1px solid $light-green
    line-height: 65px
    text-align: center
    font-size: $md-fz
    color: $basic-green
    cursor: pointer
    @extend %transition-style-1
    &.is-selected
      color: $white
      background-color: $basic-green
    &:hover
      color: $white
      background-color: $basic-green
</style>

