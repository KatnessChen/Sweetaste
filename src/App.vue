<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/symbols/Navbar";
import Footer from "./components/symbols/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="sass">
#app
  width: 100%
  min-width: 320px
  .centered
    max-width: $body-width
    margin: 0 auto
  .centered.banner-image
    margin-top: 100px

@media (max-width: 600px)
  #app
    .footer__wrapper
      margin-top: 0
</style>
