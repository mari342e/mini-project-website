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
        <router-link to="/product" class="products__item1 products--hover"><img :src="product1.image" alt="item 1">
          <div class="price">
            <h4><font-awesome-icon icon="pound-sign" /> <span class="price--before">{{ product1.price }}</span> {{ product1.salePrice }}</h4>
          </div>
          <div class="info">
            <h4>{{ product1.name }}</h4>
            <button class="add-btn"><font-awesome-icon icon="shopping-cart" /></button>
            <button class="add-btn"><font-awesome-icon icon="heart" /></button>
          </div>
        </router-link>
        <router-link to="/product" class="products__item2 products--hover"><img :src="product2.image" alt="item 2">
          <div class="price">
            <h4><font-awesome-icon icon="pound-sign" /> {{ product2.price }}</h4>
          </div>
          <div class="info">
            <h4>{{ product2.name }}</h4>
            <button class="add-btn"><font-awesome-icon icon="shopping-cart" /></button>
            <button class="add-btn"><font-awesome-icon icon="heart" /></button>
          </div>
        </router-link>
        <router-link to="/product" class="products__item3 products--hover"><img :src="product3.image" alt="item 3">
          <div class="price">
            <h4><font-awesome-icon icon="pound-sign" /> {{ product3.price }}</h4>
          </div>
          <div class="info">
            <h4>{{ product3.name }}</h4>
            <button class="add-btn"><font-awesome-icon icon="shopping-cart" /></button>
            <button class="add-btn"><font-awesome-icon icon="heart" /></button>
          </div>
        </router-link>
        <router-link to="/product" class="products__item4 products--hover"><img :src="product4.image" alt="item 4">
          <div class="price">
            <h4><font-awesome-icon icon="pound-sign" /> <span class="price--before">{{ product4.price }}</span> {{ product4.salePrice }}</h4>
          </div>
          <div class="info">
            <h4>{{ product4.name }}</h4>
            <button class="add-btn"><font-awesome-icon icon="shopping-cart" /></button>
            <button class="add-btn"><font-awesome-icon icon="heart" /></button>
          </div>
        </router-link>
        <router-link to="/product" class="products__item5 products--hover"><img :src="product5.image" alt="item 5">
          <div class="price">
            <h4><font-awesome-icon icon="pound-sign" /> {{ product5.price }}</h4>
          </div>
          <div class="info">
            <h4>{{ product5.name }}</h4>
            <button class="add-btn"><font-awesome-icon icon="shopping-cart" /></button>
            <button class="add-btn"><font-awesome-icon icon="heart" /></button>
          </div>
        </router-link>
        <router-link to="/product" class="products__item6 products--hover"><img :src="product6.image" alt="item 6">
          <div class="price">
            <h4><font-awesome-icon icon="pound-sign" /> {{ product6.price }}</h4>
          </div>
          <div class="info">
            <h4>{{ product6.name }}</h4>
            <button class="add-btn"><font-awesome-icon icon="shopping-cart" /></button>
            <button class="add-btn"><font-awesome-icon icon="heart" /></button>
          </div>
        </router-link>
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
  data() {
    return {
      product1: {
        name: 'Ave classic sweatshirt',
        image: require('@/assets/images/item1.jpg'),
        price: 107,
        salePrice: 89.99  
      }, 
      product2: {
        name: 'Ave white classic tee',
        image: require('@/assets/images/item2.jpg'),
        price: 49
      }, 
      product3: {
        name: 'Ave casual knit',
        image: require('@/assets/images/item3.jpg'),
        price: 89.99 
      }, 
      product4: {
        name: 'Ave long-sleeved tee',
        image: require('@/assets/images/item4.jpg'),
        price: 69.95, 
        salePrice: 50 
      }, 
      product5: {
        name: 'Ave burnt orange casual tee',
        image: require('@/assets/images/item5.jpg'),
        price: 29.95 
      }, 
      product6: {
        name: 'Ave black classic tee',
        image: require('@/assets/images/item6.jpg'),
        price: 35  
      }, 
    }
  }
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

  @media screen and (max-width: $breakpoint-mobile) {
    display: none;
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
    width: 310px;
    
    img {
      width: 100%;
    }

    @media screen and (max-width: $breakpoint-mobile) {
      width: 100%;
    }
  }

  &__item3, &__item4 {
    width: 640px;

    img {
      width: 100%;
    }

    @media screen and (max-width: $breakpoint-mobile) {
      width: 100%;
    }
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

  &--hover {
    .info, .price {
      display: none;
    }

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(140,140,140,0.2);
      position: relative;
      
      .info {
        display: inline-block;
        background: white;
        text-align: center;
        padding: 20px;
        width: 100%;
        margin-top: -6px;
        box-shadow: 0px 0px 10px 0px rgba(140,140,140,0.2);

        @media screen and (max-width: $breakpoint-mobile) {
          display: none;
        }
      }

      .price {
        display: inline;
        position: absolute;
        top: 5px;
        left: 10px;

        &--before {
          text-decoration: line-through;
          padding-left: 5px;
        }

        @media screen and (max-width: $breakpoint-mobile) {
          display: none;
        }
      }

      .add-btn {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        border: 0;
        background: $dark-accent-color;
        color: $light-accent-color;
        margin: 10px 5px 0; 

        &:hover {
          background: $accent-color;
          cursor: pointer;
        }
      }

      @media screen and (max-width: $breakpoint-mobile) {
        box-shadow: none;
      }
    }
  }

  @media screen and (max-width: $breakpoint-mobile) {
    display: block;
    margin: 0;
    border-bottom: 0; 
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

      @media screen and (max-width: $breakpoint-mobile) {
        width: 40%;
      }
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

      @media screen and (max-width: $breakpoint-mobile) {
        width: 60%;

        p {
          display: none;
        }
      }
    }

    @media screen and (max-width: $breakpoint-mobile) {
      width: 100%;
      margin-bottom: 6px;
    }
  }

  @media screen and (max-width: $breakpoint-mobile) {
    display: block;
  }
}
</style>

