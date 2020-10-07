<template>
  <div>
    <Sidebar>
      <div class="sidenav-links">
        <div class="align-top">
          <router-link class="nav-link" exact-active-class="active" to="/"
            >Home</router-link
          >
          <router-link class="nav-link" exact-active-class="active" to="about"
            >About</router-link
          >
        </div>
        <div class="align-bottom">
          <router-link
            class="nav-link"
            exact-active-class="active"
            to="settings"
            >Settings</router-link
          >
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "Navigaton",
  data() {
    return {};
  },
  methods: {
    toggle() {
      this.$store.dispatch("changeNavVisibility", !this.$store.state.activeNav);
    },
  },
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
@import "../assets/css/nav.css";

.sidenav-links {
  display: block;
  text-align: start;
}
.nav-link {
  color: var(--dark-font-colour);
  border-left: solid 5px transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.nav-link:hover {
  background-color: var(--light-primary);
}
.active {
  color: var(--dark-primary);
  border-left: solid 5px var(--primary);
}
.align-top{
  width:100%;
}
.align-bottom{
  width:100px;
  position:absolute;
  bottom:10px;
  left:10;
}
</style>
