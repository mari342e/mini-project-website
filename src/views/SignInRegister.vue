<template>
  <main>
    <site-title>
      <h1 slot="title"><b>Welcome</b> to Ave</h1>
      <h2 slot="sub-title">Sign in or register!</h2>
    </site-title>
    <div class="container">
      <div class="forms">
        <sign-in class="forms__item"/>
        <register-account class="forms__item forms__item--last"/>
      </div>
    </div>
  </main>
</template>

<script>
import SiteTitle from "@/components/SiteTitle";
import RegisterAccount from "@/components/RegisterAccount";
import SignIn from "@/components/SignIn";

export default {
  components: {
    SiteTitle,
    RegisterAccount,
    SignIn
  }
};
</script>

<style lang="scss">
.forms {
  @include flexbox (space-between, flex-start, row);
  padding: 40px 0;

  &__item {
    width: 450px;
    padding: 0 20px 0 0;

    &--last {
      border-left: 1px solid $input-border;
      padding: 0 0 0 20px;
    }
  }

  input {
    color: $text-color;
    font-size: 1em;
    font-family: $accent-font;
    border: 1px $input-border solid;
    border-radius: 0;
    -webkit-appearance: none;
    padding: 5px 10px;
    margin: 30px 0 0;
    width: 100%;
    height: 35px;

    &:focus {
      border: 1px $accent-color solid;
      outline: none;
    }
  }

  .checkbox {
    @include flexbox (flex-start, center, row);
    margin: 30px 0 0 ;

    input[type=checkbox]{
      padding: 0;
      width: 20px;
      height: 20px;
      margin: 0 10px 0 0 ;

      &:checked {
        background-color: $accent-color;
      }
    }
  }

  .error-msg {
    color: firebrick;
    font-weight: bold;
  }

  .button {
    @include flexbox (space-between, center, row);
    margin-top: 30px;

    &__statement {
      width: 50%;
      text-align: right;
    }
  }
}
</style>

