<template>
  <div>
    <div class="site-toolbar">
    </div>
    <nav class="navbar">
      <ul class="site-nav">
        <li class="site-nav__item"><router-link to="/">Home</router-link></li>
        <li class="site-link__item"><router-link to="/about">About us</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
  .site-toolbar {
    background: black;
  }
  .navbar {
    .site-nav {
      list-style-type: none;
      padding: 0;
      .site-nav__item {
        display: inline;
        padding: 10px;
      }
    }
  }
</style>
