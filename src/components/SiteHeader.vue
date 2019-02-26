<template>
  <header>
    <div class="dark-bg">
      <div class="container">
        <div class="toolbar">
          <div class="currency">
            <label for="currency">Currency: </label>
            <div class="select-currency">
              <select id="currency" name="currency">
                <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
              </select>
            </div>
          </div>
          <ul class="nav">
            <li class="nav__item"><router-link to="/signin-register">Register</router-link></li>
            <li class="nav__item nav__item--last"><router-link to="/signin-register">Sign In</router-link></li>
          </ul>
          <div class="cart">
            <div class="cart__icon">
              <font-awesome-icon icon="shopping-cart" />
            </div>
            <div class="cart__nr-of-items">
              <router-link to="#">empty</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
      <nav class="light-bg">
        <div class="container">
          <div class="navbar">
            <img src="@/assets/logo.png" alt="logo" class="logo">
            <ul class="nav">
              <li class="nav__item nav__item--has-children"><router-link to="/">Mens</router-link></li>
              <li class="nav__item nav__item--has-children"><router-link to="/">Womens</router-link></li>
              <li class="nav__item"><router-link to="/about">The Brand</router-link></li>
              <li class="nav__item"><router-link to="/">Local Stores</router-link></li>
              <li class="nav__item nav__item--has-children nav__item--last"><router-link to="/">Look Book</router-link></li>
            </ul>
            <div class="search">
              <input type="text" placeholder="Search..">
            </div>
          </div>
        </div>
      </nav>
  </header>
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
header {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  .toolbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .nav {
      list-style-type: none;

      &__item {
        display: inline;
        padding: 0 10px;

        a {
          color: $text-color;
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

      .select-currency {
        border: 0;
        display: inline;
        overflow: hidden;
        background: transparent;

        select {
          padding: 5px 8px;
          border: none;
          box-shadow: none;
          background: transparent;
          -webkit-appearance: none;
          color: $text-color;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;

          &:focus {
            outline: none; 
          }
        } 

        &:after {
          font-family: 'FontAwesome';
          content: '\f107';
          padding-right: 10px;
        }    
      }
    }

    .cart {
      background: $accent-color;
      color: $light-accent-color;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      width: 150px;

      a {
        color: $light-accent-color;
      }

      a:hover {
        color: $dark-accent-color;
      }

      &__icon {
        font-size: 1.2em;
      }

      &__nr-of-items {
        text-align: right;

        &:after {
          font-family: 'FontAwesome';
          content: '\f107';
          padding-left: 10px;
        } 
      }
    }
  }

  .navbar {
    padding: 30px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .logo {
      margin-right: auto;
      width: 150px;
      margin-left: -200px;
    }

    .nav {
      list-style-type: none;
      padding: 0;

      &__item {
        display: inline;
        padding: 0 25px;
        font-weight: 700;
        position: relative;

        a {
          color: $dark-accent-color;
          text-transform: uppercase;
        }

        a:hover {
          color: $accent-color;
        }

        &--last {
          padding-right: 50px;
        }

        &--has-children {
          &:before {
            font-family: 'FontAwesome';
            content: '\f107';
            position: absolute;
            top: 15px;
            left: 25px;
          } 
        }
      }
    }
    .search {
      display:inline-block;
      position: relative;
      margin-right: -200px;

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