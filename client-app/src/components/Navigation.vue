<template>
  <Sidebar>
    <div class="sidenav-links">
      <div class="align-top">
        <router-link class="nav-link" exact-active-class="active" to="home">
          <div class="navlink-container">
            <FontAwesomeIcon class="icon fa-sm" icon="home" />
            <span class="link-title">Home</span>
          </div>
        </router-link>
        <router-link class="nav-link" exact-active-class="active" to="tutorials">
          <div class="navlink-container">
            <FontAwesomeIcon class="icon fa-sm" icon="chalkboard" />
            <span class="link-title">Tutorial</span>
          </div>
        </router-link>
      </div>
      <div class="align-bottom">
        <div class="settings">
          <router-link class="nav-link-settings" to="user">
            <div class="navlink-container">
              <FontAwesomeIcon class="icon fa-lg cogs" icon="cogs" />
              <span class="link-title">Settings</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </Sidebar>
</template>

<script>
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Navigaton",
  data() {
    return {};
  },
  methods: {},
  components: {
    Sidebar,
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
@import "../assets/css/nav.css";

.sidenav-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 50px);
  text-align: start;
  color: var(--font-colour) !important;
}
a {
  color: var(--font-colour);
}
a:hover {
  text-decoration: none;
}
.navlink-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
}
.nav-link {
  padding: 0 !important;
}
.link-title {
  flex: 1;
}
.navlink-container:hover {
  background-color: var(--light-primary);
}
.active {
  color: var(--dark-primary);
}
.align-top {
  width: 100%;
}
.align-bottom {
  bottom: 10px;
}
.settings:hover {
  background-color: var(--light-primary);
}
.icon {
  flex: 0.3;
  align-self: center;
  margin-left: 10px;
  height: 1.33em;
}
.cogs {
  height: 1em;
}
</style>
