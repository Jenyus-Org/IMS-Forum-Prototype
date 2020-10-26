<template>
  <div class="app">
    <Header />
    <Navigation />
    <b-container fluid>
      <main role="main">
        <router-view />
      </main>
      <Footer />
    </b-container>
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
.view {
  height: 100%;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  min-height: 100vh;
  justify-items: stretch;
  padding: 50px 0 0 250px;
}

main {
  height: 100%;
  flex: 1;
  padding: 20px;
}
</style>
