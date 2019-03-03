<template>
  <div class="cover">
    <slot name="title"></slot>
    <slot name="sub-title"></slot>
  </div>
</template>

<style lang="scss">
.cover {
  background-image: url('../assets/images/bg-cover.jpg');
  background-size: cover;
  background-position: center; 
  height: 350px;
  @include flexbox (center, center, column);

  @media screen and (max-width: $breakpoint-mobile) {
    height: 150px;
    
    h2 {
      display: none;
    }
  }
}
</style>
