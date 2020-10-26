<template>
  <b-sidebar
    width="200px"
    visible
    no-slide
    no-header-close
    no-close-on-esc
    no-close-on-backdrop
    no-close-on-route-change
    no-header
    class="sidebar"
  >
    <div class="px-3 py-2">
      <div class="nav-header text-center"><span>Imorum</span></div>
      <slot></slot>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      loggedIn: false,
      resp: false,
      toggledNavigation: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.b-sidebar {
  top: 50px;
}
.b-sidebar > .b-sidebar-body {
  overflow-y: auto;
  background-color: #f5f5f5;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 1rem 10px 2rem 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15), 0 1px 4px rgba(0, 0, 0, 0.15);
  width: 250px;
  min-width: 150px;
  padding: 0;
}
</style>

<style lang="scss" scoped>
@import "../assets/css/nav.css";
.nav-header {
  height: 50px;
  align-items: center;
  display: flex;
  align-items: center;
}
.nav-header span {
  flex: 1;
  font-weight: bold;
}
.nav-header span:hover {
  cursor: default;
}
</style>
