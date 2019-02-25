<template>
  <div>
    <div class="site-footer">
      <div class="site-container">
        <div class="site-footer__items">
          <div class="lists">
            <div class="list">
              <h3 class="list__title">Information</h3>
              <ul class=list__items>
                <li><router-link to="/">The brand</router-link></li>
                <li><a href="#">Local stores</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Privacy & cookies</a></li>
                <li><a href="#">Site map</a></li>
              </ul>
            </div>
            <div class="list">
              <h3 class="list__title">Why buy from us</h3>
              <ul class=list__items>
                <li><router-link to="/">The brand</router-link></li>
                <li><a href="#">Local stores</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Privacy & cookies</a></li>
                <li><a href="#">Site map</a></li>
              </ul>
            </div>
            <div class="list">
              <h3 class="list__title">Your account</h3>
              <ul class=list__items>
                <li><router-link to="/">The brand</router-link></li>
                <li><a href="#">Local stores</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Privacy & cookies</a></li>
                <li><a href="#">Site map</a></li>
              </ul>
            </div>
            <div class="list">
              <h3 class="list__title">Look book</h3>
              <ul class=list__items>
                <li><router-link to="/">The brand</router-link></li>
                <li><a href="#">Local stores</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Privacy & cookies</a></li>
                <li><a href="#">Site map</a></li>
              </ul>
            </div>
            <div class="list">
              <h3 class="list__title">Contact details</h3>
              <ul class="list__items">
                <li><router-link to="/">The brand</router-link></li>
                <li><a href="#">Local stores</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Privacy & cookies</a></li>
                <li><a href="#">Site map</a></li>
              </ul>
            </div>
          </div>
          <div class="blocks">
            <div class="block block--dark">Hello</div>
            <div class="block block--accent">Hello</div>
          </div>
        </div>
      </div>
    </div>
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
  .site-footer {
    background: $light-bg-color;
    color: $text-color;
    font-family: 'Montserrat', sans-serif;
    padding: 40px;
    &__items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .lists {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .list {
          &__title {
            font-size: 1em;
            text-transform: uppercase;
            font-weight: 700;
            padding-bottom: 20px;
          }
          &__items {
            list-style-type: none;
            display: inline;
            padding: 0;
            a {
              color: $text-color;
              text-decoration: none;
            }
            a:hover {
              color: $accent-color;
            }
            li {
              padding: 5px 0;
            }
          }
        }
      }
      .blocks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0 0;
        .block {
          width: 490px;
          height: 150px;
          &--dark {
            background: $dark-bg-color;
            color: $light-accent-color;
          }
          &--accent {
            background: $accent-color;
            color: $light-accent-color;
          }
        }
      }
    }
  }
</style>
