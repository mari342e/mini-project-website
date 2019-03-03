<template>
  <header>
    <div class="dark">
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
          <div class="cart accent">
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
    <nav class="light">
      <div class="wide-container">
        <div class="navbar">
          <router-link to="/" class="logo">
            <img src="@/assets/images/logo.png" alt="logo" class="logo__image">
          </router-link>
          <ul class="nav">
            <li class="nav__item nav__item--has-children">
              <router-link to="/">Mens</router-link>
              <div class="content">
                <dropdown-nav/>
              </div>
            </li>
            <li class="nav__item nav__item--has-children">
              <router-link to="/">Womens</router-link>
              <div class="content">
                <dropdown-nav/>
              </div>
            </li>
            <li class="nav__item"><router-link to="/about">The Brand</router-link></li>
            <li class="nav__item"><router-link to="/">Local Stores</router-link></li>
            <li class="nav__item nav__item--has-children nav__item--last">
              <router-link to="/">Look Book</router-link>
              <div class="content">
                <dropdown-nav/>
              </div>
            </li>
          </ul>
          <!-- mobile navigation -->
          <div class="hamburger-navigation">
            <input id="toggle-menu" type="checkbox"/>
            <label for="toggle-menu" class="hamburger-on"><font-awesome-icon icon="bars" /></label>
            <label for="toggle-menu" class="hamburger-off"><font-awesome-icon icon="times" /></label>
        
            <ul class="hamburger-nav">
              <li class="nav-item"><router-link to="/">Home</router-link></li>
              <li class="nav-item"><router-link to="/">Mens</router-link></li>
              <li class="nav-item"><router-link to="/">Womens</router-link></li>
              <li class="nav-item"><router-link to="/about">The Brand</router-link></li>
              <li class="nav-item"><router-link to="/">Local Stores</router-link></li>
              <li class="nav-item"><router-link to="/">Look Book</router-link></li>
            </ul>
          </div>
          <!-- end of mobile navigation -->
          <div class="search">
            <input type="text" placeholder="Search..">
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import DropdownNav from "@/components/DropdownNav";
export default {
  data() {
    return {
      currencies: ["GBP", "DKK", "USD", "EURO"]
    };
  },
  components: {
    DropdownNav
  }
};
</script>

<style lang="scss">
header {
  font-family: $accent-font;
  font-weight: 700;
  width: 100%;

  .toolbar {
    @include flexbox (flex-end, center, row);
    color: $text-color;

    .nav {
      @include reset-list-style ();

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

          @media screen and (max-width: $breakpoint-mobile) {
            padding-right: 20px;
          }
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
          font-family: $accent-font;
          font-weight: 700;
          font-size: 1em;

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

      @media screen and (max-width: $breakpoint-mobile) {
        padding-left: 10px;

        label {
          display: none;
        }
      }
    }

    .cart {
      @include flexbox (space-between, center, row);
      padding: 10px 20px;
      width: 150px;

      a {
        color: $light-accent-color;
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

        @media screen and (max-width: $breakpoint-mobile) {
          display: none;
        }
      }

      &:hover {
        color: $dark-accent-color;

        a {
          color: $dark-accent-color;
        }
      }

      @media screen and (max-width: $breakpoint-mobile) {
        width: auto;
      }
    }
  }

  .navbar {
    @include flexbox (flex-end, center, row);
    padding: 30px 0;

    .logo {
      margin-right: auto;

      &__image {
        width: 150px;
        padding-top: 6px; 
      }
    }

    .nav {
      @include reset-list-style ();

      &__item {
        display: inline;
        padding: 0 25px;
        font-weight: 700;
        position: relative;

        > a {
          color: $dark-accent-color;
          text-transform: uppercase;
        }

        a:hover {
          color: $accent-color;
          text-decoration: none;
        }

        &--last {
          padding-right: 50px;
        }

        &--has-children {
          display: inline-block;

          &:before {
            font-family: 'FontAwesome';
            content: '\f107';
            position: absolute;
            top: 15px;
            left: 25px;
          } 

          .content {
            display: none;
            position: absolute;
            background-color: $light-accent-color;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 20px;
            z-index: 1;
          }

          &:hover {
            .content {
              display: block;
            }
          }
        }
      }

      @media screen and (max-width: $breakpoint-mobile) {
        display: none;
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
        font-family: $accent-font;
        border: 1px solid $input-border;
        color: $text-color;
        background: $light-bg-color;
        padding: 7px 10px;
        width: 150px;
      }

      @media screen and (max-width: $breakpoint-mobile) {
        display: none;
      }
    }

    .hamburger-navigation {
      display: none;
    }

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 20px;

      .hamburger-navigation {
        display: block;
        z-index: 101;
        width: 100%;
        height: 71px;
        position: fixed;
      }

      .hamburger-on, .hamburger-off  {
        padding: 5px;
        position: fixed;
        right: 20px;
        top: 60px;
        font-size: 1.5em;
      }

      .hamburger-on, #toggle-menu:checked ~ .hamburger-nav, #toggle-menu:checked ~ .hamburger-off {
        display: block;
      }

      .hamburger-off, #toggle-menu, #toggle-menu:checked ~ .hamburger-on {
        display: none;
      }

      .hamburger-nav {
        position: fixed;
        list-style-type: none;
        top: 118px;
        right: 0;
        display: none;
        width: 100%;
        background: white;
        padding: 15px 0;
      }

      .hamburger-nav li.nav-item a {
        display: block;
        color: $dark-accent-color;
        text-align: center;
        padding: 8px 0;
        font-size: 1em;
        text-transform: uppercase;
        font-family: $accent-font;
      }

      .hamburger-nav li a:hover {
        color: $accent-color;
      }
    }
  }

  @media screen and (max-width: $breakpoint-mobile) {
    position: fixed;
    margin-top: -118px;
  }
}
</style>