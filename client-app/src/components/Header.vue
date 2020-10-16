<template>
  <div class="header">
    <div class="header-content">

    </div>
    <div v-if="loggedIn" class="header-content text">
      <p>Header logged In</p>
    </div>
    <div v-else class="header-content text">
      <a href="/signIn">Sign In</a>
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
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  background-color: var(--primary);
  height: 50px;
  box-shadow: 0 1px 3px var(--light-primary), 0 1px 2px var(--light-primary);
}
.text {
  align-self: center;
}
.text a {
  padding:10px;
  padding-bottom:5px;
  color: var(--font-colour);
}
.text a:hover{
  cursor:pointer;
  text-decoration:none;
}
.header-content {
  flex: 1;
}
</style>
