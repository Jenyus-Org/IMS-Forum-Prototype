<template>
  <div>
    <div class="home">
      <Navigation />
      <Header />
      <div class="view activenavbar">
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
  methods: {},
};
</script>
<style scoped>
</style>
