<template>
  <div id="app">
    <Navigation />
    <Header />
    <Footer />
    <div @click="toggleNav()" class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Header, Navigation, Footer } from "@/components/index";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Footer,
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
  color: #2c3e50;
}
.view{
  height:100vh;
  width:100%;
}
</style>
