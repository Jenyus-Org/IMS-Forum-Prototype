<template>
  <div>
    <div class="header-logo">
      <div
        id="burger"
        :class="{ active: this.$store.state.activeNav }"
        @click.prevent="toggle"
      >
        <slot>
          <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
          </button>
        </slot>
      </div>
    </div>
    <div v-if="loggedIn" class="header">
      <p>Header logged In</p>
    </div>
    <div v-else class="header">
      <p>SignIn</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loggedIn: false
    };
  },
  methods:{
    toggle(){
      this.$store.dispatch("changeNavVisibility", !this.$store.state.activeNav);
    }
  }
};
</script>

<style scoped>
.header{
  width: 100%;
  height:50px;
  border-bottom: solid 1px black;
}
.header p{
  text-align: right;
  text-decoration: underline;
  position:relative;
  transform: translate(20%, -14px);
  top:50%;
  right:40%;
}
.header-logo {
  position:absolute;
  height: 50px;
  width: 20%;
  display: flex;
  justify-content: flex-start;
  margin-left:10px;
}
</style>
