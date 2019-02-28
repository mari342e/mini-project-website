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
  color: $light-accent-color;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
