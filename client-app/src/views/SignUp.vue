<template>
  <div class="top-level-container">
    <div class="container">
      <div class="content">
        <div class="content-element">
          <span class="title-content">Username:</span>
          <div class="input-element">
            <b-form-input
              class="input"
              placeholder="Create Username"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-element">
          <span class="title-content">Email:</span>
          <div class="input-element">
            <b-form-input
              class="input"
              placeholder="Enter your email"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-element">
          <span class="title-content">Password:</span>
          <div class="input-element">
            <b-form-input
              class="input"
              type="password"
              placeholder="Create password"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-element">
          <span class="title-content">Password:</span>
          <div class="input-element">
            <b-form-input
              class="input"
              type="password"
              placeholder="Repeat your password"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-text-element">
          <div class="content-element">
            <span>Already have an account?</span>
            <span class="link" @click="signIn()">SignIn</span>
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
  methods:{
    signIn(){
      this.$router.push("/signIn");
    },
    register(){
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
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
.content {
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -75%);
  text-align: left;
}
.content span {
  padding-left: 2px;
  color: var(--font-colour);
  font-size: 14px;
}
.content span:hover {
  cursor: default;
}
.content-text-element {
  display: flex;
  justify-content: space-between;
  margin-right: 12px;
}
.content-button-element {
  display: flex;
}
.button-element {
  flex: 1;
}
.title-content {
  line-height: 1;
  font-weight: bold;
  text-decoration: underline;
}
.input-element {
  display: flex;
  margin-bottom: 10px;
}
.input-element span {
  color: var(--danger);
  padding-left: 5px;
  font-size: 20px;
}
.input {
  padding-left: 10px;
  box-shadow: 0px 2px var(--dark-primary);
  border: none;
  background-color: var(--light-primary);
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.link {
  color: var(--dark-primary) !important;
  font-weight: 550;
  text-decoration: underline;
}
.link:hover {
  cursor: pointer !important;
}
.button-element {
  margin-right: 10px;
  margin-top: 10px;
}
.button {
  width: 100%;
  padding: 5px;
  color: var(--font-colour);
  background-color: var(--light-primary);
  border: none;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  box-shadow: 0px 2px var(--dark-primary);
}
@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  .content {
    left: 0;
    top: 0;
    width: 90%;
    margin: 0 auto;
    transform: translate(0, 0);
  }
}
</style>
