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
  font-size: 13px;
  line-height: 1.75;
}

p {
  padding: 5px 0; 
  font-weight: 400;
}

a {
  color: $accent-color;
  text-decoration: none;
}

a:hover {
  color: $dark-accent-color;
}

h1 {
  font-size: 2.5em;
  font-weight: normal;
}

h2 {
  font-size: 1.5em;
  font-weight: normal;
}

h3 {
  font-size: 1.3em;
  text-transform: uppercase;
  padding-bottom: 20px;
}

.container {
  width: 1300px;
  margin: 0 auto;
  padding: 0 200px;
}

.light-bg {
  background: $light-bg-color;
  color: $text-color;
}

.dark-bg {
  background: $dark-bg-color;
  color: $text-color;
}

.btn {
  color: $text-color;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: white;
  border: 2px solid $text-color;
  padding: 12px 20px;
  display: inline-block;

  &:hover {
    color: $light-accent-color;
    background-color: $accent-color;
    border: 2px solid $accent-color;
    cursor: pointer;
  }
}
</style>
