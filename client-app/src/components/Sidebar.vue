<template>
  <div>
    <div class="sidebar">
      <transition name="slide">
        <div v-if="this.$store.state.activeNav" class="sidebar-panel">
          <slot></slot>
        </div>
      </transition>
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #e0e0e0;
  opacity: 0.8;
  position: absolute;
  left: 0;
  top:50px;
  height:calc(100vh - 50px);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 1;
  padding: 1rem 10px 2rem 10px;
  width: 200px;
  min-width: 150px;
}
</style>
