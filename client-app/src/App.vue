<template>
  <div id="app">
    <layout><router-view /></layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";

export default {
  name: "App",
  components: { Layout },
  methods: {
    toggleNav() {
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
}
</style>
