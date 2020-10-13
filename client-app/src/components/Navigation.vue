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
          <div class="settings">
            <FontAwesomeIcon class="icon fa-lg" icon="cogs" />
            <router-link class="nav-link-settings" to="settings"
              >Settings</router-link
            >
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
    FontAwesomeIcon,
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
  width: 100%;
  color: var(--dark-font-colour);
  border-left: solid 5px transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.nav-link:hover {
  background-color: var(--secondary);
}
.active {
  color: var(--primary);
  border-left: solid 5px var(--primary);
}
.align-top {
  width: 100%;
}
.align-bottom {
  width: 90%;
  position: absolute;
  bottom: 10px;
}
.settings {
  display: flex;
}
.nav-link-settings{
  width: 100%;
  color: var(--font-colour);
  border-left: solid 5px transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.icon {
  position: relative;
  top: 12px;
}
</style>
