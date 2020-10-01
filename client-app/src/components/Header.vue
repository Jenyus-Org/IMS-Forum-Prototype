<template>
  <div>
    <div v-if="loggedIn" class="header">
      <p>Header logged In</p>
    </div>
    <div v-else class="header">
      <p>SignIn</p>
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
};
</script>

<style scoped>
.header{
  width: 100%;
  height:50px;
  border-bottom: solid 1px black;
}
.header p{
  text-align: right;
  text-decoration: underline;
  position:relative;
  transform: translate(450px, -14px);
  top:50%;
  right:40%;
}
</style>
