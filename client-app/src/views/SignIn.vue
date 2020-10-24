<template>
  <div class="top-level-container">
    <div class="container">
      <div class="content">
        <div class="content-element mb-2">
          <span class="title-content">Username</span>
          <div class="input-element">
            <b-form-input
              class="input mt-2"
              placeholder="Enter your name"
              v-model="username"
            ></b-form-input>
            <span class="mt-2">*</span>
          </div>
        </div>
        <div class="content-element mb-2">
          <span class="title-content">Password</span>
          <div class="input-element">
            <b-form-input
              class="input mt-2"
              type="password"
              placeholder="Enter your password"
              v-model="password"
            ></b-form-input>
            <span class="mt-2">*</span>
          </div>
        </div>
        <div class="content-text-element mb-1">
          <div class="content-element">
            <span>Forgot your <span class="link">password</span>?</span>
          </div>
          <div class="content-element">
            <span>Do not have an account yet?</span>
            <span class="link" @click="register()">Register now.</span>
          </div>
        </div>
        <div class="content-element content-button-element">
          <div class="button-element">
            <b-button class="button" @click="close()">Cancel</b-button>
          </div>
          <div class="button-element">
            <b-button class="button" @click="signIn()">Sign In</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    close() {
      this.$router.push("/");
    },
    signIn() {
      if (this.username && this.password) {
        this.$strapi
          .login({ identifier: this.username, password: this.password })
          .then(() => this.$router.push("/"));
      }
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/form.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.top-level-container {
  height: 100vh;
  width: 100%;
}
.container {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 50%;
}
</style>
