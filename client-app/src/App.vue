<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  methods: {
    toggleNav() {
      console.log();
      if (this.$store.state.activeNav) {
        this.$store.dispatch(
          "changeNavVisibility",
          !this.$store.state.activeNav
        );
      }
    },
  },
};
</script>

<style>
@import "./assets/css/main.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
