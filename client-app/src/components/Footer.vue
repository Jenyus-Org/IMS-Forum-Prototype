<template>
  <div class="footer">
    <p>Footer</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  height: 150px;
  width: 100%;
  border-top: solid 1px black;
  display: flex;
  justify-content: space-around;
  background-color: var(--secondary);
  z-index: 999;
}
</style>
