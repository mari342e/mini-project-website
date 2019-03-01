<template>
  <main>
    <site-title>
      <h1 slot="title"><b>Product</b> view</h1>
      <h2 slot="sub-title">Mens - Casuals - Ave classic sweatshirt</h2>
    </site-title>
    <div class="container">
      <div class="product">
        <div class="product__image">
          <img :src="image">
        </div>
        <div class="product__info">
          <h3>{{ product }}</h3>
          <div class="prices">
            <div class="prices__price prices__price--before">
              {{ price }}
            </div>
            <div class="prices__price">
              {{ salePrice }}
            </div>
          </div>
          <p>
            <span class="stats">Availabilty:</span> 
            <span v-if="inStock">In Stock</span>
            <span v-else>Out of Stock</span><br>
            <span class="stats">Product code:</span> 
            #{{ id }}<br>
            <span class="stats">Tags:</span> 
            <a href v-for="tag in tags" :key="tag" class="tag">{{ tag }}</a>
          </p>
          <div class="description">
            <p>
              {{ description }}
            </p>
            <ul>
              <li v-for="detail in details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
          <div class="specs">
            <div class="select-specs">
              <h4>Color</h4>
              <div class="select-specs__select">
                <select id="color" name="color">
                  <option disabled selected="selected">Select color</option>
                  <option v-for="color in colors" :key="color">{{ color }}</option>
                </select>
              </div>
            </div>
            <div class="select-specs">
              <h4>Size</h4>
              <div class="select-specs__select">
                <select id="size" name="size">
                  <option disabled selected="selected">Select size</option>
                  <option v-for="size in sizes" :key="size">{{ size }}</option>
                </select>
              </div>
            </div>
            <div class="select-specs">
              <h4>QTY</h4>
              <div class="select-specs__select">
                <input type="number" name="quantity" min="1" max="10">
              </div>
            </div>
          </div>
          <div class="add-buttons">
            <button class="btn">
              <font-awesome-icon icon="shopping-cart" /> Add to cart
            </button>
            <button class="btn">
              <font-awesome-icon icon="heart" /> Add to lookbook
            </button>
          </div>
        </div>    
      </div>
      <div class="tabs">
        <div class="tabs__header">
          <h4 class="tab" :class="{ activeTab: selectedTab === tab }" v-for="tab in tabs" :key="tab" @click="selectedTab = tab">
              {{ tab }}
          </h4>
        </div>
        <div class="tabs__content" v-show="selectedTab === 'Description'">
          {{ longDescription }}
        </div>
        <div class="tabs__content" v-show="selectedTab === 'Video'">
          No video to show.
        </div>
        <div class="tabs__content" v-show="selectedTab === 'Size & specs'">
          {{ sizesSpecs }}
        </div>
        <div class="tabs__content" v-show="selectedTab === 'Delivery & returns'">
          {{ delivery }}
        </div>
        <div class="tabs__content" v-show="selectedTab === 'Reviews'">
          There are currently no reviews for this product.
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SiteTitle from "@/components/SiteTitle";

export default {
  components: {
    SiteTitle
  },
  data() {
    return {
      id: 449577,
      product: 'Ave classic sweatshirt',
      image: require('@/assets/images/item1.jpg'),
      quantity: 5,
      price: 107,
      salePrice: 89.99,
      tags: ['Classic', 'Casual'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      details: ['Elasticated cuffs', 'Casual fit', '100% cotton', 'Free shipping'],
      colors: ["Black", "Grey", "White", "Blue"],
      sizes: ["S", "M", "L", "XL"],
      sizesSpecs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delivery: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis',
      tabs: ['Description', 'Video', 'Size & specs', 'Delivery & returns', 'Reviews'],
      selectedTab: 'Description'      
    }
  },
  computed: {
    inStock(){
      return this.quantity
    }
  }
}
</script>

<style lang="scss">
.product {
  @include flexbox (space-between, flex-start, row);
  padding: 40px 0;

  &__image {
    width: 440px;
  }

  &__info {
    @include flexbox (space-between, flex-start, column);
    width: 440px;
    height: 500px;

    .prices {
      font-size: 1.5em;

      &__price {
        display: inline;
        padding-right: 20px;

        &:before {
          font-family: 'FontAwesome';
          content: '\f154';
          font-size: 0.6em;
        } 

        &--before {
          text-decoration: line-through;
        }
      }
    }

    .stats {
      text-transform: uppercase;
      font-size: 0.9em;
      font-weight: 700;
      padding-right: 5px;
    }

    .tag {
      padding-right: 5px;
    }

    .description {
      ul {
        padding-left: 20px;
      }
    }

    .specs {
      @include flexbox (space-between, center, row);
      width: 100%;
      padding: 10px 0 20px;

      .select-specs {
        display: inline;

        &__select {
          border: 0;
          overflow: hidden;
          background: transparent;
          margin-top: 5px;

          select, input[type=number] {
            padding: 5px 8px;
            border: 1px solid $input-border;
            border-radius: 0;
            box-shadow: none;
            background: transparent;
            -webkit-appearance: none;
            color: $text-color;
            font-family: $accent-font;
            font-size: 1em;
            width: 135px;

            &:focus {
              outline: none; 
            }
          }   
        }
      }
    }
  }

  .add-buttons {
    @include flexbox (space-between, center, row);
    width: 100%;

    .btn {
      padding: 12px 30px;

      &:hover {
        color: $light-accent-color;
        background-color: $dark-accent-color;
        border: 2px solid $dark-accent-color;
        cursor: pointer;
      }
    }
  }
}

.tabs {
  padding-bottom: 40px;

  &__header {
    background: $light-accent-color; 
    padding: 12px 0;

    .tab {
      display: inline;
      padding: 15px 20px;
    }

    .activeTab {
      background: $dark-accent-color;
      color: $light-accent-color;
    }
  }

  &__content {
    padding: 15px 0;
  }
}

</style>

