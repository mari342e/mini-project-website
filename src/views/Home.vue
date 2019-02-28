<template>
  <main>
    <div class="wide-container">
      <div class="products">
        <img src="@/assets/images/item1.jpg" alt="item 1" class="products__item1">
        <img src="@/assets/images/item2.jpg" alt="item 2" class="products__item2">
        <img src="@/assets/images/item3.jpg" alt="item 3" class="products__item3">
        <img src="@/assets/images/item4.jpg" alt="item 4" class="products__item4">
        <img src="@/assets/images/item5.jpg" alt="item 5" class="products__item5">
        <img src="@/assets/images/item6.jpg" alt="item 6" class="products__item6">
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.products {
  padding: 40px 0;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 310px 310px 310px 310px;
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas: 
    "i1 i2 i3 i3"
    "i1 i2 i3 i3"
    "i4 i4 i3 i3"
    "i4 i4 i5 i6"
    "i4 i4 i5 i6";

  &__item1, &__item2, &__item5, &__item6 {
    width: 310px;
  }

  &__item3, &__item4 {
    width: 640px;
  }

  &__item1 {
    grid-area: i1;
  }

  &__item2 {
    grid-area: i2;
  }

  &__item3 {
    grid-area: i3;
  }

  &__item4 {
    grid-area: i4;
  }

  &__item5 {
    grid-area: i5;
  }

  &__item6 {
    grid-area: i6;
  }
}
</style>

