<template>
  <div class="filter__wrapper full-width flex-column ">
    <div class="filter__header item">{{filter.name}}</div>
    <div  class="filter__body" v-for="ctg in filter.categories">
      <div class="item filter__body__item" :class="{ 'is-selected': ctg.isSelected}">{{ctg.name}} ({{ctg.num}})</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        name: '甜點類別',
        categories: [
          {
            name: '所有甜點',
            num: 48,
            isSelected: true
          },
          {
            name: '本日精選',
            num: 10,
            isSelected: false
          },
          {
            name: '人氣推薦',
            num: 26,
            isSelected: false
          },
          {
            name: '新品上市',
            num: 12,
            isSelected: false
          },
        ]
      }
    };
  }
};
</script>

<style lang="sass" scoped>

.filter__wrapper
  .item
    @extend %font-style-2
    color: $basic-green
    line-height: 65px
    font-weight: 600
    text-align: center
    height: 63px
    background-color: #fff
    outline: 1px solid $light-green
    cursor: pointer
    @extend %transition-style-1
    &.is-selected
      background-color: $light-green
    &.filter__header
      color: $light-green
      background-color: $basic-green
    &.filter__body__item:hover
      background-color: $light-green
</style>

