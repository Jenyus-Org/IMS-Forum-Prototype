<template>
  <div class="top-level-container">
    <div class="container">
      <div class="cross-container">
        <div class="cross-div" @click="close()">
          <span class="cross cross--1"></span>
          <span class="cross cross--2"></span>
        </div>
      </div>
      <div class="content">
        <div class="content-element">
          <span class="title-content">Username:</span>
          <div class="input-element">
            <b-form-input
              class="input"
              placeholder="Enter your name"
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
              placeholder="Enter your name"
            ></b-form-input>
            <span>*</span>
          </div>
        </div>
        <div class="content-text-element">
          <div class="content-element">
            <span>Forgot your </span>
            <span class="link">password</span>
            <span>?</span>
          </div>
          <div class="content-element">
            <span>Do not yet have an account?</span>
            <span class="link">register now</span>
          </div>
        </div>
        <div class="content-element">
          <div class="button-element">
            <b-button class="button" @click="signIn()"> SignIn</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    close() {
      this.$router.push("/");
    },
    signIn(){
      this.$router.push("/");
    }
  },
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.cross-container {
  display: flex;
  justify-content: flex-end;
}
.cross-div {
  position: relative;
  top: 15px;
  right:30px;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 1;
  border: 0;
  border-radius: 0;
}
.cross {
  background-color: #130f40;
  position: absolute;
  top: 15px;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
}
.cross-div:hover {
  cursor: pointer;
}
.cross--1 {
  transform: translateY(-6px);
  transform: rotate(45deg);
}
.cross--2 {
  transform: rotate(-45deg);
}
.content {
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  left: 50%;
  top:50%;
  transform: translate(-50%,-75%);
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
  box-shadow: 1px 2px var(--primary);
  border: none;
  border-radius: 5px;
  background-color: var(--light-secondary);
  border-bottom: solid 1px var(--primary);
}
.link {
  color: var(--primary) !important;
  font-weight: 550;
  text-decoration: underline;
}
.link:hover {
  cursor: pointer !important;
}
.button-element{
  margin-right:10px;
  margin-top:10px;
}
.button{
  width:100%;
  padding:5px;
  color:var(--font-colour);
  background-color:var(--light-secondary);
  border:none;
  border-bottom:solid 1px var(--primary);
  box-shadow: 1px 2px var(--primary);
}
</style>
