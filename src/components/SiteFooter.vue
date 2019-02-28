<template>
  <footer>
    <div class="light">
      <div class="container">
        <div class="footer">
          <div class="footer__lists">
            <div class="list">
              <h4 class="list__title">Information</h4>
              <ul class="list__items">
                <li><router-link to="/about">The brand</router-link></li>
                <li><a href="#">Local stores</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Privacy & cookies</a></li>
                <li><a href="#">Site map</a></li>
              </ul>
            </div>
            <div class="list">
              <h4 class="list__title">Why buy from us</h4>
              <ul class="list__items">
                <li><a href="#">Shopping & returns</a></li>
                <li><a href="#">Secure shopping</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Award winning</a></li>
                <li><a href="#">Ethical training</a></li>
              </ul>
            </div>
            <div class="list">
              <h4 class="list__title">Look book</h4>
              <ul class="list__items">
                <li><a href="#">Latest posts</a></li>
                <li><a href="#">Men's lookbook</a></li>
                <li><a href="#">Women's lookbook</a></li>
              </ul>
            </div>
            <div class="list">
              <h4 class="list__title">Your account</h4>
              <ul class="list__items">
                <li><router-link to="/signin-register">Sign In</router-link></li>
                <li><router-link to="/signin-register">Register</router-link></li>
                <li><a href="#">Track an order</a></li>
                <li><a href="#">Update information</a></li>
                <li><a href="#">Delete account</a></li>
              </ul>
            </div>
            <div class="list">
              <h4 class="list__title">Contact details</h4>
              <p>
                <b>Head Office:</b><br>
                Avenue Fashion<br>
                180-182 Regent Street, London.
              </p>
              <p>
                <b>Telephone:</b><br>
                0123-456-780
              </p>
              <p>
                <b>Email:</b><br>
                support@yourwebsite.com
              </p>
            </div>
          </div>
          <div class="footer__blocks">
            <div class="block dark">
              <p class="award">
                <b>Award winner</b><br>
                Fashion awards 2016
              </p>
            </div>
            <div class="block accent">
              <ul class="social-links">
                <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
                <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
                <li><a href="#"><font-awesome-icon :icon="['fab', 'pinterest']" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dark">
      <p class="copyright">
        © 2019 Avenue Fashion™ 
      </p>
    </div>
  </footer>
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
footer {
  .footer {
    @include flexbox (space-between, inherit, column);
    padding: 40px 0;

    &__lists {
      @include flexbox (space-between, flex-start, row);

      .list {
        &__title {
          padding-bottom: 20px;
        }

        &__items {
          @include reset-list-style ();
          display: inline;

          a {
            color: $text-color;
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

    &__blocks {
      @include flexbox (space-between, center, row);
      padding: 30px 0 0;

      .block {
        @include flexbox (center, center, row);
        width: 440px;
        height: 150px;

        .social-links {
          @include reset-list-style ();
          font-size: 2em;

          li {
            display: inline;
            padding: 0 20px;

            a {
              color: $light-accent-color;
              text-decoration: none;
            }

            a:hover {
              color: $dark-accent-color;
            }
          }
        }

        .award {
          font-size: 2em;
          text-transform: uppercase;
          text-align: center;
          font-family: $accent-font;
        }
      }
    }
  }
  
  .copyright {
    text-align: center;
    color: $text-color;
    padding: 12px 0;
    font-weight: 700;
  }
}
</style>
