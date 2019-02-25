<template>
  <div>
    <h2>Sign Up for Newsletter</h2>
    <template v-if="!submitted">
      <form @submit.prevent="signup()" novalidate>
        <div class="field">
          <label class="label" for="firstname">Firstname</label>
          <div class="control">
            <input class="input" type="text" id="firstname" name="firstname" v-model="firstname" v-validate="'required'">
          </div>
          <p class="help is-danger" v-show="errors.has('firstname')">{{ errors.first("firstname") }}</p>
        </div>
        <div class="field">
          <label class="label" for="age">Your age</label>
          <div class="control">
            <input class="input" type="number" id="age" name="age" v-model="age" v-validate="'numeric'">
          </div>
          <p class="help is-danger" v-show="errors.has('age')">{{ errors.first("age") }}</p>
        </div>
        <div class="field">
          <label class="label" for="email">E-mail</label>
          <div class="control">
            <input class="input" type="email" id="email" name="email" v-model.lazy="email" v-validate="'required|email'">
          </div>
          <p class="help is-danger" v-show="errors.has('email')">{{ errors.first("email") }}</p>
        </div>
        <div class="field">
          <label class="label" for="topic">Select your area of interest</label>
          <div class="control">
            <div class="select">
              <select id="topic" name="topic" v-model="topic" v-validate="'required'">
                <option value disabled>Please select</option>
                <option v-for="topic in topics" :key="topic">{{ topic }}</option>
              </select>
            </div>
          </div>
          <p class="help is-danger" v-show="errors.has('topic')">{{ errors.first("topic") }}</p>
        </div>
        <button class="button is-link" type="submit">Sign me up</button>
        <pre class="error-msg" v-show="errors.any()">{{ errors.all() }}</pre>
      </form>
    </template>
    <template v-else>
      <p>Thanks for submitting!</p>
      <p>Your name is {{ firstname }} and you are {{ age }} old. Your email is {{ email }}.</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      email: '',
      age: '',
      topic: '',
      submitted: false,
      topics: ["Sports", "Arts", "Movies", "Travel"]
    };
  },
  methods: {
    signup() {
      this.$validator.validate().then(result => {
        if (result) {
          alert("Message submitted");
          this.submitted = true; 
        }
      });
    }
  }
};
</script>

<style lang="scss">
.control, pre {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

pre {
  margin-top: 20px;
}
</style>