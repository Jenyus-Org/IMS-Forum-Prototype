<template>
  <div>
    <Header />
    <Navigation />
    <div class="home">
      <div @click="toggleNav()" class="view" :class="{ activenavbar: this.$store.state.activeNav }">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { Header, Navigation, Footer } from "@/components/index";

export default {
  name: "Home",
  components: {
    Header,
    Navigation,
    Footer,
  },
  methods: {
    toggleNav() {
      this.$store.dispatch("changeNavVisibility", false);
    },
  },
};
</script>
<style scoped>
.view {
  padding-top:10px;
  height:100vh;
  width:100%;
}
</style>
