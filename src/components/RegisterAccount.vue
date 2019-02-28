<template>
  <main>
    <h3>Register</h3>
    <template v-if="!submitted">
      <form @submit.prevent="signup()" novalidate>
        <div>
          <input type="email" placeholder="Your email" name="email" v-model.lazy="email" v-validate="'required|email'">
          <p class="error-msg" v-show="errors.has('email')">{{ errors.first("email") }}</p>
        </div>
        <div>
          <input type="password" placeholder="Your pasword" name="password" v-model="password" v-validate="'required'" ref="password">
        </div>
        <div>
          <input type="password" placeholder="Confirm password" name="confirm-password" v-model="confirmPassword" v-validate="'required|confirmed:password'" data-vv-as="password">
          <p class="error-msg" v-show="errors.has('password')">{{ errors.first("password") }}</p>
        </div>
        <div class="checkbox">
          <input type="checkbox" name="signup-checkbox" value="yes" v-model="signupCheckbox">
          <label for="signup-checkbox">Sign up for exclusive updates, discounts, new arrivals, and more!</label>
        </div>
        <div class="button">
          <button class="btn" type="submit">Create account</button>
          <div class="button__statement">
            By clicking 'Create Account', you agree to our <b><a href="#">Privary Police <font-awesome-icon icon="arrow-right" /></a></b>
          </div>
        </div>
      </form>
    </template>
    <template v-else>
      <p>Thank you for registering.</p>
    </template>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      signupCheckbox: '',
      submitted: false
    };
  },
  methods: {
    signup() {
      this.$validator.validate().then(result => {
        if (result) {
          this.submitted = true; 
        }
      });
    }
  }
};
</script>