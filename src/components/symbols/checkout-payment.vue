<template>
  <div class="chksteps__wrapper">
    <div class="chksteps__header flex-row">
      <h2>付款</h2>
      <div>
        <ProgressBar :step="2"></ProgressBar>
      </div>
    </div>
    <div class="chksteps__body">
      <div class="chksteps__body__item flex-column">
        <label for="tel">信用卡卡號</label>
        <input type="text" placeholder="1234-5678-1234-5678">
      </div>
      <div class="chksteps__body__item flex-row two-col">
        <div class="input_group flex-column">
          <label for="lastName">持卡人姓名</label>
          <input type="text" id="lastName" placeholder="王">
        </div>
        <div class="input_group flex-column">
          <label for="firstName" style="opacity: 0;">123</label>
          <input type="text" id="firstName" placeholder="小明"> 
        </div>
      </div>
      <div class="chksteps__body__item flex-column">
        <div class="input_group flex-column">
          <label for="address">有效期限</label>
        </div>
        <div class="input_group flex-row">
          <select type="text" id="address">
            <option value="月" selected>月</option>
          </select>
          <select type="text">
            <option value="年" selected>年</option>
          </select>
        </div>
      </div>
      <div class="chksteps__body__item flex-row two-col">
        <div class="input_group flex-column">
          <label for="">背面末三碼</label>
          <input type="text" placeholder="xxx">
        </div>
      </div>
    </div>
    <div class="chksteps__footer" @click="finished">
      <div class="chksteps__footer__title">下一步</div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../symbols/progress-bar.vue'
export default {
  data() {
    return {};
  },
  methods: {
    finished() {
      this.$emit("finished");
    }
  },
  components: {
    ProgressBar
  }
};
</script>

<style lang="sass" scoped>

.chksteps__body__item
  &:nth-child(2), &:last-child
    .input_group
      width: calc(50% - 5px)
    .input_group+.input_group
      margin-left: $gutter*0.5
</style>
