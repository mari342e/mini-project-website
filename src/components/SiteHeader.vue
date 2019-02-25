<template>
  <div>
    <div class="site-toolbar">
      <div class="site-container">
        <div class="site-toolbar__items">
          <div class="currency">
            <label for="currency">Currency: </label>
            <select id="currency" name="currency">
              <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
            </select>
          </div>
          <ul class="nav">
            <li class="nav__item"><router-link to="/">Register</router-link></li>
            <li class="nav__item nav__item--last"><router-link to="/">Sign In</router-link></li>
          </ul>
          <div class="cart">
            <div class="cart__icon">
              <font-awesome-icon icon="shopping-cart" />
            </div>
            <div class="cart__nr-of-items">
              <router-link to="#">empty <font-awesome-icon icon="angle-down" /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
      <nav class="site-navbar">
        <div class="site-container">
          <div class="site-navbar__items">
            <div class="logo">
            </div>
            <ul class="nav">
              <li class="nav__item"><router-link to="/">Mens</router-link></li>
              <li class="nav__item"><router-link to="/">Womens</router-link></li>
              <li class="nav__item"><router-link to="/about">The Brand</router-link></li>
              <li class="nav__item"><router-link to="/">Local Stores</router-link></li>
              <li class="nav__item nav__item--last"><router-link to="/">Look Book</router-link></li>
            </ul>
            <div class="search">
              <input type="text" placeholder="Search..">
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencies: ["GBP", "DKK", "USD", "EURO"]
    };
  }
};
</script>

<style lang="scss">
  .site-toolbar {
    background: $dark-bg-color;
    color: $text-color;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    &__items {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .nav {
        list-style-type: none;
        &__item {
          display: inline;
          padding: 0 15px;
          a {
            color: $text-color;
            text-decoration: none;
          }
          a:hover {
            color: $accent-color;
          }
          &--last {
            padding-right: 50px;
          }
        }
      }
      .currency {
        margin-right: auto;
      }
      .cart {
        background: $accent-color;
        color: $light-accent-color;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        width: 150px;
        a {
          color: $light-accent-color;
          text-decoration: none;
        }
        a:hover {
          color: $dark-accent-color;
        }
        &__icon {
          font-size: 1.2em;
        }
        &__nr-of-items {
          text-align: right;
        }
      }
    }
  }
  .site-navbar {
    background: $light-bg-color;
    font-family: 'Montserrat', sans-serif;
    padding: 30px;
    &__items {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .nav {
        list-style-type: none;
        padding: 0;
        &__item {
          display: inline;
          padding: 0 25px;
          font-weight: 700;
          a {
            color: $dark-accent-color;
            text-decoration: none;
            text-transform: uppercase;
          }
          a:hover {
            color: $accent-color;
          }
          &--last {
            padding-right: 50px;
          }
        }
      }
      .search {
        display:inline-block;
        position: relative;
        &:after {
          font-family: 'FontAwesome';
          content: '\f002';
          position: absolute;
          right: 10px;
          top: 7px;
        }
        input[type=text] {
          font-family: 'Montserrat', sans-serif;
          border: 1px solid $input-border;
          color: $text-color;
          background: $light-bg-color;
          padding: 7px 10px;
          width: 150px;
        }
      }
    }
  }
</style>
