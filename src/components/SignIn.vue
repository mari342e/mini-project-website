<template>
  <main>
    <h3>Sign in</h3>
      <template v-if="!submitted">
        <form @submit.prevent="signin()" novalidate>
          <div>
            <input type="email" placeholder="Your email" name="email" v-model.lazy="email" v-validate="'required|email'">
            <p class="error-msg" v-show="errors.has('email')">{{ errors.first("email") }}</p>
          </div>
          <div>
            <input type="password" placeholder="Your pasword" name="password" v-model="password" v-validate="'required'">
            <p class="error-msg" v-show="errors.has('password')">{{ errors.first("password") }}</p>
          </div>
          <div class="button">
            <button class="btn" type="submit">Sign in</button>
            <div class="button__statement">
              <a href="#">Forgot your password <font-awesome-icon icon="arrow-right" /></a>
            </div>
          </div>
        </form>
      </template>
      <template v-else>
        <p>You are now logged in.</p>
      </template>
    </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      submitted: false
    };
  },
  methods: {
    signin() {
      this.$validator.validate().then(result => {
        if (result) {
          this.submitted = true; 
        }
      });
    }
  }
};
</script>
