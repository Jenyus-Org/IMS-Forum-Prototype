<template>
  <div class="header">
    <div class="header-content">
      <div
        id="burger"
        :class="{ active: this.$store.state.activeNav }"
        @click.prevent="toggle"
      >
        <slot>
          <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
          </button>
        </slot>
      </div>
    </div>
    <div v-if="loggedIn" class="header-content text">
      <p>Header logged In</p>
    </div>
    <div v-else class="header-content text">
      <a href="/signIn">SignIn</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    toggle() {
      this.$store.dispatch("changeNavVisibility", !this.$store.state.activeNav);
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  background-color: var(--dark-primary);
  height: 50px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.text {
  align-self: center;
}
.text a {
  color: var(--light-font-colour);
}
.header-content {
  flex: 1;
}
</style>
