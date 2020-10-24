<template>
  <div class="top-level-container">
    <div class="container">
      <div class="content">
        <div class="content-element mb-2">
          <span class="title-content">Username</span>
          <div class="input-element">
            <b-form-input
              class="input mt-2"
              placeholder="Create Username"
              v-model="username"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-element mb-2">
          <span class="title-content">Email</span>
          <div class="input-element">
            <b-form-input
              class="input mt-2"
              placeholder="Enter your email"
              v-model="email"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-element mb-2">
          <span class="title-content">Password</span>
          <div class="input-element">
            <b-form-input
              class="input mt-2"
              type="password"
              placeholder="Create password"
              v-model="password"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-element mb-2">
          <span class="title-content">Password</span>
          <div class="input-element">
            <b-form-input
              class="input mt-2"
              type="password"
              placeholder="Repeat your password"
              v-model="passwordConfirm"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-text-element">
          <div class="content-element mb-1">
            <span>Already have an account?</span>
            <span class="link" @click="signIn()">Sign in.</span>
          </div>
        </div>
        <div class="content-element content-button-element">
          <div class="button-element">
            <b-button class="button" @click="register()"> Register</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    signIn() {
      this.$router.push("/signIn");
    },
    register() {
      if (
        this.email &&
        this.password &&
        this.username &&
        this.password === this.passwordConfirm
      ) {
        this.$strapi
          .register({
            email: this.email,
            username: this.username,
            password: this.password,
          })
          .then(() => this.$router.push("/"));
      }
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
