<template>
  <div class="chksteps__wrapper">
    <div class="chksteps__header flex-row">
      <h2>發票</h2>
      <div>
        <ProgressBar :step="3"></ProgressBar>
      </div>
    </div>
    <div class="chksteps__body">
      <div class="chksteps__body__item flex-column">
        <label for="tel">電子郵件信箱</label>
        <input type="text" placeholder="example@email.com">
      </div>
      <div class="chksteps__body__item flex-column">
        <label for="tel">通一編號(選填)</label>
        <input type="text" placeholder="12345678ㄠ">
      </div>
    </div>
    <router-link to="/checkout-finished">
      <div class="chksteps__footer">
        <div class="chksteps__footer__title">確認結帳</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProgressBar from "../symbols/progress-bar";
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
