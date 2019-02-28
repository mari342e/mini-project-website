<template>
  <main>
    <div class="hero">
      <div class="container">
        <h1>A v e</h1>
        <button class="btn">Shop men's collection</button>
      </div>
    </div>
    <div class="wide-container">
      <div class="products">
        <img src="@/assets/images/item1.jpg" alt="item 1" class="products__item1">
        <img src="@/assets/images/item2.jpg" alt="item 2" class="products__item2">
        <img src="@/assets/images/item3.jpg" alt="item 3" class="products__item3">
        <img src="@/assets/images/item4.jpg" alt="item 4" class="products__item4">
        <img src="@/assets/images/item5.jpg" alt="item 5" class="products__item5">
        <img src="@/assets/images/item6.jpg" alt="item 6" class="products__item6">
      </div>
      <div class="lookbooks">
        <div class="lookbook">
          <img src="@/assets/images/lookbook-male.png" class="lookbook__image">
          <div class="lookbook__content">
            <h2><b>Men's</b><br> Lookbook</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <button class="btn">View now</button>
          </div>
        </div>
        <div class="lookbook">
          <img src="@/assets/images/lookbook-female.png" class="lookbook__image">
          <div class="lookbook__content">
            <h2><b>Women's</b><br> lookbook</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <button class="btn">View now</button>
          </div>
        </div>
        <div class="lookbook">
          <img src="@/assets/images/lookbook-anon.png" class="lookbook__image">
          <div class="lookbook__content">
            <h2><b>Your</b><br> lookbook</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <button class="btn">View now</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.hero {
  background: $light-bg-color;
  background-image: url('../assets/images/bg-hero.jpg');
  background-size: contain;
  background-position: center; 
  background-repeat: no-repeat;
  height: 500px;
  margin-top: -91px;
  @include flexbox (center, center, row);

  .container {
    @include flexbox (space-evenly, center, column);
    height: 400px;

    h1 {
      color: $dark-accent-color;
      font-size: 15em;
      line-height: 1;
      text-align: center;
      font-weight: 700;
      opacity: 0.7;
    }
  }
}
.products {
  padding: 40px 0;
  margin: 0 0 40px;
  border-bottom: 1px solid $light-accent-color; 
  display: grid;
  grid-template-columns: 310px 310px 310px 310px;
  grid-template-rows: 166px 166px 166px 166px 166px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas: 
    "i1 i2 i3 i3"
    "i1 i2 i3 i3"
    "i4 i4 i3 i3"
    "i4 i4 i5 i6"
    "i4 i4 i5 i6";

  &__item1, &__item2, &__item5, &__item6 {
    width: 100%;
  }

  &__item3, &__item4 {
    width: 100%;
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

.lookbooks {
  @include flexbox (space-between, center, row);
  padding-bottom: 40px;

  .lookbook {
    @include flexbox (space-between, center, row);
    background: $light-bg-color;
    width: 420px;
    padding: 0 20px;

    &__image {
      width: 180px;
    }

    &__content {
      @include flexbox (space-around, flex-end, column);
      width: 200px;
      text-align: right;

      h2 {
        color: $dark-accent-color;
        line-height: 1.2;
        font-size: 2em;
      }

      .btn {
        margin: 10px 0 0 0;
      }
    }
  }
}
</style>

