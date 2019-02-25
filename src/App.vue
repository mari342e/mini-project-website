<template>
  <div id="app">
    <site-header/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
export default {
    components: {
      SiteHeader,
      SiteFooter
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700');

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: $text-color;
  font-size: 1em;
  font-size: 12px;
}

.site-container {
  width: 1000px;
  margin: 0 auto;
}
</style>
