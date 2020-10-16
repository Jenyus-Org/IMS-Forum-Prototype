<template>
  <div>
    <Navigation />
    <Header />
    <div class="home">
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
  methods: {
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
