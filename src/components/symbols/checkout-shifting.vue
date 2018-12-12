<template>
  <div class="chksteps__wrapper">
    <div class="chksteps__header flex-row">
      <h2>運送</h2>
      <div>
        <ProgressBar :step="1"></ProgressBar>
      </div>
    </div>
    <div class="chksteps__body">
      <div class="chksteps__body__item flex-row two-col">
        <div class="input_group flex-column">
          <label for="lastName">姓氏</label>
          <input type="text" id="lastName" placeholder="王">
        </div>
        <div class="input_group flex-column">
          <label for="firstName">名字</label>
          <input type="text" id="firstName" placeholder="小明"> 
        </div>
      </div>
      <div class="chksteps__body__item flex-column">
        <label for="tel">電話</label>
        <input type="text" placeholder="電話">
      </div>
      <div class="chksteps__body__item flex-column">
        <div class="input_group flex-column">
          <label for="address">地址</label>
        </div>
        <div class="input_group flex-row">
          <select type="text" id="address">
            <option value="高雄市" selected>高雄市</option>
          </select>
          <select type="text">
            <option value="新興區" selected>新興區</option>
          </select>
        </div>
      </div>
      <div class="chksteps__body__item flex-row">
        <input type="text" placeholder="幸福路">
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
    return {
    };
  },
  components: {
    ProgressBar
  },
  methods: {
    finished() {
      this.$emit("finished");
    }
  }
};
</script>
