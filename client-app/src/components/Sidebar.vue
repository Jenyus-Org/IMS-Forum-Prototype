<template>
  <div>
    <div class="sidebar">
        <div class="sidebar-panel">
          <div class="nav-header">
            <span>Imorum</span>
          </div>
          <slot></slot>
        </div>
    </div>
  </div>
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

<style scoped>
@import "../assets/css/nav.css";

.sidebar-panel {
  overflow-y: auto;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  height:100%;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  z-index: 1;
  padding: 1rem 10px 2rem 10px;
  box-shadow: 0 1px 3px  var(--light-primary), 0 1px 3px var(--light-primary),0 1px 3px  var(--light-primary), 0 1px 3px  var(--light-primary);
  width: 200px;
  min-width: 150px;
  padding:0;
}
.nav-header{
  height:50px;
  align-items: center;
  display:flex;
  align-items: center;
}
.nav-header span{
  flex:1;
  font-weight:bold;
}
.nav-header span:hover{
  cursor:default;
}
</style>
